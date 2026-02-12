import React from 'react';
import Image from 'next/image';

export const Mission = () => {
    return (
        <section className="relative w-full py-32 overflow-hidden text-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <Image
                    src="/555.webp"
                    alt="Our Mission Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="relative z-20 max-w-4xl mx-auto px-6 md:px-12 flex flex-col items-center">

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

                <p className="text-xl md:text-2xl font-light leading-relaxed text-slate-100 mb-12 drop-shadow-md">
                    At Kingdom District Ministries, our mission is to spread the Gospel, strengthen faith, and empower communities through the love of Christ. Discover our purpose and values as we work together to make a global impact.
                </p>

                <button className="flex items-center gap-2 px-8 py-3 bg-white text-primary rounded-md font-medium hover:bg-slate-100 transition-all shadow-lg active:translate-y-0.5">
                    Learn More About Us
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>
                </button>

                <div className="flex flex-col sm:flex-row gap-6 mt-16 text-sm text-slate-200 font-light tracking-wide">
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-[#C29D66] flex items-center justify-center text-primary text-xs">✓</div>
                        We respect your privacy
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-[#C29D66] flex items-center justify-center text-primary text-xs">✓</div>
                        Unsubscribe anytime
                    </div>
                </div>

            </div>
        </section>
    );
};
