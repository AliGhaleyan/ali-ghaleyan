import { Container, MotionContainer } from "@/components/Fragments";
import { SKILLS } from "@/components/Pages";
import SkillItem from "./components/SkillItem";
import { SECTIONS } from "@/constants/sections";

const Skills = () => {
    return <MotionContainer id={SECTIONS.skills.id} className="grid gap-20">
        <div className="text-center">
            <h2 className="text-4xl font-bold">Skills</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-20">
            {SKILLS.map((skill, key) => <SkillItem key={key} {...skill} />)}
        </div>
    </MotionContainer>;
};

export default Skills;