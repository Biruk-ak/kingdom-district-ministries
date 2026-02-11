import React from 'react';

export const KDMLogo = ({ className = "" }: { className?: string }) => {
    return (
        <div className={`flex flex-col items-center justify-center ${className}`}>
            {/* Logo Graphic */}
            <div className="relative w-48 h-48 mb-4">
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    {/* Globe Outline (Abstract) */}
                    <path
                        d="M100 20C55.8 20 20 55.8 20 100C20 120 27 138 39 152"
                        stroke="#D1D5DB"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M161 152C173 138 180 120 180 100C180 55.8 144.2 20 100 20"
                        stroke="#D1D5DB"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    {/* Grid lines on globe */}
                    <path d="M40 60 Q 100 10 160 60" stroke="#E5E7EB" strokeWidth="1.5" fill="none" />
                    <path d="M30 100 Q 100 30 170 100" stroke="#E5E7EB" strokeWidth="1.5" fill="none" />
                    <path d="M60 25 Q 20 100 60 175" stroke="#E5E7EB" strokeWidth="1.5" fill="none" />
                    <path d="M140 25 Q 180 100 140 175" stroke="#E5E7EB" strokeWidth="1.5" fill="none" />

                    {/* Cross - Gold Color */}
                    <path
                        d="M140 40 V 120 M120 70 H 160"
                        stroke="#C4A47C"
                        strokeWidth="6"
                        strokeLinecap="round"
                        className="drop-shadow-sm"
                    />

                    {/* Dove / Swoosh - Blue Color */}
                    {/* A stylized bird shape swooping up */}
                    <path
                        d="M40 100 C 40 100, 70 140, 110 130 C 140 122, 160 90, 160 90 C 160 90, 150 110, 130 125 C 110 140, 80 140, 40 100 Z"
                        fill="#1E3A8A"
                        stroke="#1E3A8A"
                        strokeWidth="2"
                        strokeLinejoin="round"
                    />
                    {/* Second swoosh line/wing */}
                    <path
                        d="M45 110 C 60 145, 120 145, 140 115"
                        stroke="#C4A47C"
                        strokeWidth="4"
                        fill="none"
                        strokeLinecap="round"
                    />
                </svg>
            </div>

            {/* Text */}
            <h1 className="text-7xl font-sans tracking-tight text-[#0F172A] font-medium">
                KDM
            </h1>
        </div>
    );
};
