import React from 'react';
import Image from 'next/image';

// Reusable Icon Wrapper
const IconWrapper = ({ children }: { children: React.ReactNode }) => (
    <div className="w-20 h-20 rounded-full bg-gradient-to-b from-[#D4AF37] to-[#AA8C2C] flex items-center justify-center text-white mb-6 mx-auto shadow-md">
        {children}
    </div>
);

// SVGs for the cards
const Icons = {
    WorshipPrayer: () => (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4V16" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M8 8H16" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M4 19C4 19 4 6 4 6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V19" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M4 16L20 16" stroke="white" strokeWidth="2" />
        </svg>
    ),
    Education: () => (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 6C2 6 6 3 12 3C18 3 22 6 22 6V19C22 19 18 16 12 16C6 16 2 19 2 19V6Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 3V16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    Leadership: () => (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="8" r="4" stroke="white" strokeWidth="2" />
            <path d="M6 21V16C6 14 8 13 12 13" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M17 11L21 7" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M12 13L16 17L18.5 15" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
    ),
    Community: () => (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5.5C12 5.5 14 3.5 17 3.5C19.5 3.5 21.5 5.5 21.5 8C21.5 13 12 20 12 20C12 20 2.5 13 2.5 8C2.5 5.5 4.5 3.5 7 3.5C10 3.5 12 5.5 12 5.5Z" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 14C4 14 6 18 12 18C18 18 20 14 20 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 12V14" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
    ),
};

const areas = [
    {
        title: "Worship & Prayer",
        description: "Unite in worship and prayer to deepen faith and connect with God.",
        icon: <Icons.WorshipPrayer />
    },
    {
        title: "Faith-Based Education",
        description: "Gain knowledge and grow spiritually through biblical teachings.",
        icon: <Icons.Education />
    },
    {
        title: "Leadership & Discipleship",
        description: "Equip and mentor leaders to spread the Gospel and serve others.",
        icon: <Icons.Leadership />
    },
    {
        title: "Global Community Empowerment",
        description: "Support and uplift communities worldwide with love and service.",
        icon: <Icons.Community />
    }
];

export const FocusAreas = () => {
    return (
        <section className="relative w-full py-24 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <Image
                    src="/66.webp"
                    alt="Focus Areas Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-center text-center">

                <span className="text-[#C29D66] font-medium tracking-[0.2em] text-sm uppercase mb-4">
                    Explore Our Programs
                </span>

                <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6 leading-tight max-w-4xl">
                    Strengthening Communities in Christ
                </h2>

                <p className="text-primary/70 text-lg max-w-2xl mb-8 leading-relaxed font-light">
                    Our programs are designed to enrich lives and empower communities through the love and teachings of Christ.
                </p>

                <button className="px-10 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-all shadow-lg mb-16 flex items-center gap-2">
                    View All Programs <span className="text-lg">→</span>
                </button>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    {areas.map((area, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 pb-12 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-50 flex flex-col items-center group translate-y-[65px]"
                        >
                            <IconWrapper>{area.icon}</IconWrapper>
                            <h3 className="text-xl font-serif text-primary mb-4 font-medium px-4">{area.title}</h3>
                            <div className="w-10 h-[1px] bg-[#C29D66]/50 mb-4 group-hover:w-20 transition-all duration-300"></div>
                            <p className="text-primary/70 text-sm leading-relaxed">{area.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
