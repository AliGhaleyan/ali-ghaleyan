import Educations from "./components/Educations";
import Experiences from "./components/Experiences";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const HomePage = () => {
    return <div className="grid gap-40">
        <Hero />
        <Experiences />
        <Projects />
        <Educations />
    </div>;
};

export default HomePage;