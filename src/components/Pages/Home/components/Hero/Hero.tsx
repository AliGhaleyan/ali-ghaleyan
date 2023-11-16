import { Container } from "@/components/Fragments";
import MyImage from "./components/MyImage";

const Hero = () => {
    return <Container className="grid grid-cols-2 gap-10 py-20">
        <div className="flex justify-center">
            <div className="max-w-lg flex flex-col gap-4 justify-center">
                <h1 className="text-4xl font-extrabold text-dark-gray">Ali Ghaleyan</h1>
                <p className="text-lg font-light text-justify text-dark-gray">
                    Hello, I'm Ali Ghaleyan, a frontend developer with 3 years of experience in ReactJs and NextJs. I'm passionate about turning ideas into interactive and visually appealing experiences. In the ever-changing tech world, I thrive on learning and adapting, using each project to expand my skill set and explore innovative solutions. I'm always excited to delve into new technologies and best practices.
                </p>
            </div>
        </div>
        <div className="flex items-center justify-center">
            <MyImage />
        </div>
    </Container>;
};

export default Hero;