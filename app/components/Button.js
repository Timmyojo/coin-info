'use client'

export default function Button({
    text, plain, disabled, onClick
}) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
            cursor-pointer
            capitalize
            hover:opacity-80
            transition
            w-fit
            py-[6px]
            px-[12px]
            ${plain ? 'bg-white' : 'bg-teal-400'}
            ${plain ? 'text-black' : 'text-white'}
            rounded-lg
            disabled:cursor-not-allowed
            disabled:opacity-60
            `}


        >
            {text}
        </button>
    )
}
