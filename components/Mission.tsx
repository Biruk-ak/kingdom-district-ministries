import React from 'react';

export const Mission = () => {
    return (
        <section className="relative w-full py-32 px-6 md:px-12 bg-[#0F172A] text-white overflow-hidden text-center">
            {/* Background Image Placeholder with Cross */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A]/90 via-[#0F172A]/80 to-[#1e3a8a]/70 z-10" />
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1549488497-6a56b539423c?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center" />

                {/* Glowing Cross Simulation */}
                <div className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-12 opacity-40 blur-lg">
                    <div className="w-2 h-32 bg-yellow-100/50 absolute left-1/2 -translate-x-1/2" />
                    <div className="w-24 h-2 bg-yellow-100/50 absolute top-12 left-1/2 -translate-x-1/2" />
                </div>
            </div>

            <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center">

                <span className="text-[#C29D66] font-medium tracking-[0.3em] text-xs uppercase mb-6">
                    Our Mission
                </span>

                <h2 className="text-5xl md:text-6xl font-serif mb-8 text-white">
                    Our Mission
                </h2>

                {/* Divider */}
                <div className="flex items-center w-full max-w-lg mb-12 opacity-60">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C29D66] to-transparent flex-1"></div>
                    <div className="mx-4 text-[#C29D66] text-xl">♦</div>
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C29D66] to-transparent flex-1"></div>
                </div>

                <p className="text-xl md:text-2xl font-light leading-relaxed text-slate-200 mb-12 drop-shadow-md">
                    At Kingdom District Ministries, our mission is to spread the Gospel, strengthen faith, and empower communities through the love of Christ. Discover our purpose and values as we work together to make a global impact.
                </p>

                <button className="flex items-center gap-2 px-8 py-3 bg-[#1e293b] border border-slate-600 text-white rounded-md font-medium hover:bg-[#334155] transition-all shadow-lg active:translate-y-0.5">
                    Learn More About Us
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>
                </button>

                <div className="flex flex-col sm:flex-row gap-6 mt-16 text-sm text-slate-300 font-light tracking-wide">
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-[#C29D66] flex items-center justify-center text-[#0F172A] text-xs">✓</div>
                        We respect your privacy
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-[#C29D66] flex items-center justify-center text-[#0F172A] text-xs">✓</div>
                        Unsubscribe anytime
                    </div>
                </div>

            </div>
        </section>
    );
};
