// import "dotenv/config";
// import { PrismaClient } from "@prisma/client";
// import { hashPassword } from "../lib/auth";
// import { Role } from "../app/types";

// const prisma = new PrismaClient();

// async function main() {
//     console.log("Starting database seed...");
//     // create drivers
//     const drivers = await Promise.all([
//         prisma.driver.create({
//             data: {
//                 name: "Abdul",
//                 description: "From Hyderabad",
//                 code: "DRV001",
//             },
//         }),
//         prisma.driver.create({
//             data: {
//                 name: "Ali",
//                 description: "From Karachi",
//                 code: "DRV002",
//             },
//         }),
//         prisma.driver.create({
//             data: {
//                 name: "Noor",
//                 description: "From Lahore",
//                 code: "DRV003",
//             },
//         }),
//     ]);

//     const sampleUser = [
//         {
//             name: "John Driver",
//             email: "john@gmail.com",
//             driver: drivers[0],
//             role: Role.DRIVER,
//         },
//         {
//             name: "Will User",
//             email: "will@gmail.com",
//             driver: drivers[0],
//             role: Role.USER,
//         },
//         {
//             name: "Max Driver",
//             email: "max@gmail.com",
//             driver: drivers[1],
//             role: Role.DRIVER,
//         },
//         {
//             name: "El User",
//             email: "el@gmail.com",
//             driver: drivers[1],
//             role: Role.USER,
//         },
//     ];

//     for (const userData of sampleUser) {
//         await prisma.user.create({
//             data: {
//                 email: userData.email,
//                 name: userData.name,
//                 password: await hashPassword("112233"),
//                 role: userData.role,
//                 driverId: userData.driver.id,
//             },
//         });
//     }
//     console.log("✅ Database seeded successfully!");
// }

// main()
//     .catch((e) => {
//         console.error("❌ Seeding failed", e);
//         process.exit(1);
//     }).finally(async () => {
//         await prisma.$disconnect();
//     });