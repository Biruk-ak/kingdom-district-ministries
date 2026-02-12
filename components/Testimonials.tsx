
import React from 'react';
import Image from 'next/image';

const testimonials = [
    {
        name: "Sarah Mitchell",
        role: "Volunteer",
        quote: "Volunteering with KDM has been life-changing. The impact we're making through outreach and discipleship is truly inspiring. I've grown so much in my faith and have seen the love of Christ transform communities.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2592&auto=format&fit=crop", // Placeholder
    },
    {
        name: "James Carter",
        role: "Mission Sponsor",
        quote: "Supporting KDM has been a privilege. I've witnessed first hand how my contributions are bringing hope and change to people around the world. It's a blessing to be part of such a meaningful mission.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop", // Placeholder
    },
    {
        name: "Lisa Nguyen",
        role: "Ministry Partner",
        quote: "Kingdom District Ministries has a heart for Jesus and a vision for reaching the lost. Their dedication to worship, education, and empowerment has created a lasting impact.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2661&auto=format&fit=crop", // Placeholder
    },
];

const RatingStars = () => (
    <div className="flex gap-1 mb-4 text-[#D4AF37]">
        {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ))}
    </div>
);

export const Testimonials = () => {
    return (
        <section className="relative w-full py-24 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <Image
                    src="/33.webp"
                    alt="Testimonials Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-center text-center">

                <span className="text-[#C29D66] font-medium tracking-[0.2em] text-sm uppercase mb-4">
                    Testimonials
                </span>

                <h2 className="text-4xl md:text-5xl font-serif text-primary mb-16 leading-tight">
                    What People Are Saying
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mb-12">
                    {testimonials.map((t, index) => (
                        <div key={index} className="bg-white/80 backdrop-blur-sm p-8 pt-12 rounded-xl border border-slate-100 shadow-sm relative flex flex-col items-center hover:shadow-md transition-all duration-300 mt-10">

                            {/* Avatar - Floating Output */}
                            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full border-4 border-white shadow-md overflow-hidden bg-slate-200">
                                <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                            </div>

                            <RatingStars />

                            {/* Quote Mark */}
                            <div className="absolute top-12 left-6 text-[#C29D66]/20 text-6xl font-serif leading-none">“</div>

                            <p className="text-primary/70 text-sm leading-relaxed mb-6 italic relative z-10 px-2">
                                "{t.quote}"
                            </p>

                            <div className="mt-auto text-center">
                                <h4 className="font-serif text-primary text-lg font-medium">{t.name}</h4>
                                <p className="text-[#C29D66] text-sm uppercase tracking-wider mt-1">{t.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="px-8 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-all shadow-lg flex items-center gap-2">
                    Read More Testimonials <span className="text-lg">→</span>
                </button>

            </div>
        </section>
    );
};
