import { MotionContainer } from "@/components/Fragments";
import { SECTIONS } from "@/constants/sections";
import { PROJECTS } from "@/components/Pages";
import ProjectCard from "./components/ProjectCard";
import WaveStartBackground from "./components/WaveStartBackground";
import WaveEndBackground from "./components/WaveEndBackground";

const Projects = () => {
    return <div>
        <WaveStartBackground />
        <div className="text-white bg-dark-blue py-32">
            <MotionContainer id={SECTIONS.projects.id} className="grid gap-20">
                {PROJECTS.map((project, key) => <ProjectCard key={key} project={project} />)}
            </MotionContainer>
        </div>
        <WaveEndBackground />
    </div>;
};

export default Projects;