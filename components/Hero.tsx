import React from 'react';

const LogoGraphic = () => {
    return (
        <div className="flex flex-col items-center select-none pointer-events-none">
            <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <defs>
                    <linearGradient id="globeGradient" x1="50" y1="50" x2="350" y2="350" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1" />
                    </linearGradient>
                </defs>

                {/* Globe Background/Grid */}
                <circle cx="200" cy="200" r="140" stroke="#CBD5E1" strokeWidth="1.5" fill="url(#globeGradient)" opacity="0.6" />
                <ellipse cx="200" cy="200" rx="140" ry="40" stroke="#CBD5E1" strokeWidth="1" opacity="0.5" transform="rotate(-30 200 200)" />
                <ellipse cx="200" cy="200" rx="140" ry="40" stroke="#CBD5E1" strokeWidth="1" opacity="0.5" transform="rotate(30 200 200)" />
                <ellipse cx="200" cy="200" rx="40" ry="140" stroke="#CBD5E1" strokeWidth="1" opacity="0.5" />

                {/* Cross - Gold */}
                {/* Positioned slightly to the right as in the image */}
                <path d="M260 80 V 220" stroke="#C29D66" strokeWidth="6" strokeLinecap="round" className="drop-shadow-md" />
                <path d="M230 120 H 290" stroke="#C29D66" strokeWidth="6" strokeLinecap="round" className="drop-shadow-md" />

                {/* Dove Shape - Blue - Stylized abstract swoosh */}
                {/* A sweeping curve from left bottom to upper right */}
                <path
                    d="M100 240 C 140 300, 260 280, 320 180"
                    stroke="#1E3A8A"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                    className="drop-shadow-lg"
                />
                {/* Second swoosh for depth/wing */}
                <path
                    d="M120 260 C 160 300, 240 290, 280 220"
                    stroke="#C29D66"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                    opacity="0.8"
                />
            </svg>
            <div className="mt-[-60px] text-center relative z-20">
                <h2 className="text-[8rem] leading-none font-serif text-[#0F172A] tracking-wider font-semibold">KDM</h2>
            </div>
        </div>
    );
};

export const Hero = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center bg-gradient-to-br from-blue-50/50 via-white to-blue-50/30 overflow-hidden pt-20">

            {/* Background Decorative Element (Globe Fade) */}
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-3xl -z-10 animate-pulse" />

            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">

                {/* Left Content */}
                <div className="space-y-6 max-w-2xl z-20">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-[#0F172A] leading-[1.15]">
                        Bringing Faith, <br />
                        Hope, and Purpose <br />
                        to the World
                    </h1>

                    <p className="text-lg text-slate-600 leading-relaxed max-w-lg font-light">
                        Kingdom District Ministries is a global faith-based organization dedicated to worship, discipleship, education, and empowering communities through Christ-centered outreach.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <button className="px-8 py-3 bg-[#1e293b] text-white rounded-lg font-medium hover:bg-[#334155] transition-all shadow-lg hover:shadow-xl active:scale-95 duration-200">
                            Get Involved
                        </button>
                        <button className="px-8 py-3 bg-transparent border border-gray-200 text-slate-700 rounded-lg font-medium hover:bg-gray-50 transition-all active:scale-95 duration-200">
                            Our Mission
                        </button>
                    </div>
                </div>

                {/* Right Content - Logo */}
                <div className="flex justify-center lg:justify-end relative items-center h-full">
                    <div className="scale-75 md:scale-100 lg:scale-110 transform transition-transform duration-700 hover:scale-105">
                        <LogoGraphic />
                    </div>
                </div>
            </div>
        </section>
    );
};
