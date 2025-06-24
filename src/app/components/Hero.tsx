import Image from 'next/image'
import React from 'react'
import heroSectionImg from '../../../public/assets/imgs/hero-section-img.png'

function Hero() {
    return (
        <section className="relative flex w-full flex-col-reverse items-center justify-between gap-8 overflow-hidden bg-gradient-to-b from-blue-50 to-white px-4 py-10 md:flex-row md:gap-0 md:px-12 md:py-16">
            {/* TEXT BLOCK */}
            <div className="relative z-20 flex flex-col items-center space-y-6 md:w-1/2 md:items-start">
                <h1 className="text-center text-4xl font-extrabold text-blue-900 drop-shadow md:text-left md:text-6xl">
                    LogiDog
                </h1>
                <p className="max-w-md text-center text-base font-bold text-black sm:text-xl md:text-left md:text-2xl">
                    Handling thousands of shipments every day from consumers
                    worldwide
                </p>
            </div>

            {/* HERO IMAGE */}
            <div className="relative mb-4 flex w-full items-center justify-center md:mb-0 md:w-1/2">
                <div className="flex h-60 w-60 items-center justify-center overflow-hidden rounded-2xl bg-sky-200/50 shadow-2xl sm:h-96 sm:w-96 md:h-[350px] md:w-full">
                    <Image
                        src={heroSectionImg}
                        alt="image of logistics and shipments"
                        priority
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 60vw, 45vw"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero
