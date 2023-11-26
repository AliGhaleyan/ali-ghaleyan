import { Container, MotionContainer } from "@/components/Fragments";
import { SKILLS } from "@/components/Pages";
import SkillItem from "./components/SkillItem";
import { SECTIONS } from "@/constants/sections";

const Skills = () => {
    return <div className="relative mb-40">
        <Container className="grid gap-20 z-10 relative bg-white p-10 rounded-3xl shadow-md">
            <div className="text-center">
                <h2 className="text-4xl font-bold">Skills</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-20">
                {SKILLS.map((skill, key) => <SkillItem key={key} {...skill} />)}
            </div>
        </Container>
    </div>;
};

export default Skills;