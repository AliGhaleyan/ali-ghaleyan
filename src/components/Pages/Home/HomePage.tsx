import Educations from "./components/Educations";
import Experiences from "./components/Experiences";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

const HomePage = () => {
    return <div className="grid gap-36 lg:gap-40">
        <Hero />
        <Experiences />
        <Projects />
        <Educations />
    </div>;
};

export default HomePage;