"use client";

import { useRouter } from "next/navigation";
import Button from "../Button";

export default function User() {
    const router = useRouter();
    return (
        <div
            className="
            flex 
            justify-center
            items-center
            gap-6
        "
        >
            <div
                className="
                hidden
                md:flex
                "
            >
                <Button text={'login'} plain onClick={() => { }} disabled={false} />
            </div>
            <Button text={'get started'} onClick={() => (router.push('/dashboard'))} disabled={false} />
        </div>
    )
}
