import House from "../components/House";
import News from "../components/News";
import Partners from "../components/Partners";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Showcase from "../components/Showcase";
import Stats from "../components/Stats";
import About from "../components/About";
import Communication from "../components/Communication";

function Home(props) {
  return (
    <>
      <Showcase />
      <Services />
      <Stats />
      <House />
      <Projects />
      <News />
      <Partners />
      <About />
      <Communication />
    </>
  );
}

export default Home;
