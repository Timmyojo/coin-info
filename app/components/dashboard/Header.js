'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Wrapper from '../Wrapper'
import Avatar from './Avatar';

export default function Header() {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const name = 'new user'

    const logOut = () => {
        setOpen(false)
        router.push('/')

    }
    return (
        <div
            className='
                    bg-white
                    shadow-lg
                    absolute
                    z-40
                    w-full
                    '
        >
            <Wrapper>
                <div
                    className='
                    flex
                    justify-between
                    items-center
                    py-3
                    '
                >
                    <div className='text-lg'>
                        Welcome back,
                        <span
                            className='
                            font-bold
                            capitalize
                            pl-1
                            '
                        >
                            {name}
                        </span>!
                    </div>
                    <div
                        onClick={() => setOpen(true)}
                        className='
                        relative
                        cursor-pointer
                        '
                    >
                        <Avatar src={'/ti.jpeg'} />
                        <div
                            onClick={logOut}
                            className={`
                            ${open ? 'block' : 'hidden'}
                            bg-white
                            shadow-lg
                            capitalize
                            text-lg
                            p-4
                            absolute
                            top-0
                            -left-10
                            `}
                        >
                            logout
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}
