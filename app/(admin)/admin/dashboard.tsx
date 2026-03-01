// "use client";

// import { useState, useEffect } from "react";

// type DriverStatus = "PENDING" | "APPROVED" | "REJECTED" | "SUSPENDED";

// interface Driver {
//     id: string;
//     city: string;
//     status: DriverStatus;
//     reviewNote?: string | null;
//     createdAt: string;
//     user: {
//         id: string;
//         name: string;
//         email: string;
//         phone: string;
//         isActive: boolean;
//     };
// }

// const statusStyle: Record<DriverStatus, string> = {
//     PENDING: "bg-amber-50 text-amber-600 border border-amber-200",
//     APPROVED: "bg-emerald-50 text-emerald-600 border border-emerald-200",
//     REJECTED: "bg-red-50 text-red-500 border border-red-200",
//     SUSPENDED: "bg-zinc-100 text-zinc-500 border border-zinc-200",
// };

// const statusOptions: { value: DriverStatus; label: string }[] = [
//     { value: "APPROVED", label: "Approve" },
//     { value: "REJECTED", label: "Reject" },
//     { value: "SUSPENDED", label: "Suspend" },
//     { value: "PENDING", label: "Set Pending" },
// ];

// export default function AdminDriversPage() {
//     const [drivers, setDrivers] = useState<Driver[]>([]);
//     const [summary, setSummary] = useState({ total: 0, pending: 0, approved: 0, rejected: 0, suspended: 0 });
//     const [loading, setLoading] = useState(true);
//     const [filterStatus, setFilterStatus] = useState<string>("");
//     const [actionLoading, setActionLoading] = useState<string | null>(null);

//     // modal state
//     const [modal, setModal] = useState<{ open: boolean; driver: Driver | null }>({ open: false, driver: null });
//     const [newStatus, setNewStatus] = useState<DriverStatus>("APPROVED");
//     const [reviewNote, setReviewNote] = useState("");

//     const fetchDrivers = async (status?: string) => {
//         setLoading(true);
//         try {
//             const url = status ? `/api/admin/drivers?status=${status}` : "/api/admin/drivers";
//             const res = await fetch(url);
//             const data = await res.json();
//             setDrivers(data.drivers || []);
//             setSummary(data.summary || {});
//         } catch {
//             console.error("Failed to fetch drivers");
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchDrivers(filterStatus || undefined);
//     }, [filterStatus]);

//     const openModal = (driver: Driver) => {
//         setModal({ open: true, driver });
//         setNewStatus("APPROVED");
//         setReviewNote("");
//     };

//     const closeModal = () => {
//         setModal({ open: false, driver: null });
//         setReviewNote("");
//     };

//     const handleStatusChange = async () => {
//         if (!modal.driver) return;
//         setActionLoading(modal.driver.id);
//         try {
//             const res = await fetch(`/api/admin/driver/${modal.driver.id}/status`, {
//                 method: "PATCH",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ status: newStatus, reviewNote: reviewNote || null }),
//             });
//             if (res.ok) {
//                 closeModal();
//                 fetchDrivers(filterStatus || undefined);
//             }
//         } catch {
//             console.error("Status update failed");
//         } finally {
//             setActionLoading(null);
//         }
//     };

//     return (
//         <div className="space-y-6">
//             {/* Summary Cards */}
//             <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
//                 {[
//                     { label: "Total", value: summary.total, color: "text-zinc-700" },
//                     { label: "Pending", value: summary.pending, color: "text-amber-600" },
//                     { label: "Approved", value: summary.approved, color: "text-emerald-600" },
//                     { label: "Rejected", value: summary.rejected, color: "text-red-500" },
//                     { label: "Suspended", value: summary.suspended, color: "text-zinc-500" },
//                 ].map((s) => (
//                     <div key={s.label} className="bg-white border border-zinc-100 rounded-2xl p-4 shadow-sm text-center">
//                         <p className={`text-[24px] font-bold ${s.color}`}>{s.value}</p>
//                         <p className="text-[12px] text-zinc-400 mt-0.5">{s.label}</p>
//                     </div>
//                 ))}
//             </div>
//             {/* Filter + Table */}
//             <div className="bg-white border border-zinc-100 rounded-2xl shadow-sm overflow-hidden">
//                 {/* Header */}
//                 <div className="flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 border-b border-zinc-100 gap-3">
//                     <div>
//                         <h3 className="text-[15px] font-bold text-zinc-800">All Drivers</h3>
//                         <p className="text-[12px] text-zinc-400 mt-0.5">Manage driver approvals and status</p>
//                     </div>
//                     {/* Filter */}
//                     <select
//                         value={filterStatus}
//                         onChange={(e) => setFilterStatus(e.target.value)}
//                         className="text-[13px] border border-zinc-200 rounded-xl px-3 py-2 text-zinc-600 focus:outline-none focus:border-cyan-400 bg-zinc-50"
//                     >
//                         <option value="">All Status</option>
//                         <option value="PENDING">Pending</option>
//                         <option value="APPROVED">Approved</option>
//                         <option value="REJECTED">Rejected</option>
//                         <option value="SUSPENDED">Suspended</option>
//                     </select>
//                 </div>

