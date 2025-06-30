'use client';

import React, { useRef, useState, useEffect } from 'react';

const TailwindBackgroundWrapper = ({ children }) => {
  const scrollRef = useRef(null);
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(false);

  // Update scroll buttons visibility
  const updateButtons = () => {
    const el = scrollRef.current;
    if (!el) return;

    const atStart = el.scrollLeft <= 10;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 10;

    setShowPrev(!atStart);
    setShowNext(!atEnd);
  };

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;

    const scrollAmount = el.offsetWidth * 0.85;
    el.scrollBy({ left: dir === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
  };

  // Set listeners
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateButtons();

    const handleScroll = () => updateButtons();
    el.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateButtons);

    return () => {
      el.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateButtons);
    };
  }, []);

  // Run once children are rendered
  useEffect(() => {
    const timeout = setTimeout(updateButtons, 100); // Allow DOM to paint
    return () => clearTimeout(timeout);
  }, [children]);

  return (
    <div
      className="relative grid min-h-[calc(100vh-6rem)] grid-cols-[1fr_2.5rem_auto_2.5rem_1fr] grid-rows-[1fr_1px_auto_1px_1fr] 
                 bg-white dark:bg-black
                 [--pattern-fg:rgba(0,0,0,0.05)] dark:[--pattern-fg:rgba(255,255,255,0.07)]"
    >
      {/* Main Content Box */}
      <div className="col-start-3 row-start-3 flex flex-col items-center gap-6">
        {/* Controls */}
        <div className="flex justify-between w-full px-4 mb-3">
          {showPrev ? (
            <button
              onClick={() => scroll('left')}
              className="text-white bg-gray-900 px-3 py-1 rounded"
            >
              ‹ Prev
            </button>
          ) : <div className="w-[70px]" />}

          {showNext ? (
            <button
              onClick={() => scroll('right')}
              className="text-white bg-gray-900 px-3 py-1 rounded"
            >
              Next ›
            </button>
          ) : <div className="w-[70px]" />}
        </div>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth gap-6 w-full px-1 pb-4 scrollbar-hide"
        >
          {React.Children.map(children, (child) => (
            <div className="snap-center shrink-0">
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Stripe Background (unchanged) */}
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
