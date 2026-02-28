"use client";

import { useState, useEffect } from "react";

type DriverStatus = "PENDING" | "APPROVED" | "REJECTED" | "SUSPENDED";

interface Driver {
    id: string;
    city: string;
    status: DriverStatus;
    reviewNote?: string | null;
    createdAt: string;
    user: {
        id: string;
        name: string;
        email: string;
        phone: string;
        isActive: boolean;
    };
}

const statusStyle: Record<DriverStatus, string> = {
    PENDING: "bg-amber-50 text-amber-600 border border-amber-200",
    APPROVED: "bg-emerald-50 text-emerald-600 border border-emerald-200",
    REJECTED: "bg-red-50 text-red-500 border border-red-200",
    SUSPENDED: "bg-zinc-100 text-zinc-500 border border-zinc-200",
};

const statusOptions: { value: DriverStatus; label: string }[] = [
    { value: "APPROVED", label: "Approve" },
    { value: "REJECTED", label: "Reject" },
    { value: "SUSPENDED", label: "Suspend" },
    { value: "PENDING", label: "Set Pending" },
];

export default function AdminDriversPage() {
    const [drivers, setDrivers] = useState<Driver[]>([]);
    const [summary, setSummary] = useState({ total: 0, pending: 0, approved: 0, rejected: 0, suspended: 0 });
    const [loading, setLoading] = useState(true);
    const [filterStatus, setFilterStatus] = useState<string>("");
    const [actionLoading, setActionLoading] = useState<string | null>(null);

    // modal state
    const [modal, setModal] = useState<{ open: boolean; driver: Driver | null }>({ open: false, driver: null });
    const [newStatus, setNewStatus] = useState<DriverStatus>("APPROVED");
    const [reviewNote, setReviewNote] = useState("");

    const fetchDrivers = async (status?: string) => {
        setLoading(true);
        try {
            const url = status ? `/api/admin/drivers?status=${status}` : "/api/admin/drivers";
            const res = await fetch(url);
            const data = await res.json();
            setDrivers(data.drivers || []);
            setSummary(data.summary || {});
        } catch {
            console.error("Failed to fetch drivers");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDrivers(filterStatus || undefined);
    }, [filterStatus]);

    const openModal = (driver: Driver) => {
        setModal({ open: true, driver });
        setNewStatus("APPROVED");
        setReviewNote("");
    };

    const closeModal = () => {
        setModal({ open: false, driver: null });
        setReviewNote("");
    };

    const handleStatusChange = async () => {
        if (!modal.driver) return;
        setActionLoading(modal.driver.id);
        try {
            const res = await fetch(`/api/admin/driver/${modal.driver.id}/status`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status: newStatus, reviewNote: reviewNote || null }),
            });
            if (res.ok) {
                closeModal();
                fetchDrivers(filterStatus || undefined);
            }
        } catch {
            console.error("Status update failed");
        } finally {
            setActionLoading(null);
        }
    };

    return (
        <div className="space-y-6">

            {/* Summary Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
                {[
                    { label: "Total", value: summary.total, color: "text-zinc-700" },
                    { label: "Pending", value: summary.pending, color: "text-amber-600" },
                    { label: "Approved", value: summary.approved, color: "text-emerald-600" },
                    { label: "Rejected", value: summary.rejected, color: "text-red-500" },
                    { label: "Suspended", value: summary.suspended, color: "text-zinc-500" },
                ].map((s) => (
                    <div key={s.label} className="bg-white border border-zinc-100 rounded-2xl p-4 shadow-sm text-center">
                        <p className={`text-[24px] font-bold ${s.color}`}>{s.value}</p>
                        <p className="text-[12px] text-zinc-400 mt-0.5">{s.label}</p>
                    </div>
                ))}
            </div>

            {/* Filter + Table */}
            <div className="bg-white border border-zinc-100 rounded-2xl shadow-sm overflow-hidden">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 border-b border-zinc-100 gap-3">
                    <div>
                        <h3 className="text-[15px] font-bold text-zinc-800">All Drivers</h3>
                        <p className="text-[12px] text-zinc-400 mt-0.5">Manage driver approvals and status</p>
                    </div>
                    {/* Filter */}
                    <select
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                        className="text-[13px] border border-zinc-200 rounded-xl px-3 py-2 text-zinc-600 focus:outline-none focus:border-cyan-400 bg-zinc-50"
                    >
                        <option value="">All Status</option>
                        <option value="PENDING">Pending</option>
                        <option value="APPROVED">Approved</option>
                        <option value="REJECTED">Rejected</option>
                        <option value="SUSPENDED">Suspended</option>
                    </select>
                </div>

                {/* Table */}
                {loading ? (
                    <div className="flex items-center justify-center py-16">
                        <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
                    </div>
                ) : drivers.length === 0 ? (
                    <div className="text-center py-16">
                        <p className="text-zinc-400 text-[14px]">No drivers found.</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-zinc-50/80">
                                    {["Name", "Email", "Phone", "City", "Status", "Joined", "Action"].map((h) => (
                                        <th key={h} className="text-left px-5 py-3 text-[11.5px] font-semibold text-zinc-400 uppercase tracking-wider">
                                            {h}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-50">
                                {drivers.map((driver) => (
                                    <tr key={driver.id} className="hover:bg-cyan-50/40 transition-colors duration-150">
                                        <td className="px-5 py-3.5">
                                            <div className="flex items-center gap-2.5">
                                                <div className="w-8 h-8 rounded-full bg-linear-to-br from-cyan-400 to-cyan-500 flex items-center justify-center text-white text-[12px] font-bold shrink-0">
                                                    {driver.user.name.charAt(0).toUpperCase()}
                                                </div>
                                                <span className="text-[13px] font-medium text-zinc-700">{driver.user.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-5 py-3.5">
                                            <span className="text-[13px] text-zinc-500">{driver.user.email}</span>
                                        </td>
                                        <td className="px-5 py-3.5">
                                            <span className="text-[13px] text-zinc-500">{driver.user.phone}</span>
                                        </td>
                                        <td className="px-5 py-3.5">
                                            <span className="text-[13px] text-zinc-600">{driver.city}</span>
                                        </td>
                                        <td className="px-5 py-3.5">
                                            <span className={`inline-flex text-[11.5px] font-semibold px-2.5 py-1 rounded-lg ${statusStyle[driver.status]}`}>
                                                {driver.status}
                                            </span>
                                        </td>
                                        <td className="px-5 py-3.5">
                                            <span className="text-[12px] text-zinc-400">
                                                {new Date(driver.createdAt).toLocaleDateString("en-PK", { day: "numeric", month: "short", year: "numeric" })}
                                            </span>
                                        </td>
                                        <td className="px-5 py-3.5">
                                            <button
                                                onClick={() => openModal(driver)}
                                                className="text-[12px] font-semibold text-cyan-500 hover:text-cyan-600 border border-cyan-200 hover:border-cyan-400 bg-cyan-50 hover:bg-cyan-100 px-3 py-1.5 rounded-lg transition-all duration-150"
                                            >
                                                Manage
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* Modal */}
            {modal.open && modal.driver && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm px-4">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 border border-zinc-100">
                        <div className="flex items-start justify-between mb-5">
                            <div>
                                <h4 className="text-[16px] font-bold text-zinc-800">Update Driver Status</h4>
                                <p className="text-[13px] text-zinc-400 mt-0.5">{modal.driver.user.name} — {modal.driver.user.email}</p>
                            </div>
                            <button onClick={closeModal} className="text-zinc-400 hover:text-zinc-600 transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Current status */}
                        <div className="mb-4 flex items-center gap-2">
                            <span className="text-[13px] text-zinc-500">Current:</span>
                            <span className={`inline-flex text-[11.5px] font-semibold px-2.5 py-1 rounded-lg ${statusStyle[modal.driver.status]}`}>
                                {modal.driver.status}
                            </span>
                        </div>

                        {/* New status select */}
                        <div className="mb-4">
                            <label className="block text-[13px] font-semibold text-zinc-500 mb-2">New Status</label>
                            <div className="grid grid-cols-2 gap-2">
                                {statusOptions.map((opt) => (
                                    <button
                                        key={opt.value}
                                        onClick={() => setNewStatus(opt.value)}
                                        className={`py-2 rounded-xl text-[13px] font-semibold border transition-all duration-150 ${
                                            newStatus === opt.value
                                                ? "bg-cyan-500 text-white border-cyan-500"
                                                : "bg-zinc-50 text-zinc-600 border-zinc-200 hover:border-cyan-300"
                                        }`}
                                    >
                                        {opt.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Review note */}
                        <div className="mb-5">
                            <label className="block text-[13px] font-semibold text-zinc-500 mb-2">
                                Note <span className="text-zinc-400 font-normal">(optional)</span>
                            </label>
                            <textarea
                                value={reviewNote}
                                onChange={(e) => setReviewNote(e.target.value)}
                                placeholder="Reason for status change..."
                                rows={3}
                                className="w-full border border-zinc-200 rounded-xl px-4 py-2.5 text-[13.5px] text-zinc-700 placeholder-zinc-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 resize-none bg-zinc-50"
                            />
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-3">
                            <button
                                onClick={closeModal}
                                className="flex-1 py-2.5 rounded-xl border border-zinc-200 text-[13.5px] font-semibold text-zinc-600 hover:bg-zinc-50 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleStatusChange}
                                disabled={actionLoading === modal.driver.id}
                                className="flex-1 py-2.5 rounded-xl bg-linear-to-r from-cyan-400 to-cyan-500 text-white text-[13.5px] font-semibold hover:from-cyan-500 hover:to-cyan-400 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {actionLoading === modal.driver.id ? "Updating..." : "Update Status"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}