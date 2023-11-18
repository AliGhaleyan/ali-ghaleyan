import Hero from "./components/Hero";
import Skills from "./components/Skills";

const HomePage = () => {
    return <div className="grid gap-80">
        <Hero />
        <Skills />
        <div className="h-96"></div>
    </div>;
};

export default HomePage;