//                 {/* Table */}
//                 {loading ? (
//                     <div className="flex items-center justify-center py-16">
//                         <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
//                     </div>
//                 ) : drivers.length === 0 ? (
//                     <div className="text-center py-16">
//                         <p className="text-zinc-400 text-[14px]">No drivers found.</p>
//                     </div>
//                 ) : (
//                     <div className="overflow-x-auto">
//                         <table className="w-full">
//                             <thead>
//                                 <tr className="bg-zinc-50/80">
//                                     {["Name", "Email", "Phone", "City", "Status", "Joined", "Action"].map((h) => (
//                                         <th key={h} className="text-left px-5 py-3 text-[11.5px] font-semibold text-zinc-400 uppercase tracking-wider">
//                                             {h}
//                                         </th>
//                                     ))}
//                                 </tr>
//                             </thead>
//                             <tbody className="divide-y divide-zinc-50">
//                                 {drivers.map((driver) => (
//                                     <tr key={driver.id} className="hover:bg-cyan-50/40 transition-colors duration-150">
//                                         <td className="px-5 py-3.5">
//                                             <div className="flex items-center gap-2.5">
//                                                 <div className="w-8 h-8 rounded-full bg-linear-to-br from-cyan-400 to-cyan-500 flex items-center justify-center text-white text-[12px] font-bold shrink-0">
//                                                     {driver.user.name.charAt(0).toUpperCase()}
//                                                 </div>
//                                                 <span className="text-[13px] font-medium text-zinc-700">{driver.user.name}</span>
//                                             </div>
//                                         </td>
//                                         <td className="px-5 py-3.5">
//                                             <span className="text-[13px] text-zinc-500">{driver.user.email}</span>
//                                         </td>
//                                         <td className="px-5 py-3.5">
//                                             <span className="text-[13px] text-zinc-500">{driver.user.phone}</span>
//                                         </td>
//                                         <td className="px-5 py-3.5">
//                                             <span className="text-[13px] text-zinc-600">{driver.city}</span>
//                                         </td>
//                                         <td className="px-5 py-3.5">
//                                             <span className={`inline-flex text-[11.5px] font-semibold px-2.5 py-1 rounded-lg ${statusStyle[driver.status]}`}>
//                                                 {driver.status}
//                                             </span>
//                                         </td>
//                                         <td className="px-5 py-3.5">
//                                             <span className="text-[12px] text-zinc-400">
//                                                 {new Date(driver.createdAt).toLocaleDateString("en-PK", { day: "numeric", month: "short", year: "numeric" })}
//                                             </span>
//                                         </td>
//                                         <td className="px-5 py-3.5">
//                                             <button
//                                                 onClick={() => openModal(driver)}
//                                                 className="text-[12px] font-semibold text-cyan-500 hover:text-cyan-600 border border-cyan-200 hover:border-cyan-400 bg-cyan-50 hover:bg-cyan-100 px-3 py-1.5 rounded-lg transition-all duration-150"
//                                             >
//                                                 Manage
//                                             </button>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 )}
//             </div>
//             {/* Modal */}
//             {modal.open && modal.driver && (
//                 <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm px-4">
//                     <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 border border-zinc-100">
//                         <div className="flex items-start justify-between mb-5">
//                             <div>
//                                 <h4 className="text-[16px] font-bold text-zinc-800">Update Driver Status</h4>
//                                 <p className="text-[13px] text-zinc-400 mt-0.5">{modal.driver.user.name} — {modal.driver.user.email}</p>
//                             </div>
//                             <button onClick={closeModal} className="text-zinc-400 hover:text-zinc-600 transition-colors">
//                                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                                 </svg>
//                             </button>
//                         </div>

