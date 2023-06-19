'use client';
import Image from "next/image";

export default function Avatar({ src, upload }) {
    return (
        <div
            className="
            relative
            "
        >
            <Image
                className="object-contain
                rounded-full
                "
                src={src}
                height={`${upload ? '80' : '50'}`}
                width={`${upload ? '80' : '50'}`}
                alt='avatar'
            />
            {upload &&
                <div
                    className="
                    border-white
                    border-[3px]
                    absolute
                    -bottom-1
                    left-12
                    rounded-full
                    cursor-pointer
                    p-1
                    bg-blue-500
                    "
                >
                    <Image
                        src='/camera.svg'
                        height={20}
                        width={20}
                        alt='avatar'
                    />
                </div>
            }
        </div>
    )
}
