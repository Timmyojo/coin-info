import React from 'react'

export default function Select({
    id,
    options,
    required,
    register,
    errors


}) {
    return (
        <div>
            <select
                id={id}
                name={id}
                {...register(id, { required })}
                className={`
                    w-full
                    p-4
                    font-light
                    bg-white
                    border-2
                    rounded-md
                    disabled:opacity-70
                    disabled:cursor-not-allowed
                     ${errors[id] ? 'border-rose-500' : 'border-neutral-300'}
                    ${errors[id] ? 'focus:border-rose-500' : 'focus:border-neutral-300'}
                   
               `}
            >
                {options.map((opt, idx) => {
                    return (
                        <option key={idx} value={opt.value}>{opt.label}</option>
                    )
                })}
            </select>

        </div>
    )
}
