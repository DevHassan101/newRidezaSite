"use client";

const stats = [
    {
        label: "Total Rides",
        value: "12,483",
        change: "+8.2%",
        up: true,
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
        ),
        color: "from-cyan-400 to-cyan-500",
        shadow: "shadow-cyan-200",
    },
    {
        label: "Active Drivers",
        value: "348",
        change: "+3.1%",
        up: true,
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
        ),
        color: "from-teal-400 to-teal-500",
        shadow: "shadow-teal-200",
    },
    {
        label: "Total Revenue",
        value: "Rs. 2.4M",
        change: "+12.5%",
        up: true,
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        color: "from-emerald-400 to-emerald-500",
        shadow: "shadow-emerald-200",
    },
    {
        label: "Registered Users",
        value: "9,210",
        change: "-1.4%",
        up: false,
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        color: "from-sky-400 to-sky-500",
        shadow: "shadow-sky-200",
    },
];

const recentRides = [
    { id: "#RD-1042", user: "Ali Hassan", driver: "Tariq Mehmood", from: "Gulshan", to: "DHA", fare: "Rs. 320", status: "Completed", time: "2 min ago" },
    { id: "#RD-1041", user: "Sara Khan", driver: "Usman Ali", from: "Clifton", to: "Saddar", fare: "Rs. 180", status: "Ongoing", time: "8 min ago" },
    { id: "#RD-1040", user: "Bilal Ahmed", driver: "Kamran Shah", from: "PECHS", to: "Korangi", fare: "Rs. 450", status: "Completed", time: "15 min ago" },
    { id: "#RD-1039", user: "Nida Farooq", driver: "Hassan Raza", from: "North Karachi", to: "Nazimabad", fare: "Rs. 220", status: "Cancelled", time: "22 min ago" },
    { id: "#RD-1038", user: "Zain ul Abideen", driver: "Asif Iqbal", from: "Gulberg", to: "Johar", fare: "Rs. 390", status: "Completed", time: "30 min ago" },
];

const statusStyle: Record<string, string> = {
    Completed: "bg-emerald-50 text-emerald-600 border border-emerald-200",
    Ongoing: "bg-cyan-50 text-cyan-600 border border-cyan-200",
    Cancelled: "bg-red-50 text-red-500 border border-red-200",
};

// Simple bar chart data
const weeklyData = [40, 65, 50, 80, 72, 90, 60];
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const maxVal = Math.max(...weeklyData);

