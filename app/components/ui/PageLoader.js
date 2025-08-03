'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

const PageLoader = ({ setIsLoading }) => {
    const loaderRef = useRef(null);
    const logoRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);

    const [assetsLoaded, setAssetsLoaded] = useState({
        image: false,
        logo: false,
    });

    useEffect(() => {
        
        if (!assetsLoaded.image || !assetsLoaded.logo) return;

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

        tl.fromTo(
            imageRef.current,
            { x: '100vw', y: '100vh', opacity: 0 },
            { x: 0, y: 0, opacity: 1, duration: 1.5, ease: 'power3.out' }
        );

        tl.fromTo(
            logoRef.current,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 1, ease: 'back.out(1.7)' },
            '-=1'
        );

        tl.fromTo(
            textRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
            '-=0.5'
        );

        return () => {
            tl.kill();
        };
    }, [assetsLoaded, setIsLoading]);

    return (
        <div
            ref={loaderRef}
            className="page-loader fixed inset-0 z-[9999] bg-black text-white"
        >
            {/* Image container */}
            <div
                ref={imageRef}
                className="image-container fixed bottom-0 right-0 opacity-0 max-w-[90vw] max-h-[60vh] md:max-w-[700px] md:max-h-[700px]"
            >
                <Image
                    src="/anks.png"
                    alt="Anks - GTA Style"
                    width={700}
                    height={700}
                    className="object-contain w-full h-full"
                    priority
                    onLoad={() => {
                        setAssetsLoaded((prev) => ({ ...prev, image: true }));
                    }}
                />
            </div>

            {/* Logo and text */}
            <div className="absolute top-[20%] left-1/2 -translate-x-1/2 flex flex-col items-center text-center md:top-1/2">
                <div
                    ref={logoRef}
                    className="logo-container opacity-0 p-4 rounded-full transition-all duration-300"
                >
                    <Image
                        src="/logo.svg"
                        alt="Anks Logo"
                        width={60}
                        height={60}
                        className="md:w-[80px] md:h-[80px]"
                        priority
                        onLoad={() => {
                            setAssetsLoaded((prev) => ({ ...prev, logo: true }));
                        }}
                    />
                </div>

                <h1
                    ref={textRef}
                    className="mt-4 opacity-0 text-sm md:text-3xl font-semibold uppercase tracking-[0.2em] text-gray-400 md:text-gray-200"
                >
                    More than just code.
                </h1>
            </div>
        </div>
    );
};

export default PageLoader;
