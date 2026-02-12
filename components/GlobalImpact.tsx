import Image from 'next/image';

export const GlobalImpact = () => {
    return (
        <section className="relative w-full min-h-screen py-32 overflow-hidden text-center flex items-center justify-center">

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/44.webp"
                    alt="Global Impact Background"
                    fill
                    className="object-cover"
                    quality={90}
                    priority
                />
            </div>

            {/* Glowing Points Logic (CSS) */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {/* Random glow points */}
                <div className="absolute top-[30%] left-[20%] w-2 h-2 bg-yellow-400 rounded-full shadow-[0_0_10px_4px_rgba(250,204,21,0.6)] animate-pulse" />
                <div className="absolute top-[40%] left-[45%] w-2 h-2 bg-yellow-400 rounded-full shadow-[0_0_10px_4px_rgba(250,204,21,0.6)] animate-pulse delay-75" />
                <div className="absolute top-[60%] right-[25%] w-2 h-2 bg-yellow-400 rounded-full shadow-[0_0_10px_4px_rgba(250,204,21,0.6)] animate-pulse delay-150" />
                <div className="absolute top-[35%] right-[15%] w-2 h-2 bg-yellow-400 rounded-full shadow-[0_0_10px_4px_rgba(250,204,21,0.6)] animate-pulse delay-300" />
            </div>

            <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-center justify-between min-h-[70vh]">

                <div className="flex flex-col items-center gap-8 md:gap-12">
                    <div className="flex items-center gap-4">
                        <span className="h-[1px] w-12 bg-[#C29D66]"></span>
                        <span className="text-[#C29D66] text-xl">♦</span>
                        <span className="h-[1px] w-12 bg-[#C29D66]"></span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-primary leading-tight">
                        Making a Global Impact for God's Kingdom
                    </h2>

                    <p className="text-xl text-primary/80 max-w-2xl leading-relaxed font-light font-sans">
                        Through digital ministry and on-the-ground missions, we're bringing the light of Christ to communities far and wide. Our network extends across continents, touching lives by sharing the love, hope, and teachings of Jesus.
                    </p>
                </div>

                <button className="flex items-center gap-3 px-10 py-4 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl active:translate-y-0.5 text-lg mt-12">
                    Our Mission Worldwide
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>
                </button>

            </div>
        </section>
    );
};