//                         {/* Current status */}
//                         <div className="mb-4 flex items-center gap-2">
//                             <span className="text-[13px] text-zinc-500">Current:</span>
//                             <span className={`inline-flex text-[11.5px] font-semibold px-2.5 py-1 rounded-lg ${statusStyle[modal.driver.status]}`}>
//                                 {modal.driver.status}
//                             </span>
//                         </div>

//                         {/* New status select */}
//                         <div className="mb-4">
//                             <label className="block text-[13px] font-semibold text-zinc-500 mb-2">New Status</label>
//                             <div className="grid grid-cols-2 gap-2">
//                                 {statusOptions.map((opt) => (
//                                     <button
//                                         key={opt.value}
//                                         onClick={() => setNewStatus(opt.value)}
//                                         className={`py-2 rounded-xl text-[13px] font-semibold border transition-all duration-150 ${
//                                             newStatus === opt.value
//                                                 ? "bg-cyan-500 text-white border-cyan-500"
//                                                 : "bg-zinc-50 text-zinc-600 border-zinc-200 hover:border-cyan-300"
//                                         }`}
//                                     >
//                                         {opt.label}
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Review note */}
//                         <div className="mb-5">
//                             <label className="block text-[13px] font-semibold text-zinc-500 mb-2">
//                                 Note <span className="text-zinc-400 font-normal">(optional)</span>
//                             </label>
//                             <textarea
//                                 value={reviewNote}
//                                 onChange={(e) => setReviewNote(e.target.value)}
//                                 placeholder="Reason for status change..."
//                                 rows={3}
//                                 className="w-full border border-zinc-200 rounded-xl px-4 py-2.5 text-[13.5px] text-zinc-700 placeholder-zinc-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 resize-none bg-zinc-50"
//                             />
//                         </div>

//                         {/* Buttons */}
//                         <div className="flex gap-3">
//                             <button
//                                 onClick={closeModal}
//                                 className="flex-1 py-2.5 rounded-xl border border-zinc-200 text-[13.5px] font-semibold text-zinc-600 hover:bg-zinc-50 transition-colors"
//                             >
//                                 Cancel
//                             </button>
//                             <button
//                                 onClick={handleStatusChange}
//                                 disabled={actionLoading === modal.driver.id}
//                                 className="flex-1 py-2.5 rounded-xl bg-linear-to-r from-cyan-400 to-cyan-500 text-white text-[13.5px] font-semibold hover:from-cyan-500 hover:to-cyan-400 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
//                             >
//                                 {actionLoading === modal.driver.id ? "Updating..." : "Update Status"}
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

"use client";

import { useState } from "react";
import {
    LineChart, Line, AreaChart, Area, BarChart, Bar,
    XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell
} from "recharts";

// Mock data
const revenueData = [
    { day: "Mon", revenue: 12400, rides: 84 },
    { day: "Tue", revenue: 18200, rides: 121 },
    { day: "Wed", revenue: 15800, rides: 98 },
    { day: "Thu", revenue: 22100, rides: 143 },
    { day: "Fri", revenue: 28900, rides: 187 },
    { day: "Sat", revenue: 31200, rides: 203 },
    { day: "Sun", revenue: 19800, rides: 132 },
];

const hourlyRides = [
    { hour: "6am", rides: 12 },
    { hour: "8am", rides: 45 },
    { hour: "10am", rides: 28 },
    { hour: "12pm", rides: 52 },
    { hour: "2pm", rides: 35 },
    { hour: "4pm", rides: 48 },
    { hour: "6pm", rides: 71 },
    { hour: "8pm", rides: 63 },
    { hour: "10pm", rides: 29 },
];

const driverStatusData = [
    { name: "Approved", value: 38, color: "#10b981" },
    { name: "Pending", value: 12, color: "#f59e0b" },
    { name: "Suspended", value: 5, color: "#6b7280" },
    { name: "Rejected", value: 3, color: "#ef4444" },
];

