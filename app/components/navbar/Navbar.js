'use client';

import Wrapper from "../Wrapper";
import Brand from "./Brand";
import User from "./User";

export default function Navbar() {
    return (
        <div
            className="py-5
                border-b-2
                "
        >
            <Wrapper>
                <div
                    className="
                flex 
                justify-between 
                items-center
                "
                >
                    <Brand />
                    <User />
                </div>
            </Wrapper>
        </div>
    )
}
