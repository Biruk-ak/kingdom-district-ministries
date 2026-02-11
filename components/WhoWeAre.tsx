import React from 'react';

// Reusable Icon Component
const IconWrapper = ({ children }: { children: React.ReactNode }) => (
    <div className="w-16 h-16 rounded-full bg-[#C29D66] flex items-center justify-center text-white mb-6 mx-auto shadow-sm">
        {children}
    </div>
);

// SVGs for the cards
const Icons = {
    Worship: () => (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M9 10H15" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M4 19.5C4 19.5 4 6 4 6C4 4.89543 4.89543 4 6 4H20V18H6C4.89543 18 4 18.8954 4 20V19.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 16L20 16" stroke="white" strokeWidth="2" />
        </svg>
    ),
    Education: () => (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 6L12 11L22 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 6V18L12 23L22 18V6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 11V23" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    Empowerment: () => (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="7" r="4" stroke="white" strokeWidth="2" />
            <path d="M5.5 21C5.5 21 5.5 16 8.5 14C11.5 12 12.5 12 15.5 14C18.5 16 18.5 21 18.5 21" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M18 10L21 7" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
    ),
    Global: () => (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
            <path d="M2 12H22" stroke="white" strokeWidth="2" />
            <path d="M12 2C14.5 5 16 9 16 12C16 15 14.5 19 12 22C9.5 19 8 15 8 12C8 9 9.5 5 12 2Z" stroke="white" strokeWidth="2" />
        </svg>
    ),
};

// Data for the cards
const features = [
    {
        title: "Worship",
        description: "Uniting hearts in prayer and worship to honor God.",
        icon: <Icons.Worship />
    },
    {
        title: "Education",
        description: "Teaching and equipping believers through biblical education.",
        icon: <Icons.Education />
    },
    {
        title: "Empowerment",
        description: "Raising leaders to transform communities and serve others",
        icon: <Icons.Empowerment />
    },
    {
        title: "Global Outreach",
        description: "Extending Christ's love across borders to those in need.",
        icon: <Icons.Global />
    }
];

export const WhoWeAre = () => {
    return (
        <section className="relative w-full py-24 px-6 md:px-12 bg-white overflow-hidden">
            {/* Background Image Placeholder with Overlay */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Gradient Overlay for the fade effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white/90 z-10" />
                {/* This image is a placeholder for the crowd background */}
                <div
                    className="w-full h-full bg-cover bg-center opacity-30"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1473177104440-ffee2f376098?q=80&w=2670&auto=format&fit=crop')" }}
                />
            </div>

            <div className="relative z-10 container mx-auto flex flex-col items-center text-center">

                {/* Section Header */}
                <span className="text-[#C29D66] font-medium tracking-[0.2em] text-sm uppercase mb-6 block">
                    Who We Are
                </span>

                <h2 className="text-4xl md:text-5xl font-serif text-[#0F172A] mb-8 leading-tight max-w-4xl">
                    Living Out Our Faith Through Worship, Education, and Outreach
                </h2>

                <p className="text-slate-600 text-lg md:text-xl max-w-3xl mb-10 leading-relaxed font-light">
                    Kingdom District Ministries exists to spread the message of Christ through worship, education, leadership development, and compassionate global outreach.
                </p>

                <button className="px-8 py-3 bg-[#1e293b] text-white rounded-md font-medium hover:bg-[#334155] transition-all shadow-md mb-16">
                    Learn More
                </button>

                {/* Divider with Icon */}
                <div className="flex items-center w-full max-w-4xl mb-16 opacity-60">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C29D66] to-transparent flex-1"></div>
                    <div className="mx-4 text-[#C29D66]">
                        {/* Diamond Icon */}
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" className="rotate-45">
                            <rect width="12" height="12" />
                        </svg>
                    </div>
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C29D66] to-transparent flex-1"></div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                        >
                            <div className="group-hover:scale-110 transition-transform duration-300">
                                <IconWrapper>
                                    {feature.icon}
                                </IconWrapper>
                            </div>
                            <h3 className="text-xl font-serif text-[#0F172A] mb-4 font-medium">
                                {feature.title}
                            </h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
