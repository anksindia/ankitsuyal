'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

const PageLoader = ({ setIsLoading }) => {
    const loaderRef = useRef(null);
    const logoRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                setTimeout(() => {
                    gsap.to(loaderRef.current, {
                        opacity: 0,
                        duration: 1,
                        ease: 'power2.inOut',
                        onComplete: () => {
                            setIsLoading(false);
                        },
                    });
                }, 1200);
            },
        });

        // Animate the image sliding in from the right bottom
        tl.fromTo(
            imageRef.current,
            { x: '100vw', y: '100vh' },
            { x: 0, y: 0, duration: 1.5, ease: 'power3.out' }
        );

        // The logo animates in after the image is in place
        tl.fromTo(
            logoRef.current,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 1, ease: 'back.out(1.7)' },
            '-=1'
        );

        // The new developer line text fades in below the logo
        tl.fromTo(
            textRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
            '-=0.5'
        );

        // The logo gets a permanent pulsing white glow
        tl.to(
            logoRef.current,
            {
                boxShadow: '0 0 20px rgba(255, 255, 255, 0.6), 0 0 40px rgba(255, 255, 255, 0.4)',
                scale: 1.1,
                duration: 1.2,
                ease: 'power1.inOut',
                yoyo: true,
                repeat: -1,
            },
            '-=0.5'
        );

        return () => {
            tl.kill();
        };
    }, [setIsLoading]);

    return (
        <div
            ref={loaderRef}
            className="page-loader fixed inset-0 z-[9999] bg-black text-white"
        >
            {/* GTA-style Image container, responsive and bottom-right aligned */}
            <div
                ref={imageRef}
                className="image-container fixed bottom-0 right-0 max-w-[90vw] max-h-[60vh] md:max-w-[700px] md:max-h-[700px]">

                <Image
                    src="/anks.png"
                    alt="Anks - GTA Style"
                    width={700}
                    height={700}
                    className="object-contain w-full h-full"
                    priority
                />
            </div>

            {/* Logo and text container, now positioned better for mobile */}
            <div className="absolute top-[20%] left-1/2 -translate-x-1/2 flex flex-col items-center text-center md:top-1/2">
                {/* Logo with a pulsating glow */}
                <div ref={logoRef} className="logo-container p-4 rounded-full transition-all duration-300">
                    <Image
                        src="/logo.svg"
                        alt="Anks Logo"
                        width={60} // Smaller logo on mobile
                        height={60} // Smaller logo on mobile
                        className="md:w-[80px] md:h-[80px]" // Larger logo on desktop
                        priority
                    />
                </div>

                
                <h1
                    ref={textRef}
                    className="mt-4 text-sm md:text-3xl font-semibold uppercase tracking-[0.2em] text-gray-400 md:text-gray-200"
                >
                    Hello World!
                </h1>
            </div>
        </div>
    );
};

export default PageLoader;