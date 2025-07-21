'use client';

import React from 'react';

const TailwindBackgroundWrapper = ({ children }) => {
  return (
    <div
      className="relative grid grid-cols-[1fr_2.5rem_auto_2.5rem_1fr] grid-rows-[1fr_1px_auto_1px_1fr] 
                 bg-white dark:bg-black
                 [--pattern-fg:rgba(0,0,0,0.05)] dark:[--pattern-fg:rgba(255,255,255,0.07)]"
    >
      {/* Main Content Box */}
      <div className="col-start-3 row-start-3 flex flex-col items-center gap-6 w-full">
        <div className="flex flex-col gap-6 w-full px-1 pb-4">
          {React.Children.map(children, (child) => (
            <div className="w-full">
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Stripe Backgrounds (unchanged) */}
      <div className="relative -right-px col-start-2 row-span-full row-start-1 border-x border-x-[var(--pattern-fg)] 
        bg-[image:repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] 
        bg-[size:10px_10px] bg-fixed" />

      <div className="relative -left-px col-start-4 row-span-full row-start-1 border-x border-x-[var(--pattern-fg)] 
        bg-[image:repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] 
        bg-[size:10px_10px] bg-fixed" />

      <div className="relative -bottom-px col-span-full col-start-1 row-start-2 h-px bg-[var(--pattern-fg)]" />
      <div className="relative -top-px col-span-full col-start-1 row-start-4 h-px bg-[var(--pattern-fg)]" />
    </div>
  );
};

export default TailwindBackgroundWrapper;
