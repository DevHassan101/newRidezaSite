import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { generateToken, hashPassword } from "@/lib/auth";
import { Role } from "@/app/types";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export async function POST(request: NextRequest) {
    try {
        // FormData parse karo (file support ke liye)
        const formData = await request.formData();
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;
        const password = formData.get("password") as string;
        const aadhaar = formData.get("aadhaar") as string;
        const city = formData.get("city") as string;
        const profilePicFile = formData.get("profilePic") as File | null;

        // validate required fields
        if (!name || !email || !phone || !password || !aadhaar || !city) {
            return NextResponse.json(
                { error: "Name, email, phone, password, aadhaar and city are required" },
                { status: 400 }
            );
        }

        // email already exists?
        const existingEmail = await prisma.user.findUnique({ where: { email } });
        if (existingEmail) {
            return NextResponse.json(
                { error: "User with this email already exists" },
                { status: 409 }
            );
        }

        // phone already exists?
        const existingPhone = await prisma.user.findUnique({ where: { phone } });
        if (existingPhone) {
            return NextResponse.json(
                { error: "User with this phone number already exists" },
                { status: 409 }
            );
        }

        // aadhaar already exists?
        const cleanAadhaar = aadhaar.replace(/\s/g, "");
        const existingAadhaar = await prisma.driverProfile.findUnique({ where: { aadhaar: cleanAadhaar } });
        if (existingAadhaar) {
            return NextResponse.json(
                { error: "Driver with this Aadhaar already exists" },
                { status: 409 }
            );
        }

        // NAYA — file physically public/uploads/drivers mein save hogi
        let profilePicPath: string | null = null;
        if (profilePicFile && profilePicFile.size > 0) {
            const bytes = await profilePicFile.arrayBuffer();
            const buffer = Buffer.from(bytes);

            // Unique filename — timestamp + original name
            const filename = `${Date.now()}-${profilePicFile.name.replace(/\s/g, "_")}`;

            // Folder: public/uploads/drivers
            const uploadDir = path.join(process.cwd(), "public", "uploads", "drivers");
            await mkdir(uploadDir, { recursive: true }); // folder nahi hai toh bana do

            const filePath = path.join(uploadDir, filename);
            await writeFile(filePath, buffer);

            // DB mein sirf URL path save karo
            profilePicPath = `/uploads/drivers/${filename}`;
        }

        const hashedPassword = await hashPassword(password);

        // Transaction — dono tables ek saath insert honge
        const result = await prisma.$transaction(async (tx) => {
            const user = await tx.user.create({
                data: {
                    name,
                    email,
                    phone,
                    password: hashedPassword,
                    role: Role.DRIVER,
                },
            });

            const driverProfile = await tx.driverProfile.create({
                data: {
                    userId: user.id,
                    aadhaar: cleanAadhaar,
                    city,
                    profilePic: profilePicPath,
                },
            });

            return { user, driverProfile };
        });

        const token = generateToken(result.user.id, result.user.role);

        const response = NextResponse.json({
            message: "Driver registration successful. Pending admin approval.",
            user: {
                id: result.user.id,
                name: result.user.name,
                email: result.user.email,
                phone: result.user.phone,
                role: result.user.role,
                driverProfile: {
                    id: result.driverProfile.id,
                    city: result.driverProfile.city,
                    status: result.driverProfile.status,
                },
            },
        }, { status: 201 });

        response.cookies.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 60 * 60 * 24 * 7,
        });

        return response;

    } catch (error) {
        console.error("Driver registration error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}