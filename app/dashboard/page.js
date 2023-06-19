import Chart from "../components/dashboard/Chart";
import Stats from "../components/dashboard/Stats";
import Wrapper from "../components/Wrapper";


export default function page() {
    return (
        <div>
            <Wrapper>
                <Stats />
                <Chart />
            </Wrapper>
        </div>
    )
}
