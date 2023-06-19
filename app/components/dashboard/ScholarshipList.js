import Image from 'next/image'

export default function ScholarshipList({ scholar }) {

    return (
        <div
            className='
            capitalize
            text-[16px]
            bg-white
            shadow-2xl
            rounded-[20px]
            py-5
            px-10
            '
        >
            <div
                className='flex justify-end'
            >
                <p
                    className={`
                        mb-5
                        ${scholar.status == 'pending' ? 'bg-yellow-200' : ''}
                        ${scholar.status == 'rejected' ? 'bg-rose-200' : ''}
                        ${scholar.status == 'approved' ? 'bg-green-200' : ''}
                        uppercase
                        text-sm
                        py-[5px]
                        px-[10px]
                        w-fit
                        rounded-[20px]
                    `}
                >
                    {scholar.status}
                </p>
            </div>
            <div >
                <p className='mb-5 text-2xl font-bold'>{scholar.degreeType}</p>
                <p className={`
                        mb-5
                        text-xl
                        py-[5px]
                        px-[10px]
                        w-36
                        text-center
                        rounded-[20px]
                        ${scholar.scholarshipType == 'partial' ? 'text-yellow-400' : ''}
                        ${scholar.scholarshipType == 'assistanship' ? 'text-rose-400' : ''}
                        ${scholar.scholarshipType == 'full' ? 'text-green-400' : ''}
                        ${scholar.scholarshipType == 'partial' ? 'border-yellow-400' : ''}
                        ${scholar.scholarshipType == 'assistanship' ? 'border-rose-400' : ''}
                        ${scholar.scholarshipType == 'full' ? 'border-green-400' : ''}
                        ${scholar.scholarshipType == 'partial' ? 'border' : ''}
                        ${scholar.scholarshipType == 'assistanship' ? 'border' : ''}
                        ${scholar.scholarshipType == 'full' ? 'border' : ''}
                `}
                >
                    {scholar.scholarshipType}
                </p>
                <p className='mb-5 text-xl'>{scholar.school}, {scholar.schoolAddress.country}</p>
            </div>
            <div
                className='
                    flex
                    cursor-pointer
                    items-center
                    justify-between
                    mt-10
                    mb-3
                '
            >
                <p>
                    <Image
                        width={25}
                        height={25}
                        alt='edit'
                        src={'/pencil-edit.svg'}
                    />
                </p>
                <p>
                    <Image
                        width={25}
                        height={25}
                        alt='delete'
                        src={'/trash.svg'}
                    />
                </p>
            </div>
        </div>
    )
}
