'use client';
import Image from "next/image";
import Link from "next/link";
import Wrapper from "../Wrapper";

export default function Sidebar() {
    return (
        <div
            className="
            border-t-2
            bg-white
            border-neutral-400
            fixed
            bottom-0
            w-full
            "
        >
            <Wrapper>
                <div
                    className="
                py-2
                flex
                justify-around
                items-center
               
            "
                >
                    <div>
                        <Link href='/dashboard'>
                            <Image
                                className="cursor-pointer"
                                src='/home.svg'
                                height={40}
                                width={40}
                                alt='home'
                            />
                        </Link>
                    </div>
                    <div>
                        <Link href='/dashboard/scholarship-list'>
                            <Image
                                className="cursor-pointer"
                                src='/list.svg'
                                height={40}
                                width={40}
                                alt='list'
                            />
                        </Link>
                    </div>
                    <div>
                        <Link href='/dashboard/add-scholarship'>
                            <Image
                                className="cursor-pointer"
                                src='/plus.svg'
                                height={40}
                                width={40}
                                alt='add'
                            />
                        </Link>
                    </div>
                    <div>
                        <Link href='/dashboard/profile'>
                            <Image
                                className="cursor-pointer"
                                src='/user.svg'
                                height={40}
                                width={40}
                                alt='user'
                            />
                        </Link>
                    </div>

                </div>
            </Wrapper>
        </div>
    )
}
