
import React from 'react';
import Image from 'next/image';

const events = [
    {
        title: "Prayer & Worship Night",
        date: "May 28, 2024",
        description: "Unite in worship and prayer to deepen faith, concern here and God.",
        image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2673&auto=format&fit=crop", // Placeholder
    },
    {
        title: "Leadership Training Seminar",
        date: "June 5, 2024",
        description: "Gain knowledge and grow spiritually through biblical teachings.",
        image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2670&auto=format&fit=crop", // Placeholder
    },
    {
        title: "Community Outreach",
        date: "June 15, 2024",
        description: "Equip and mentor leaders to spread the slogan and serve others.",
        image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2670&auto=format&fit=crop", // Placeholder
    },
];

export const Events = () => {
    return (
        <section className="relative w-full py-24 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <Image
                    src="/100.webp"
                    alt="Events Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-center text-center">

                <span className="text-[#C29D66] font-medium tracking-[0.2em] text-sm uppercase mb-4">
                    Upcoming Events
                </span>

                <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6 leading-tight">
                    Our Events
                </h2>

                <p className="text-primary/70 text-lg max-w-2xl mb-16 leading-relaxed font-light">
                    Join Kingdom District Ministries for inspiring events and activities designed to bring our community closer to God and each other.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mb-12">
                    {events.map((event, index) => (
                        <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 flex flex-col group">
                            {/* Image Container */}
                            <div className="relative h-56 w-full overflow-hidden">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* Overlay gradient for text readability if needed, but design shows clear image */}
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col items-center flex-grow">
                                <h3 className="text-xl font-serif text-primary mb-2 font-medium">{event.title}</h3>
                                <span className="text-[#C29D66] text-sm font-medium mb-4 uppercase tracking-wide">{event.date}</span>
                                <p className="text-primary/70 text-sm leading-relaxed text-center mb-6">
                                    {event.description}
                                </p>

                                <div className="mt-auto">
                                    <button className="px-6 py-2 bg-primary text-white text-sm rounded-md font-medium hover:bg-primary/90 transition-all flex items-center gap-2">
                                        Learn More <span className="text-xs">›</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="px-8 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-all shadow-lg flex items-center gap-2">
                    View All Events <span className="text-lg">→</span>
                </button>

            </div>
        </section>
    );
};
