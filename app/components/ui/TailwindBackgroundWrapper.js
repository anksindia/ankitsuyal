'use client';

import React from 'react';

const TailwindBackgroundWrapper = ({ children }) => {
    return (
        <div
            className="relative grid min-h-screen grid-cols-[1fr_2.5rem_auto_2.5rem_1fr] grid-rows-[1fr_1px_auto_1px_1fr] 
                 bg-white dark:bg-black
                 [--pattern-fg:rgba(0,0,0,0.05)] dark:[--pattern-fg:rgba(255,255,255,0.07)]"
        >
            {/* Main Content Box */}
            <div className="col-start-3 row-start-3 flex w-[70vw] flex-col bg-gray-100 p-6 px-10 dark:bg-black rounded-xl shadow-md">
                {children}
            </div>

            {/* Left Stripe Border */}
            <div className="relative -right-px col-start-2 row-span-full row-start-1 
                      border-x border-x-[var(--pattern-fg)] 
                      bg-[image:repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] 
                      bg-[size:10px_10px] bg-fixed" />

            {/* Right Stripe Border */}
            <div className="relative -left-px col-start-4 row-span-full row-start-1 
                      border-x border-x-[var(--pattern-fg)] 
                      bg-[image:repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] 
                      bg-[size:10px_10px] bg-fixed" />

            {/* Top Border */}
            <div className="relative -bottom-px col-span-full col-start-1 row-start-2 h-px bg-[var(--pattern-fg)]" />

            {/* Bottom Border */}
            <div className="relative -top-px col-span-full col-start-1 row-start-4 h-px bg-[var(--pattern-fg)]" />
        </div>
    );
};

export default TailwindBackgroundWrapper;

