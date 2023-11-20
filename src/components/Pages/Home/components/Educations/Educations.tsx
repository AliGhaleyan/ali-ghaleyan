import { MotionContainer } from "@/components/Fragments";
import { SECTIONS } from "@/constants/sections";
import EducationCard from "./components/EducationCard";
import { EDUCATIONS } from "@/components/Pages";

const Educations = () => {
    return <div id={SECTIONS.educations.id}>
        <MotionContainer className="grid gap-20">
            <div className="text-center">
                <h3 className="text-4xl font-bold">Educations</h3>
            </div>
            <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto w-full">
                {EDUCATIONS.map((education, key) =>
                    <EducationCard key={key} education={education} />)}
            </div>
        </MotionContainer>
    </div>;
};

export default Educations;