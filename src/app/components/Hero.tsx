import Image from 'next/image'
import React from 'react'
import heroSectionImg from '../../../public/assets/imgs/hero-section-img.png'

function Hero() {
    return (
        <section className="relative flex w-full flex-col items-center justify-center md:flex-row-reverse">
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-8">
                <h1 className="text-4xl font-extrabold text-blue-900 md:text-6xl">
                    LogiDog
                </h1>
                <p className="max-w-1/3 text-base font-bold text-balance text-black shadow-2xs sm:text-2xl md:max-w-1/3 md:text-3xl">
                    Handling thousands of shipments every day from consumers
                    worldwide
                </p>
            </div>
            <div className="bg-sky-200 opacity-30">
                <Image
                    src={heroSectionImg}
                    alt="image of logistics and shipments"
                />
            </div>
        </section>
    )
}

export default Hero
