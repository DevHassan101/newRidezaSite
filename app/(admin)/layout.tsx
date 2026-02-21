import Sidebar from "./components/sidebar";
import Header from "./components/header";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-linear-to-br from-cyan-50/60 via-white to-zinc-50">
            {/* rideza-sidebar */}
            <Sidebar />
            {/* rideza-header */}
            <Header />
            {/* rideza-main-content */}
            <main className="ml-64 pt-17 min-h-screen">
                <div className="p-6">
                    {children}
                </div>
            </main>
        </div>
    );
}