import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Wrapper from "./components/Wrapper";

export default async function Home() {
  return (
    <div>
      <Navbar />
      <Wrapper>
        <Hero />
      </Wrapper>
    </div>
  )
}
