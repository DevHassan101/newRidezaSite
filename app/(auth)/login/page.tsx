"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterForm() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Registering:", { name, password });
    };

    return (
        <section className="bg-white min-h-screen flex items-center justify-center py-10">
            <div className="relative w-full max-w-[95%] md:max-w-[60%] lg:max-w-[38%]">
                <div className="relative w-full bg-white border border-cyan-300 rounded-3xl p-9 shadow-sm shadow-cyan-100">
                    {/* top-accent-strip */}
                    <div className="absolute top-0 left-8 right-8 h-1 rounded-b-full bg-linear-to-r from-cyan-300 via-cyan-500 to-cyan-300" />
                    {/* header */}
                    <div className="mb-8 mt-2">
                        <div className="flex items-center gap-2.5 mb-3">
                            <div className="w-10 h-10 rounded-lg bg-linear-to-br from-cyan-400 to-cyan-500 flex items-center justify-center shadow-sm shadow-cyan-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5.5 h-5.5" viewBox="0 0 24 24"><path fill="#fff" d="M12 3.75a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5m-4 9.5A3.75 3.75 0 0 0 4.25 17v1.188c0 .754.546 1.396 1.29 1.517c4.278.699 8.642.699 12.92 0a1.54 1.54 0 0 0 1.29-1.517V17A3.75 3.75 0 0 0 16 13.25h-.34q-.28.001-.544.086l-.866.283a7.25 7.25 0 0 1-4.5 0l-.866-.283a1.8 1.8 0 0 0-.543-.086z" strokeWidth="0.1" stroke="#fff" /></svg>
                            </div>
                            <h1 className="text-[26px] font-bold text-cyan-500 tracking-wide leading-none">Login Here</h1>
                        </div>
                        <p className="text-zinc-400 text-sm tracking-wider pl-0.5">Fill the details below to get started.</p>
                    </div>
                    <form onSubmit={handleRegister} className="space-y-5">
                        {/* full-name */}
                        <div className="group">
                            <label className="block text-[15px] font-semibold text-zinc-500 mb-2 tracking-wide">
                                Full Name
                            </label>
                            <div className="relative">
                                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-cyan-400 group-focus-within:text-cyan-500 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4.5 h-4.5" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M7.75 7.5a4.25 4.25 0 1 1 8.5 0a4.25 4.25 0 0 1-8.5 0M12 4.75a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5m-4 10A2.25 2.25 0 0 0 5.75 17v1.188c0 .018.013.034.031.037c4.119.672 8.32.672 12.438 0a.04.04 0 0 0 .031-.037V17A2.25 2.25 0 0 0 16 14.75h-.34a.3.3 0 0 0-.079.012l-.865.283a8.75 8.75 0 0 1-5.432 0l-.866-.283a.3.3 0 0 0-.077-.012zM4.25 17A3.75 3.75 0 0 1 8 13.25h.34q.28.001.544.086l.866.283a7.25 7.25 0 0 0 4.5 0l.866-.283c.175-.057.359-.086.543-.086H16A3.75 3.75 0 0 1 19.75 17v1.188c0 .754-.546 1.396-1.29 1.517a40.1 40.1 0 0 1-12.92 0a1.54 1.54 0 0 1-1.29-1.517z" clipRule="evenodd" strokeWidth="0.1" stroke="currentColor" /></svg>
                                </span>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name" required
                                    className="w-full border-2 border-zinc-200 bg-zinc-50/80 text-black placeholder-zinc-400 rounded-[10px] pl-10 pr-4 py-3.5 text-[14.5px] focus:outline-none focus:border-cyan-400 focus:bg-white focus:ring-2 focus:ring-cyan-100 transition-all duration-200" />
                            </div>
                        </div>
                        {/* user-password */}
                        <div className="group">
                            <label className="block text-[15px] font-semibold text-zinc-500 mb-2 tracking-wide">
                                Password
                            </label>
                            <div className="relative">
                                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-cyan-400 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24"><g fill="none"><path stroke="currentColor" strokeWidth="2" d="M4 13c0-1.886 0-2.828.586-3.414S6.114 9 8 9h8c1.886 0 2.828 0 3.414.586S20 11.114 20 13v2c0 2.828 0 4.243-.879 5.121C18.243 21 16.828 21 14 21h-4c-2.828 0-4.243 0-5.121-.879C4 19.243 4 17.828 4 15z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M16 8V7a4 4 0 0 0-8 0v1" /><circle cx="12" cy="15" r="2" fill="currentColor" /></g></svg>
                                </span>
                                <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password" required
                                    className="w-full border-2 border-zinc-200 bg-zinc-50/80 text-black placeholder-zinc-400 rounded-[10px] pl-10 pr-12 py-3.5 text-[14.5px] focus:outline-none focus:border-cyan-400 focus:bg-white focus:ring-2 focus:ring-cyan-100 transition-all duration-200" />
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-cyan-500 transition-colors">
                                    {showPassword ? (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                        </svg>
                                    ) : (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                        {/* submit-button */}
                        <div className="pt-1">
                            <Link href="/admin">
                                <button type="submit" className="relative w-full cursor-pointer overflow-hidden bg-linear-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-white font-semibold py-3.75 rounded-[10px] text-[15px] tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-cyan-300/50 active:scale-[0.98] group">
                                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                                    <span className="relative flex items-center justify-center gap-2">
                                        Sign In
                                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </span>
                                </button>
                            </Link>
                        </div>
                    </form>
                    {/* divider */}
                    <div className="flex items-center gap-3 my-5">
                        <div className="flex-1 h-px bg-zinc-200" />
                        <span className="text-xs text-zinc-400 tracking-wider">OR</span>
                        <div className="flex-1 h-px bg-zinc-200" />
                    </div>
                    {/* footer */}
                    <p className="text-center text-zinc-500 text-[14px]">
                        Hey you have an account ?
                        <Link href="register" className="pl-2 font-semibold text-cyan-500 underline underline-offset-2 hover:text-cyan-600 transition-colors">
                            Register Here
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}