const recentRides = [
    { id: "R-1042", user: "Ali Raza", driver: "Hassan Ali", from: "Gulshan", to: "Saddar", fare: "Rs 380", status: "COMPLETED", time: "2 min ago" },
    { id: "R-1041", user: "Sara Khan", driver: "Usman M.", from: "DHA Phase 5", to: "Clifton", fare: "Rs 520", status: "ACTIVE", time: "5 min ago" },
    { id: "R-1040", user: "Bilal A.", driver: "Azhar K.", from: "North Karachi", to: "Korangi", fare: "Rs 290", status: "COMPLETED", time: "12 min ago" },
    { id: "R-1039", user: "Nadia S.", driver: "—", from: "Johar More", to: "Orangi", fare: "Rs 210", status: "CANCELLED", time: "18 min ago" },
    { id: "R-1038", user: "Kamran B.", driver: "Hassan Ali", from: "Malir", to: "Airport", fare: "Rs 680", status: "COMPLETED", time: "25 min ago" },
];

const rideStatusStyle: Record<string, string> = {
    COMPLETED: "bg-emerald-50 text-emerald-600 border border-emerald-200",
    ACTIVE: "bg-cyan-50 text-cyan-600 border border-cyan-200",
    CANCELLED: "bg-red-50 text-red-500 border border-red-200",
};

