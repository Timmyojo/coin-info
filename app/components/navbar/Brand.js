'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Brand() {

    const router = useRouter()
    return (
        <a
            href='/'
        >
            <Image
                src='/logoo.png'
                height={80}
                width={130}
                alt='brand'
            />
        </a>
    )
}
