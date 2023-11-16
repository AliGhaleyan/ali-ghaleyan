import { Container } from "@/components/Fragments";
import MyImage from "./components/MyImage";
import AboutMe from "./components/AboutMe";

const Hero = () => {
    return <Container className="grid grid-cols-2 gap-10 py-20">
        <div className="flex justify-center">
            <AboutMe />
        </div>
        <div className="flex items-center justify-center">
            <MyImage />
        </div>
    </Container>;
};

export default Hero;