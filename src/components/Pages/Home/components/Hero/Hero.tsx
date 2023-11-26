import { Container } from "@/components/Fragments";
import AboutMe from "./components/AboutMe";
import { SECTIONS } from "@/constants/sections";
import Skills from "../Skills";
import Shape01 from "./components/Shape01";
import Shape02 from "./components/Shape02";

const Hero = () => {
    return <div id={SECTIONS.aboutMe.id} className="relative overflow-hidden">
        <div className="absolute backdrop-blur-md w-full h-3/4 bg-gradient-to-tr from-dark-blue via-dark-blue-300 to-dark-blue-200" />
        <Shape01 className="absolute bottom-0 -left-96 z-10 w-[75rem] h-[75rem] blur-3xl opacity-20" />
        <Shape02 className="absolute -top-96 -right-96 z-10 w-[75rem] h-[75rem] blur-3xl opacity-20" />
        <div className="pt-32 text-white relative">
            <Container className="flex justify-center items-center py-32 pb-44">
                <AboutMe />
            </Container>
        </div>
        <Skills />
    </div>;
};

export default Hero;