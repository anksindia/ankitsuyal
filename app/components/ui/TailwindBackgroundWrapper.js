// TailwindBackgroundWrapper.jsx
'use client';

import React from 'react';

const TailwindBackgroundWrapper = ({ children }) => {
  return (
    <div
      className="relative grid
        grid-cols-[1fr_2rem_auto_2rem_1fr] /* Changed from 1.5rem to 2rem for better mobile visibility */
        sm:grid-cols-[1fr_2.5rem_auto_2.5rem_1fr]
        grid-rows-[1fr_1px_auto_1px_1fr]
        bg-white dark:bg-black
        [--pattern-fg:rgba(0,0,0,0.05)]
        dark:[--pattern-fg:rgba(255,255,255,0.07)]"
    >
      {/* Main content */}
      <div className="col-start-3 row-start-3 w-full">
        <div className="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 flex flex-col gap-8">
          {React.Children.map(children, (child) => (
            <div className="w-full">{child}</div>
          ))}
        </div>
      </div>

      {/* Left stripe */}
      <div
        className="relative -right-px min-w-[2rem] /* Adjusted min-width to match grid-cols */
        col-start-2 row-span-full row-start-1 border-x border-x-[var(--pattern-fg)]
        bg-[image:repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)]
        bg-[size:10px_10px] bg-fixed"
      />

      {/* Right stripe */}
      <div
        className="relative -left-px min-w-[2rem] /* Adjusted min-width to match grid-cols */
        col-start-4 row-span-full row-start-1 border-x border-x-[var(--pattern-fg)]
        bg-[image:repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)]
        bg-[size:10px_10px] bg-fixed"
      />

      {/* Top line */}
      <div className="relative -bottom-px col-span-full col-start-1 row-start-2 h-px bg-[var(--pattern-fg)]" />

      {/* Bottom line */}
      <div className="relative -top-px col-span-full col-start-1 row-start-4 h-px bg-[var(--pattern-fg)]" />
    </div>
  );
};

export default TailwindBackgroundWrapper;