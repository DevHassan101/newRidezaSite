"use client";

export default function HomeServices() {
    return (
        <>
            <section className="services-section-main py-15">
                {/* services-header-start */}
                <div className="services-header text-center relative">
                    <div className="inline-flex items-center gap-3 text-xs md:text-sm text-white uppercase tracking-widest">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(59,187,252,0.8)] animate-pulse" />
                        <span className="font-semibold text-cyan-400">What we do</span>
                        <div className="w-8 h-px bg-linear-to-r from-cyan-400 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="mt-6 md:mt-5.5 text-2xl md:text-3xl lg:text-[40px] font-bold leading-[1.1] relative">
                        <span className="text-black/95 inline-block hover:text-black transition-colors duration-300 mr-3">
                            Smart Services For
                        </span>
                        <br />
                        <span className="bg-linear-to-r from-cyan-400 via-cyan-400 to-cyan-400 bg-clip-text text-transparent bg-size-[200%_auto] animate-gradient">
                            Digital & Economical Rides
                        </span>
                        <div className="absolute -bottom-4 left-0 right-0 w-40 md:w-95 mx-auto h-px bg-linear-to-r from-transparent via-cyan-400 to-transparent opacity-50" />
                    </div>
                    <div className="mt-10 md:mt-9 w-full md:max-w-xl mx-auto">
                        <p className="text-[13px] md:text-[15.5px] text-black/80">We combine technical expertise with bold design to build products that matter crafting seamless interactions that connect brands with people.</p>
                    </div>
                </div>
                {/* services-header-end */}
                {/* services-main-start */}
                <div className="services-card-grid mt-14 px-20">
                    <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                        <div className="service-card group py-10 px-10 relative border border-[#3bbbfc]/50 rounded-2xl md:rounded-3xl overflow-hidden">
                            <div className="absolute top-0 left-0 w-20 h-20 bg-linear-to-br from-cyan-400 to-cyan-500 opacity-10 rounded-br-full"></div>
                            <div className="absolute bottom-0 right-0 w-24 h-24 bg-linear-to-tl from-cyan-400 to-cyan-500 opacity-10 rounded-tl-full"></div>
                            <div className="card-box flex flex-wrap justify-center items-center">
                                <div className="card-img w-45 h-35 p-4 bg-linear-to-t from-cyan-200 to-transparent rounded-[20px] flex justify-center items-center">
                                    <img src="/images/serv3.webp" className="w-full" alt="" />
                                </div>
                                <div className="card-content text-center mt-5">
                                    <h1 className="text-2xl font-bold text-cyan-500">Smart Bike Ride Booking</h1>
                                    <p className="mt-2 text-sm mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quia a voluptates quasi odio praesentium fugiat autem beatae aperiam suscipit!</p>
                                    <button className="w-full bg-linear-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-semibold py-3.5 px-6 rounded-[10px] transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-[1.02] flex items-center justify-center gap-2">
                                        <span>Book Your Ride</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="service-card group py-10 px-10 relative border border-[#3bbbfc]/50 rounded-2xl md:rounded-3xl overflow-hidden">
                            <div className="absolute top-0 left-0 w-20 h-20 bg-linear-to-br from-cyan-400 to-cyan-500 opacity-10 rounded-br-full"></div>
                            <div className="absolute bottom-0 right-0 w-24 h-24 bg-linear-to-tl from-cyan-400 to-cyan-500 opacity-10 rounded-tl-full"></div>
                            <div className="card-box flex flex-wrap justify-center items-center">
                                <div className="card-img w-45 h-35 p-4 bg-linear-to-t from-cyan-200 to-transparent rounded-[20px] flex justify-center items-center">
                                    <img src="/images/serv6.png" className="w-full" alt="" />
                                </div>
                                <div className="card-content text-center mt-5">
                                    <h1 className="text-2xl font-bold text-cyan-500">Smart Bike Ride Booking</h1>
                                    <p className="mt-2 text-sm mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quia a voluptates quasi odio praesentium fugiat autem beatae aperiam suscipit!</p>
                                    <button className="w-full bg-linear-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-semibold py-3.5 px-6 rounded-[10px] transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-[1.02] flex items-center justify-center gap-2">
                                        <span>Book Your Ride</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="service-card group py-10 px-10 relative border border-[#3bbbfc]/50 rounded-2xl md:rounded-3xl overflow-hidden">
                            <div className="absolute top-0 left-0 w-20 h-20 bg-linear-to-br from-cyan-400 to-cyan-500 opacity-10 rounded-br-full"></div>
                            <div className="absolute bottom-0 right-0 w-24 h-24 bg-linear-to-tl from-cyan-400 to-cyan-500 opacity-10 rounded-tl-full"></div>
                            <div className="card-box flex flex-wrap justify-center items-center">
                                <div className="card-img w-45 h-35 p-4 bg-linear-to-t from-cyan-200 to-transparent rounded-[20px] flex justify-center items-center">
                                    <img src="/images/serv5.webp" className="w-full" alt="" />
                                </div>
                                <div className="card-content text-center mt-5">
                                    <h1 className="text-2xl font-bold text-cyan-500">Smart Bike Ride Booking</h1>
                                    <p className="mt-2 text-sm mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quia a voluptates quasi odio praesentium fugiat autem beatae aperiam suscipit!</p>
                                    <button className="w-full bg-linear-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-semibold py-3.5 px-6 rounded-[10px] transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-[1.02] flex items-center justify-center gap-2">
                                        <span>Book Your Ride</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="service-card group py-10 px-10 relative border border-[#3bbbfc]/50 rounded-2xl md:rounded-3xl overflow-hidden">
                            <div className="absolute top-0 left-0 w-20 h-20 bg-linear-to-br from-cyan-400 to-cyan-500 opacity-10 rounded-br-full"></div>
                            <div className="absolute bottom-0 right-0 w-24 h-24 bg-linear-to-tl from-cyan-400 to-cyan-500 opacity-10 rounded-tl-full"></div>
                            <div className="card-box flex flex-wrap justify-center items-center">
                                <div className="card-img w-45 h-35 p-4 bg-linear-to-t from-cyan-200 to-transparent rounded-[20px] flex justify-center items-center">
                                    <img src="/images/serv4.webp" className="w-full" alt="" />
                                </div>
                                <div className="card-content text-center mt-5">
                                    <h1 className="text-2xl font-bold text-cyan-500">Smart Bike Ride Booking</h1>
                                    <p className="mt-2 text-sm mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quia a voluptates quasi odio praesentium fugiat autem beatae aperiam suscipit!</p>
                                    <button className="w-full bg-linear-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-semibold py-3.5 px-6 rounded-[10px] transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-[1.02] flex items-center justify-center gap-2">
                                        <span>Book Your Ride</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="service-card group py-10 px-10 relative border border-[#3bbbfc]/50 rounded-2xl md:rounded-3xl overflow-hidden">
                            <div className="absolute top-0 left-0 w-20 h-20 bg-linear-to-br from-cyan-400 to-cyan-500 opacity-10 rounded-br-full"></div>
                            <div className="absolute bottom-0 right-0 w-24 h-24 bg-linear-to-tl from-cyan-400 to-cyan-500 opacity-10 rounded-tl-full"></div>
                            <div className="card-box flex flex-wrap justify-center items-center">
                                <div className="card-img w-45 h-35 p-4 bg-linear-to-t from-cyan-200 to-transparent rounded-[20px] flex justify-center items-center">
                                    <img src="/images/serv1.webp" className="w-full" alt="" />
                                </div>
                                <div className="card-content text-center mt-5">
                                    <h1 className="text-2xl font-bold text-cyan-500">Smart Bike Ride Booking</h1>
                                    <p className="mt-2 text-sm mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quia a voluptates quasi odio praesentium fugiat autem beatae aperiam suscipit!</p>
                                    <button className="w-full bg-linear-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-semibold py-3.5 px-6 rounded-[10px] transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-[1.02] flex items-center justify-center gap-2">
                                        <span>Book Your Ride</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="service-card group py-10 px-10 relative border border-[#3bbbfc]/50 rounded-2xl md:rounded-3xl overflow-hidden">
                            <div className="absolute top-0 left-0 w-20 h-20 bg-linear-to-br from-cyan-400 to-cyan-500 opacity-10 rounded-br-full"></div>
                            <div className="absolute bottom-0 right-0 w-24 h-24 bg-linear-to-tl from-cyan-400 to-cyan-500 opacity-10 rounded-tl-full"></div>
                            <div className="card-box flex flex-wrap justify-center items-center">
                                <div className="card-img w-45 h-35 p-4 bg-linear-to-t from-cyan-200 to-transparent rounded-[20px] flex justify-center items-center">
                                    <img src="/images/serv2.png" className="w-full" alt="" />
                                </div>
                                <div className="card-content text-center mt-5">
                                    <h1 className="text-2xl font-bold text-cyan-500">Smart Bike Ride Booking</h1>
                                    <p className="mt-2 text-sm mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quia a voluptates quasi odio praesentium fugiat autem beatae aperiam suscipit!</p>
                                    <button className="w-full bg-linear-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-semibold py-3.5 px-6 rounded-[10px] transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-[1.02] flex items-center justify-center gap-2">
                                        <span>Book Your Ride</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* services-main-end */}
            </section>
        </>
    );
}