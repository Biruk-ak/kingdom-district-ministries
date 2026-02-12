
import React from 'react';
import Image from 'next/image';

export const Newsletter = () => {
    return (
        <section className="relative w-full py-24 overflow-hidden flex items-center justify-center">

            {/* Background Image */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <Image
                    src="/77.webp"
                    alt="Newsletter Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-center text-center max-w-4xl">
                <span className="text-[#C29D66] font-medium tracking-[0.2em] text-sm uppercase mb-6">
                    Stay Connected
                </span>

                <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6 leading-tight">
                    Get Updates and Stories from <br /> Kingdom District Ministries
                </h2>

                <p className="text-primary/70 text-lg max-w-2xl mb-10 leading-relaxed font-light">
                    Sign up for our newsletter to receive ministry updates, inspiring stories, and ways to get involved.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mb-8">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-6 py-3 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#C29D66]/50 bg-white/80 placeholder-slate-400 text-slate-700 shadow-sm"
                    />
                    <button className="px-8 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-all shadow-lg flex items-center justify-center gap-2 whitespace-nowrap">
                        Subscribe <span className="text-lg">→</span>
                    </button>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#C29D66] flex items-center justify-center text-white text-[10px]">✓</div>
                        <span>We respect your privacy</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#C29D66] flex items-center justify-center text-white text-[10px]">✓</div>
                        <span>Unsubscribe anytime</span>
                    </div>
                </div>

            </div>
        </section>
    );
};
