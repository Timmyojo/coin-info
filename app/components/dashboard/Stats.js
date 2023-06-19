
export default function Stats() {
    return (
        <div
            className="
            capitalize
            px-3
            gap-5
            grid
            grid-cols-auto-fit-250
            "
        >
            <div

                className="
                 bg-white
                shadow-2xl
                p-4
                flex
                justify-center
                items-center
                flex-col
                text-xl
                gap-4
                "
            >
                successful application
                <span
                    className="
                    text-3xl
                    font-bold
                    "
                >
                    3
                </span>
            </div>
            <div

                className="
                 bg-white
                shadow-2xl
                p-4
                flex
                justify-center
                items-center
                flex-col
                text-xl
                gap-4
                "
            >
                pending application
                <span
                    className="
                    text-3xl
                    font-bold
                    "
                >
                    4
                </span>
            </div>
            <div

                className="
                 bg-white
                shadow-2xl
                p-4
                flex
                justify-center
                items-center
                flex-col
                text-xl
                gap-4
                "
            >
                schedule interviews
                <span
                    className="
                    text-3xl
                    font-bold
                    "
                >
                    2
                </span>
            </div>
            <div

                className="
                 bg-white
                shadow-2xl
                p-4
                flex
                justify-center
                items-center
                flex-col
                text-xl
                gap-4
                "
            >
                rejected application
                <span
                    className="
                    text-3xl
                    font-bold
                    "
                >
                    1
                </span>
            </div>
        </div>
    )
}
