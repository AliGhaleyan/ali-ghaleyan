import { MotionContainer } from "@/components/Fragments";
import { EXPERIENCES } from "@/components/Pages";
import { SECTIONS } from "@/constants/sections";
import ExperienceCard from "./components/ExperienceCard";

const Experiences = () => {
    return <div className="relative" id={SECTIONS.experiences.id}>
        {/* <BackgroundShapes /> */}
        <div className="backdrop-blur-md z-40 bg-white/30">
            <MotionContainer className="grid gap-20">
                <div className="text-center">
                    <h2 className="text-4xl font-bold">Experiences</h2>
                </div>
                <div className="grid grid-cols-1 gap-6 max-w-5xl mx-auto">
                    {EXPERIENCES.map((experience, key) =>
                        <div key={key} className={key % 2 != 0 ? "pl-40" : "pr-40"}>
                            <ExperienceCard key={key} experience={experience} />
                        </div>)}
                </div>
            </MotionContainer>
        </div>
    </div>;
};

export default Experiences;