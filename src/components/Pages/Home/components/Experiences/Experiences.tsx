import { MotionContainer } from "@/components/Fragments";
import { EXPERIENCES } from "@/components/Pages";
import { SECTIONS } from "@/constants/sections";
import ExperienceCard from "./components/ExperienceCard";

const Experiences = () => {
    return <MotionContainer id={SECTIONS.experiences.id} className="grid gap-20">
        <div className="text-center">
            <h2 className="text-4xl font-bold">Experiences</h2>
        </div>
        <div className="grid grid-cols-2 gap-6">
            {EXPERIENCES.map((experience, key) => <ExperienceCard key={key} experience={experience} />)}
        </div>
    </MotionContainer>;
};

export default Experiences;