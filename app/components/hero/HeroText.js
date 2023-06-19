import React from 'react'
import Button from '../Button'

export default function HeroText() {
    return (
        <div>
            <div
                className='
                my-6
                '
            >
                <div
                    className='
                    text-3xl
                    text-black
                    font-bold
                    pb-3
                    '
                >
                    Scholarship tracking tool for students and graduates
                </div>
                <p
                    className='
                text-neutral-500
                    '
                >
                    Track your scholarship status with keeptracka - Never miss an update on your scholarship application status.
                </p>
            </div>
            <Button text={'get stated'} plain={false} disabled={false} onClick={() => { }} />
        </div>
    )
}