const statCards = [
    {
        label: "Today's Rides",
        value: "187",
        change: "+12%",
        up: true,
        sub: "vs yesterday",
        color: "cyan",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 512 512">
                <path fill="currentColor" d="M256 21A235 235 0 0 0 21 256a235 235 0 0 0 235 235a235 235 0 0 0 235-235A235 235 0 0 0 256 21m0 82c84.393 0 153 68.607 153 153s-68.607 153-153 153s-153-68.607-153-153s68.607-153 153-153m0 18c-20.417 0-39.757 4.52-57.09 12.602C210.457 166.482 230.218 208 256 208c25.823 0 44.926-41.65 56.752-74.555C295.505 125.462 276.284 121 256 121m98.752 42.88c-27.714 21.143-61.142 52.79-53.17 77.327c7.981 24.564 53.508 29.858 88.459 30.936c.628-5.294.959-10.678.959-16.143c0-35.642-13.755-68.012-36.248-92.12m-197.729.243C134.663 188.204 121 220.477 121 256c0 5.55.34 11.018.988 16.39c34.833-.825 80.381-6.793 88.344-31.3c7.974-24.542-25.68-55.553-53.309-76.967M256 224a32 32 0 0 0-32 32a32 32 0 0 0 32 32a32 32 0 0 0 32-32a32 32 0 0 0-32-32m-46.297 38.037a9 9 0 0 0-2.652.44a9 9 0 0 0-5.78 11.341a9 9 0 0 0 11.34 5.778a9 9 0 0 0 5.78-11.34a9 9 0 0 0-8.688-6.219m92.856.008a9 9 0 0 0-8.95 6.21a9 9 0 0 0 5.78 11.34a9 9 0 0 0 11.34-5.777a9 9 0 0 0-5.78-11.341a9 9 0 0 0-2.39-.432m-92.143 27.713c-21.59.104-50.24 16.832-72.424 31.928c19.029 34.168 52.46 59.164 92.143 66.837c9.99-33.39 18.42-78.618-2.446-93.777c-4.854-3.527-10.737-5.02-17.273-4.988m91.016.02c-6.58 0-12.492 1.516-17.346 5.042c-20.895 15.181-11.863 60.106-2.088 93.678c39.687-7.715 73.108-32.76 92.1-66.973c-22.006-15.224-50.935-31.747-72.666-31.748zM256 295.58a9 9 0 0 0-9 9a9 9 0 0 0 9 9a9 9 0 0 0 9-9a9 9 0 0 0-9-9" />
            </svg>
        ),
    },
    {
        label: "Today's Revenue",
        value: "Rs 31,200",
        change: "+8%",
        up: true,
        sub: "vs yesterday",
        color: "emerald",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 48 48">
                <path fill="currentColor" fillRule="evenodd" d="M24.039 6c-4.517 0-8.632 1.492-11.067 2.711q-.33.165-.616.322c-.378.206-.7.398-.956.567l2.77 4.078l1.304.519c5.096 2.571 11.93 2.571 17.027 0l1.48-.768L36.6 9.6a16 16 0 0 0-1.689-.957C32.488 7.437 28.471 6 24.04 6m-6.442 4.616a25 25 0 0 1-2.901-.728C16.978 8.875 20.377 7.8 24.04 7.8c2.537 0 4.936.516 6.92 1.17c-2.325.327-4.806.882-7.17 1.565c-1.86.538-4.034.48-6.192.081m15.96 5.064l-.246.124c-5.606 2.828-13.042 2.828-18.648 0l-.233-.118C6.008 24.927-.422 41.997 24.039 41.997S41.913 24.61 33.557 15.68M23 24a2 2 0 1 0 0 4zm2-2v-1h-2v1a4 4 0 0 0 0 8v4c-.87 0-1.611-.555-1.887-1.333a1 1 0 1 0-1.885.666A4 4 0 0 0 23 36v1h2v-1a4 4 0 0 0 0-8v-4c.87 0 1.611.555 1.887 1.333a1 1 0 1 0 1.885-.666A4 4 0 0 0 25 22m0 8v4a2 2 0 1 0 0-4" clipRule="evenodd" />
            </svg>
        ),
    },
    {
        label: "Active Drivers",
        value: "24",
        change: "Online now",
        up: true,
        sub: "of 38 approved",
        color: "violet",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M16 14.5c0 1.1-.3 3.5-2.2 6.3L13 16l.9-1.9c-.6 0-1.2-.1-1.9-.1s-1.3.1-1.9.1L11 16l-.8 4.8C8.3 18.1 8 15.6 8 14.5c-2.4.7-4 2-4 3.5v4h16v-4c0-1.5-1.6-2.8-4-3.5M6 4.5C6 3.1 8.7 2 12 2s6 1.1 6 2.5c0 .4-.2.7-.5 1c-.9-.9-3-1.5-5.5-1.5s-4.6.6-5.5 1.5c-.3-.3-.5-.6-.5-1m9.9 2.9c.1.2.1.4.1.6c0 2.2-1.8 4-4 4s-4-1.8-4-4c0-.2 0-.4.1-.6c1 .4 2.4.6 3.9.6s2.9-.2 3.9-.6m.7-1.3c-1.1.5-2.7.9-4.6.9s-3.5-.4-4.6-.9C8.1 5.5 9.8 5 12 5s3.9.5 4.6 1.1" />
            </svg>
        ),
    },
    {
        label: "Total Users",
        value: "1,284",
        change: "+34",
        up: true,
        sub: "this week",
        color: "amber",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 32 32">
                <path fill="currentColor" d="M11.5 7.5a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0M6 6a4 4 0 1 0 0 8a4 4 0 0 0 0-8m20 0a4 4 0 1 0 0 8a4 4 0 0 0 0-8M8.5 16.5q0-.334.053-.651l-4.7 1.259a2.5 2.5 0 0 0-1.767 3.062l.906 3.38a6 6 0 0 0 7.996 4.03A7.48 7.48 0 0 1 8.5 22zm15 5.5a7.48 7.48 0 0 1-2.49 5.58q.315.124.647.213a6 6 0 0 0 7.348-4.243l.906-3.38a2.5 2.5 0 0 0-1.768-3.062l-4.696-1.259q.053.319.053.651zm-11-8a2.5 2.5 0 0 0-2.5 2.5V22a6 6 0 0 0 12 0v-5.5a2.5 2.5 0 0 0-2.5-2.5z" />
            </svg>
        ),
    },
    {
        label: "Pending Approvals",
        value: "12",
        change: "Needs review",
        up: false,
        sub: "new drivers",
        color: "rose",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
];

const colorMap: Record<string, { bg: string; text: string; light: string; border: string }> = {
    cyan: { bg: "bg-cyan-500", text: "text-cyan-500", light: "bg-cyan-50", border: "border-cyan-100" },
    emerald: { bg: "bg-emerald-500", text: "text-emerald-500", light: "bg-emerald-50", border: "border-emerald-100" },
    violet: { bg: "bg-violet-500", text: "text-violet-500", light: "bg-violet-50", border: "border-violet-100" },
    amber: { bg: "bg-amber-500", text: "text-amber-500", light: "bg-amber-50", border: "border-amber-100" },
    rose: { bg: "bg-rose-500", text: "text-rose-500", light: "bg-rose-50", border: "border-rose-100" },
};

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white border border-zinc-100 rounded-xl px-3 py-2 shadow-lg text-[12px]">
                <p className="font-semibold text-zinc-700 mb-1">{label}</p>
                {payload.map((p: any, i: number) => (
                    <p key={i} style={{ color: p.color }} className="font-medium">
                        {p.name}: {p.name === "revenue" ? `Rs ${p.value.toLocaleString()}` : p.value}
                    </p>
                ))}
            </div>
        );
    }
    return null;
};

