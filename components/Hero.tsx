import React from 'react';
import Image from 'next/image';

const LogoGraphic = () => {
    return (
        <div className="flex flex-col items-center select-none pointer-events-none transform scale-100 md:scale-110 lg:scale-125">
            <Image
                src="/logo.webp"
                alt="Kingdom District Ministries Logo"
                width={800}
                height={800}
                className="w-full max-w-[800px] h-auto object-contain drop-shadow-2xl"
                priority
            />
        </div>
    );
};

export const Hero = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center overflow-hidden pt-20">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/hero2.png"
                    alt="Hero Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">

                {/* Left Content */}
                <div className="space-y-6 max-w-2xl z-20">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-primary leading-[1.15]">
                        Bringing Faith, <br />
                        Hope, and Purpose <br />
                        to the World
                    </h1>

                    <p className="text-lg text-primary/80 leading-relaxed max-w-lg font-light">
                        Kingdom District Ministries is a global faith-based organization dedicated to worship, discipleship, education, and empowering communities through Christ-centered outreach.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <button className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl active:scale-95 duration-200">
                            Get Involved
                        </button>
                        <button className="px-8 py-3 bg-transparent border border-gray-200 text-slate-700 rounded-lg font-medium hover:bg-gray-50 transition-all active:scale-95 duration-200">
                            Our Mission
                        </button>
                    </div>
                </div>

                {/* Right Content - Logo */}
                <div className="flex justify-center lg:justify-end relative items-center h-full">
                    <div className="scale-100 transform transition-transform duration-700 hover:scale-105">
                        <LogoGraphic />
                    </div>
                </div>
            </div>
        </section>
    );
};
