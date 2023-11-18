import { Css3Icon, DockerIcon, GitIcon, Html5Icon, JavascriptIcon, NextJsIcon, NpmIcon, ReactJsIcon, SassIcon, TailwindcssIcon, TypescriptIcon, WebpackIcon, YarnIcon } from "@/components/Icons";
import { Skill } from "@/types";

export const SKILLS: Skill[] = [
    {
        name: "JavaScript",
        icon: <JavascriptIcon width={80} height={80} />
    },
    {
        name: "CSS",
        icon: <Css3Icon width={80} height={80} />
    },
    {
        name: "HTML",
        icon: <Html5Icon width={80} height={80} />
    },
    {
        name: "ReactJs",
        icon: <ReactJsIcon width={80} height={80} />
    },
    {
        name: "NextJs",
        icon: <NextJsIcon width={80} height={80} />
    },
    {
        name: "TypeScript",
        icon: <TypescriptIcon width={80} height={80} />
    },
    {
        name: "TailwindCss",
        icon: <TailwindcssIcon width={80} height={80} />
    },
    {
        name: "Sass",
        icon: <SassIcon width={80} height={80} />
    },
    {
        name: "NPM",
        icon: <NpmIcon width={80} height={80} />
    },
    {
        name: "Yarn",
        icon: <YarnIcon width={80} height={80} />
    },
    {
        name: "Webpack",
        icon: <WebpackIcon width={80} height={80} />
    },
    {
        name: "Git",
        icon: <GitIcon width={80} height={80} />
    },
    {
        name: "Docker",
        icon: <DockerIcon width={80} height={80} />
    }
];