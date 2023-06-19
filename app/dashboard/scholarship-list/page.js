import Wrapper from '@/app/components/Wrapper'
import data from '@/app/components/data'
import ScholarshipList from '@/app/components/dashboard/ScholarshipList'

export default function page() {
    return (
        <div>
            <Wrapper>
                <div
                    className='
                   grid
                   grid-cols-auto-fit-250
                    relative
                    px-8
                    gap-4
                    md:px-1
                    '
                >
                    {data <= 0 ?
                        <div>no scholarship available...</div> :
                        data.map(scholar => {
                            return (
                                <ScholarshipList key={scholar.id} scholar={scholar} />
                            )
                        })}
                </div>
            </Wrapper>
        </div>
    )
}