export default function Dashboard() {
    return (
        <div className="space-y-6">

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                {stats.map((stat) => (
                    <div key={stat.label} className="bg-white border border-zinc-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:shadow-cyan-50 transition-all duration-300 group">
                        <div className="flex items-start justify-between mb-4">
                            <div className={`w-10 h-10 rounded-xl bg-linear-to-br ${stat.color} flex items-center justify-center text-white shadow-md ${stat.shadow}`}>
                                {stat.icon}
                            </div>
                            <span className={`text-[12px] font-semibold px-2 py-1 rounded-lg ${stat.up ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-500"}`}>
                                {stat.change}
                            </span>
                        </div>
                        <p className="text-[26px] font-bold text-zinc-800 leading-none">{stat.value}</p>
                        <p className="text-[13px] text-zinc-400 mt-1.5">{stat.label}</p>
                    </div>
                ))}
            </div>

            {/* Chart + Quick Info Row */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">

                {/* Weekly Rides Chart */}
                <div className="xl:col-span-2 bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h3 className="text-[15px] font-bold text-zinc-800">Weekly Rides</h3>
                            <p className="text-[12px] text-zinc-400 mt-0.5">This week's ride activity</p>
                        </div>
                        <div className="flex items-center gap-1.5 bg-cyan-50 border border-cyan-200 rounded-xl px-3 py-1.5">
                            <span className="w-2 h-2 rounded-full bg-cyan-400" />
                            <span className="text-[12px] text-cyan-600 font-medium">This Week</span>
                        </div>
                    </div>

                    {/* Bar Chart */}
                    <div className="flex items-end justify-between gap-2 h-36">
                        {weeklyData.map((val, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                                <div className="w-full relative group/bar" style={{ height: "120px", display: "flex", alignItems: "flex-end" }}>
                                    <div
                                        className="w-full rounded-t-lg bg-linear-to-t from-cyan-500 to-cyan-300 hover:from-cyan-400 hover:to-cyan-200 transition-all duration-300 cursor-pointer relative"
                                        style={{ height: `${(val / maxVal) * 100}%` }}
                                    >
                                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[11px] font-semibold text-zinc-600 opacity-0 group-hover/bar:opacity-100 transition-opacity">
                                            {val}
                                        </span>
                                    </div>
                                </div>
                                <span className="text-[11px] text-zinc-400 font-medium">{days[i]}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                    <h3 className="text-[15px] font-bold text-zinc-800 mb-4">Quick Stats</h3>
                    <div className="space-y-4">
                        {[
                            { label: "Avg. Ride Time", value: "18 min", pct: 65 },
                            { label: "Driver Rating", value: "4.7 / 5", pct: 94 },
                            { label: "Completion Rate", value: "91%", pct: 91 },
                        ].map((s) => (
                            <div key={s.label}>
                                <div className="flex justify-between mb-1.5">
                                    <span className="text-[12.5px] text-zinc-500">{s.label}</span>
                                    <span className="text-[12.5px] font-semibold text-zinc-700">{s.value}</span>
                                </div>
                                <div className="h-2 w-full bg-zinc-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-linear-to-r from-cyan-400 to-cyan-500 rounded-full"
                                        style={{ width: `${s.pct}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Status badges */}
                    <div className="mt-5 pt-4 border-t border-zinc-100 grid grid-cols-3 gap-2 text-center">
                        {[
                            { label: "Online Drivers", val: "124", color: "text-emerald-600" },
                            { label: "On Ride", val: "87", color: "text-cyan-600" },
                            { label: "Offline", val: "137", color: "text-zinc-500" },
                        ].map((b) => (
                            <div key={b.label}>
                                <p className={`text-[18px] font-bold ${b.color}`}>{b.val}</p>
                                <p className="text-[10px] text-zinc-400 mt-0.5 leading-tight">{b.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Recent Rides Table */}
            <div className="bg-white border border-zinc-100 rounded-2xl shadow-sm overflow-hidden">
                <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100">
                    <div>
                        <h3 className="text-[15px] font-bold text-zinc-800">Recent Rides</h3>
                        <p className="text-[12px] text-zinc-400 mt-0.5">Latest ride activity across the platform</p>
                    </div>
                    <button className="text-[13px] font-semibold text-cyan-500 hover:text-cyan-600 transition-colors">
                        View All →
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-zinc-50/80">
                                {["Ride ID", "User", "Driver", "Route", "Fare", "Status", "Time"].map((h) => (
                                    <th key={h} className="text-left px-5 py-3 text-[11.5px] font-semibold text-zinc-400 uppercase tracking-wider">
                                        {h}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-50">
                            {recentRides.map((ride) => (
                                <tr key={ride.id} className="hover:bg-cyan-50/40 transition-colors duration-150 group">
                                    <td className="px-5 py-3.5">
                                        <span className="text-[13px] font-semibold text-cyan-500">{ride.id}</span>
                                    </td>
                                    <td className="px-5 py-3.5">
                                        <span className="text-[13px] text-zinc-700">{ride.user}</span>
                                    </td>
                                    <td className="px-5 py-3.5">
                                        <span className="text-[13px] text-zinc-600">{ride.driver}</span>
                                    </td>
                                    <td className="px-5 py-3.5">
                                        <span className="text-[12.5px] text-zinc-500">
                                            {ride.from} <span className="text-cyan-400 font-bold mx-1">→</span> {ride.to}
                                        </span>
                                    </td>
                                    <td className="px-5 py-3.5">
                                        <span className="text-[13px] font-semibold text-zinc-700">{ride.fare}</span>
                                    </td>
                                    <td className="px-5 py-3.5">
                                        <span className={`inline-flex text-[11.5px] font-semibold px-2.5 py-1 rounded-lg ${statusStyle[ride.status]}`}>
                                            {ride.status}
                                        </span>
                                    </td>
                                    <td className="px-5 py-3.5">
                                        <span className="text-[12px] text-zinc-400">{ride.time}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}