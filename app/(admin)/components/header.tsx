"use client";

import { useState } from "react";

interface HeaderProps {
    sidebarOpen: boolean;
    onToggle: () => void;
}

export default function Header({ sidebarOpen, onToggle }: HeaderProps) {
    const [searchValue, setSearchValue] = useState("");

    return (
        <header className={`fixed top-0 right-0 h-17 bg-white/90 backdrop-blur-sm border-b border-cyan-100 flex items-center px-6 gap-4 z-30 shadow-sm shadow-cyan-50 transition-all duration-300 
            ${sidebarOpen ? "md:left-72 left-0" : "left-0"}`}>
            {/* header-hamburger */}
            <button onClick={onToggle} className="w-10 h-10 cursor-pointer rounded-xl border-2 border-zinc-200 bg-zinc-50 hover:border-cyan-300 hover:bg-cyan-50 flex items-center justify-center text-zinc-500 hover:text-cyan-500 transition-all duration-200 shrink-0">
                {sidebarOpen ? (
                    <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                ) : (
                    <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                )}
            </button>
            {/* header-title */}
            <div className="flex-1">
                <h1 className="text-[18px] font-bold text-zinc-800 tracking-tight">Dashboard</h1>
                <p className="text-[11px] text-zinc-400 tracking-wide">Welcome back, Admin 👋</p>
            </div>
            {/* header-search */}
            <div className="relative w-64 hidden sm:block">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </span>
                <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="Search anything..." className="w-full border-2 border-zinc-200 bg-zinc-50 text-zinc-700 placeholder-zinc-400 
                rounded-xl pl-9 pr-4 py-2 text-[13.5px] focus:outline-none focus:border-cyan-400 focus:bg-white focus:ring-2 focus:ring-cyan-100 transition-all duration-200" />
            </div>
            {/* notification-bell */}
            <button className="relative w-10 h-10 rounded-xl border-2 border-zinc-200 bg-zinc-50 hover:border-cyan-300 hover:bg-cyan-50 flex items-center justify-center text-zinc-500 hover:text-cyan-500 transition-all duration-200">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-cyan-500 border-2 border-white" />
            </button>
            {/* header-avatar */}
            <button className="flex items-center gap-2.5 pl-2 pr-3 py-1.5 rounded-xl hover:bg-cyan-50 border-2 border-transparent hover:border-cyan-200 transition-all duration-200 group">
                <div className="w-8 h-8 rounded-lg bg-linear-to-br from-cyan-400 to-cyan-600 flex items-center justify-center text-white font-bold text-sm shadow-sm shadow-cyan-200">
                    A
                </div>
                <div className="text-left hidden sm:block">
                    <p className="text-[12.5px] font-semibold text-zinc-700 leading-none">Admin</p>
                    <p className="text-[10.5px] text-zinc-400 mt-0.5">Super Admin</p>
                </div>
                <svg className="w-3.5 h-3.5 text-zinc-400 group-hover:text-cyan-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
        </header>
    );
}