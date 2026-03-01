"use client";

import { useState, useEffect } from "react";
import Sidebar from "./components/sidebar";
import Header from "./components/header";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    // mobile-par-auto-close
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 856) {
                setSidebarOpen(false);
            } else {
                setSidebarOpen(true);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="min-h-screen bg-zinc-100/60">
            <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            {/* mobile-overlay */}
            {sidebarOpen && ( <div className="fixed inset-0 bg-black/30 z-30 md:hidden" onClick={() => setSidebarOpen(false)} /> )}
            <Header sidebarOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
            <main className={`transition-all duration-300 pt-20 min-h-screen ${ sidebarOpen ? "md:ml-72" : "ml-0" }`}>
                <div className="p-6">{children}</div>
            </main>
        </div>
    );
}