export default function AdminDashboardPage() {
    const [revenueView, setRevenueView] = useState<"revenue" | "rides">("revenue");

    return (
        <div className="space-y-5">

            {/* Greeting */}
            <div>
                <h2 className="text-[20px] font-black text-zinc-800 tracking-tight">Overview</h2>
                <p className="text-[13px] text-zinc-400 mt-0.5">Sunday, 1 March 2026 — Here's what's happening today</p>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-2 xl:grid-cols-5 gap-3">
                {statCards.map((card) => {
                    const c = colorMap[card.color];
                    return (
                        <div key={card.label} className="bg-white border border-zinc-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                            <div className="flex items-start justify-between mb-3">
                                <div className={`w-10 h-10 rounded-xl ${c.light} ${c.text} flex items-center justify-center`}>
                                    {card.icon}
                                </div>
                                <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${card.up ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-500"}`}>
                                    {card.change}
                                </span>
                            </div>
                            <p className="text-[22px] font-black text-zinc-800 leading-none">{card.value}</p>
                            <p className="text-[11.5px] text-zinc-400 mt-1">{card.label}</p>
                            <p className="text-[10.5px] text-zinc-300 mt-0.5">{card.sub}</p>
                        </div>
                    );
                })}
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">

                {/* Revenue / Rides Chart */}
                <div className="xl:col-span-2 bg-white border border-zinc-100 rounded-2xl shadow-sm p-5">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h3 className="text-[14px] font-bold text-zinc-800">Weekly Performance</h3>
                            <p className="text-[11.5px] text-zinc-400 mt-0.5">Last 7 days overview</p>
                        </div>
                        <div className="flex gap-1 bg-zinc-100 p-1 rounded-xl">
                            <button
                                onClick={() => setRevenueView("revenue")}
                                className={`text-[11.5px] font-semibold px-3 py-1.5 rounded-lg transition-all ${revenueView === "revenue" ? "bg-white text-zinc-800 shadow-sm" : "text-zinc-400 hover:text-zinc-600"}`}
                            >
                                Revenue
                            </button>
                            <button
                                onClick={() => setRevenueView("rides")}
                                className={`text-[11.5px] font-semibold px-3 py-1.5 rounded-lg transition-all ${revenueView === "rides" ? "bg-white text-zinc-800 shadow-sm" : "text-zinc-400 hover:text-zinc-600"}`}
                            >
                                Rides
                            </button>
                        </div>
                    </div>
                    <ResponsiveContainer width="100%" height={200}>
                        <AreaChart data={revenueData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorGrad" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.15} />
                                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f4f4f5" />
                            <XAxis dataKey="day" tick={{ fontSize: 11, fill: "#a1a1aa" }} axisLine={false} tickLine={false} />
                            <YAxis tick={{ fontSize: 11, fill: "#a1a1aa" }} axisLine={false} tickLine={false} />
                            <Tooltip content={<CustomTooltip />} />
                            <Area
                                type="monotone"
                                dataKey={revenueView}
                                stroke="#06b6d4"
                                strokeWidth={2.5}
                                fill="url(#colorGrad)"
                                dot={{ fill: "#06b6d4", r: 3, strokeWidth: 0 }}
                                activeDot={{ r: 5, fill: "#06b6d4" }}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                {/* Driver Status Donut */}
                <div className="bg-white border border-zinc-100 rounded-2xl shadow-sm p-5">
                    <div className="mb-4">
                        <h3 className="text-[14px] font-bold text-zinc-800">Driver Status</h3>
                        <p className="text-[11.5px] text-zinc-400 mt-0.5">Total 58 registered</p>
                    </div>
                    <ResponsiveContainer width="100%" height={150}>
                        <PieChart>
                            <Pie
                                data={driverStatusData}
                                cx="50%"
                                cy="50%"
                                innerRadius={45}
                                outerRadius={68}
                                paddingAngle={3}
                                dataKey="value"
                            >
                                {driverStatusData.map((entry, index) => (
                                    <Cell key={index} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip formatter={(value, name) => [`${value} drivers`, name]} />
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="space-y-2 mt-2">
                        {driverStatusData.map((d) => (
                            <div key={d.name} className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: d.color }} />
                                    <span className="text-[12px] text-zinc-500">{d.name}</span>
                                </div>
                                <span className="text-[12px] font-semibold text-zinc-700">{d.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Hourly + Recent Rides */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
                <div className="xl:col-span-2 bg-white border border-zinc-100 rounded-2xl shadow-sm overflow-hidden">
                    <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-100">
                        <div>
                            <h3 className="text-[14px] font-bold text-zinc-800">Recent Rides</h3>
                            <p className="text-[11.5px] text-zinc-400 mt-0.5">Latest activity across the platform</p>
                        </div>
                        <a href="/admin/rides" className="text-[12px] font-semibold text-cyan-500 hover:text-cyan-600 transition-colors">
                            View all →
                        </a>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-zinc-50/80">
                                    {["Ride ID", "User", "Driver", "Route", "Fare", "Status", "Time"].map((h) => (
                                        <th key={h} className="text-left px-4 py-2.5 text-[10.5px] font-semibold text-zinc-400 uppercase tracking-wider">
                                            {h}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-50">
                                {recentRides.map((ride) => (
                                    <tr key={ride.id} className="hover:bg-zinc-50/60 transition-colors">
                                        <td className="px-4 py-3 text-[12px] font-mono font-semibold text-zinc-500">{ride.id}</td>
                                        <td className="px-4 py-3 text-[12px] font-medium text-zinc-700">{ride.user}</td>
                                        <td className="px-4 py-3 text-[12px] text-zinc-500">{ride.driver}</td>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-1 text-[11.5px] text-zinc-500">
                                                <span>{ride.from}</span>
                                                <svg className="w-3 h-3 text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                                <span>{ride.to}</span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-[12px] font-semibold text-zinc-700">{ride.fare}</td>
                                        <td className="px-4 py-3">
                                            <span className={`inline-flex text-[10.5px] font-semibold px-2 py-0.5 rounded-md ${rideStatusStyle[ride.status]}`}>
                                                {ride.status}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-[11px] text-zinc-400">{ride.time}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* Hourly Bar Chart */}
                <div className="bg-white border border-zinc-100 rounded-2xl shadow-sm p-5">
                    <div className="flex items-start justify-between mb-20">
                        <div>
                            <h3 className="text-[14px] font-bold text-zinc-800">Today's Peak Hours</h3>
                            <p className="text-[11.5px] text-zinc-400 mt-0.5">Rides per hour</p>
                        </div>
                        {/* Peak time badge */}
                        <span className="text-[11px] font-semibold bg-cyan-50 text-cyan-600 border border-cyan-100 px-2.5 py-1 rounded-lg">
                            🔥 Peak: 6pm
                        </span>
                    </div>

                    <ResponsiveContainer width="100%" height={180}>
                        <BarChart data={hourlyRides} margin={{ top: 4, right: 0, left: -25, bottom: 0 }} barCategoryGap="30%">
                            <defs>
                                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#06b6d4" stopOpacity={1} />
                                    <stop offset="100%" stopColor="#67e8f9" stopOpacity={0.6} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f4f4f5" vertical={false} />
                            <XAxis
                                dataKey="hour"
                                tick={{ fontSize: 10, fill: "#a1a1aa" }}
                                axisLine={false}
                                tickLine={false}
                            />
                            <YAxis
                                tick={{ fontSize: 10, fill: "#a1a1aa" }}
                                axisLine={false}
                                tickLine={false}
                            />
                            <Tooltip
                                cursor={{ fill: "#f0fdfe", radius: 6 }}
                                content={({ active, payload, label }) => {
                                    if (active && payload?.length) {
                                        return (
                                            <div className="bg-white border border-zinc-100 shadow-lg rounded-xl px-3 py-2">
                                                <p className="text-[11px] text-zinc-400 font-medium">{label}</p>
                                                <p className="text-[14px] font-bold text-cyan-600">{payload[0].value} rides</p>
                                            </div>
                                        );
                                    }
                                    return null;
                                }}
                            />
                            <Bar dataKey="rides" fill="url(#barGradient)" radius={[5, 5, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}