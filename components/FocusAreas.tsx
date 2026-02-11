import React from 'react';

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
        description: "Fostering a culture of worship and prayer to draw closer to God.",
        icon: <Icons.WorshipPrayer />
    },
    {
        title: "Faith-Based Education",
        description: "Providing biblical teachings and discipleship for spiritual growth.",
        icon: <Icons.Education />
    },
    {
        title: "Leadership & Discipleship",
        description: "Training and equipping leaders to serve and spread the Gospel.",
        icon: <Icons.Leadership />
    },
    {
        title: "Global Community Empowerment",
        description: "Empowering communities worldwide through service and support.",
        icon: <Icons.Community />
    }
];

export const FocusAreas = () => {
    return (
        <section className="relative w-full py-24 px-6 md:px-12 bg-blue-50/30 overflow-hidden">
            {/* Background Texture Placeholder */}
            <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay">
                <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/clouds.png')]" />
            </div>

            <div className="relative z-10 container mx-auto flex flex-col items-center text-center">

                <span className="text-[#C29D66] font-medium tracking-[0.2em] text-sm uppercase mb-4">
                    Our Focus Areas
                </span>

                <h2 className="text-4xl md:text-5xl font-serif text-[#0F172A] mb-6 leading-tight max-w-4xl">
                    Empowering Communities Through Faith and Action
                </h2>

                <p className="text-slate-600 text-lg max-w-2xl mb-10 leading-relaxed font-light">
                    We are dedicated to transforming lives and communities through Christ-centered initiatives. Explore our core focus areas below:
                </p>

                {/* Divider */}
                <div className="flex items-center w-full max-w-2xl mb-16 opacity-40">
                    <div className="h-[1px] bg-[#C29D66] flex-1"></div>
                    <div className="mx-4 text-[#C29D66]">♦</div>
                    <div className="h-[1px] bg-[#C29D66] flex-1"></div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-16">
                    {areas.map((area, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-slate-50 flex flex-col items-center">
                            <IconWrapper>{area.icon}</IconWrapper>
                            <h3 className="text-xl font-serif text-[#0F172A] mb-4 font-medium px-4">{area.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">{area.description}</p>
                        </div>
                    ))}
                </div>

                <button className="px-10 py-3 bg-[#1e293b] text-white rounded-md font-medium hover:bg-[#334155] transition-all shadow-lg shadow-blue-900/10">
                    Learn More
                </button>

            </div>
        </section>
    );
};
