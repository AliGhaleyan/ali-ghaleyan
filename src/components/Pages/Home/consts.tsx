import { Css3Icon, DockerIcon, GitIcon, Html5Icon, JavascriptIcon, NextJsIcon, NpmIcon, ReactJsIcon, SassIcon, TailwindcssIcon, TypescriptIcon, WebpackIcon, YarnIcon } from "@/components/Icons";
import { Experience, Skill } from "@/types";

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

export const EXPERIENCES: Experience[] = [
    {
        company: { name: "AlmasDade" },
        position: "Backend Developer",
        skills: ["PHP", "Laravel", "HTML", "CSS", "Bootstrap"],
        startedAt: new Date("2019/6"),
        endAt: new Date("2020/9")
    },
    {
        company: { name: "Bamooz" },
        position: "Fullstack Developer",
        skills: ["PHP", "Laravel", "HTML", "CSS", "Bootstrap", "ReactJS", "NextJS", "Docker"],
        startedAt: new Date("2020/11"),
        endAt: new Date("2022/8"),
        link: "https://b-amooz.com/",
        description: "The B-Amooz platform is a software-educational project that operates in the field of content production and educational software, especially in the area of foreign language instruction. This platform has been launched by a group of language and computer science experts."
    },
    {
        company: { name: "Langeek" },
        position: "Frontend Developer",
        skills: ["ReactJS", "NextJS", "Sass", "PWA"],
        startedAt: new Date("2021/4"),
        endAt: new Date("2022/8"),
        link: "https://langeek.co/",
        description: "LanGeek is a language learning platform that helps you learn easier, faster and smarter."
    },
    {
        company: { name: "Shakewell Agency" },
        position: "Frontend Developer",
        skills: ["ReactJS", "NextJS", "TailwindCSS"],
        startedAt: new Date("2021/4"),
        link: "https://www.shakewell.agency/",
        description: "Shakewell Agency is a digital and socially driven business built on customer understanding, technology and creativity. Specialising in design, web development, app development (iOS & Android), e-commerce, maintenance and support, online marketing services, and all things digital."
    },
];