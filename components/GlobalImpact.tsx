import React from 'react';

export const GlobalImpact = () => {
    return (
        <section className="relative w-full py-32 px-6 md:px-12 bg-white overflow-hidden text-center">

            {/* Background Map Placeholder */}
            {/* Using a subtle map texture or SVG */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none filter sepia hue-rotate-15">
                <svg width="100%" height="100%" viewBox="0 0 1000 500" fill="#E2E8F0">
                    <path d="M... (Simplified world map paths would go here, relying on image for now)..." />
                </svg>
                <div className="w-full h-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-cover bg-center bg-no-repeat opacity-30" />
            </div>

            {/* Glowing Points Logic (CSS) */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Random glow points */}
                <div className="absolute top-[30%] left-[20%] w-2 h-2 bg-yellow-400 rounded-full shadow-[0_0_10px_4px_rgba(250,204,21,0.6)] animate-pulse" />
                <div className="absolute top-[40%] left-[45%] w-2 h-2 bg-yellow-400 rounded-full shadow-[0_0_10px_4px_rgba(250,204,21,0.6)] animate-pulse delay-75" />
                <div className="absolute top-[60%] right-[25%] w-2 h-2 bg-yellow-400 rounded-full shadow-[0_0_10px_4px_rgba(250,204,21,0.6)] animate-pulse delay-150" />
                <div className="absolute top-[35%] right-[15%] w-2 h-2 bg-yellow-400 rounded-full shadow-[0_0_10px_4px_rgba(250,204,21,0.6)] animate-pulse delay-300" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">

                <div className="flex items-center gap-4 mb-8">
                    <span className="h-[1px] w-12 bg-[#C29D66]"></span>
                    <span className="text-[#C29D66] text-xl">♦</span>
                    <span className="h-[1px] w-12 bg-[#C29D66]"></span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0F172A] mb-8 leading-tight">
                    Making a Global Impact for God's Kingdom
                </h2>

                <p className="text-lg text-slate-600 max-w-2xl mb-12 leading-relaxed font-light font-sans">
                    Through digital ministry and on-the-ground missions, we're bringing the light of Christ to communities far and wide. Our network extends across continents, touching lives by sharing the love, hope, and teachings of Jesus.
                </p>

                <button className="flex items-center gap-2 px-8 py-3 bg-[#1e293b] text-white rounded-md font-medium hover:bg-[#334155] transition-all shadow-lg hover:shadow-xl active:translate-y-0.5">
                    Our Mission Worldwide
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>
                </button>

            </div>
        </section>
    );
};
