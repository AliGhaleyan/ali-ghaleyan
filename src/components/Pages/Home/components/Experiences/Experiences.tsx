import { MotionContainer } from "@/components/Fragments";
import { EXPERIENCES } from "@/components/Pages";
import { SECTIONS } from "@/constants/sections";
import ExperienceCard from "./components/ExperienceCard";
import classNames from "classnames";

const Experiences = () => {
    return <div className="relative" id={SECTIONS.experiences.id}>
        <div className="backdrop-blur-md z-40 bg-white/30">
            <MotionContainer className="grid gap-20">
                <div className="text-center">
                    <h2 className="text-4xl font-bold">Experiences</h2>
                </div>
                <div className={classNames(
                    "grid grid-cols-1 md:gap-6 max-w-5xl mx-auto",
                    "md:[&>div]:border-b-0 [&>div]:border-b [&>div:last-of-type]:border-b-0 border-b-gray-400"
                )}>
                    {EXPERIENCES.map((experience, key) =>
                        <div key={key} className={key % 2 != 0 ? "lg:pl-40" : "lg:pr-40"}>
                            <ExperienceCard key={key} experience={experience} />
                        </div>)}
                </div>
            </MotionContainer>
        </div>
    </div>;
};

export default Experiences;