export default function Wrapper({ children }) {
    return (
        <div
            className='
                max-w-[1200px]
                mx-auto
                px-4
                xl:px-20
                md:px-10
                sm:px-2
                '
        >
            {children}
        </div>
    )
}
