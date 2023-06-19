'use client'

import Image from "next/image";
import HeroText from "./HeroText";

export default function Hero() {
    return (
        <div
            className='
                md:flex
                justify-center
                items-center
                '
        >
            <HeroText />
            <div
                className='
                my-10
                flex
                justify-center
                '
            >
                <Image
                    src='/hero.svg'
                    height={300}
                    width={300}
                    alt='hero'
                />
            </div>
        </div>
    )
}
