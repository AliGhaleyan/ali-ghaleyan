import { Css3Icon, DockerIcon, GitIcon, Html5Icon, JavascriptIcon, NextJsIcon, NpmIcon, ReactJsIcon, SassIcon, TailwindcssIcon, TypescriptIcon, WebpackIcon, YarnIcon } from "@/components/Icons";
import { Education, Experience, Project, Skill } from "@/types";

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

export const EDUCATIONS: Education[] = [
    {
        schoolName: "Noorani poor",
        degree: "High School Diploma",
        fieldOfStudy: "Computer Science",
        startYear: 2015,
        endYear: 2018
    }
];

export const PROJECTS: Project[] = [
    {
        name: "LanGeek",
        description: "I contributed to the development of the LanGeek frontend using the Next.js framework with Sass. My responsibilities included designing responsive layouts, implementing dynamic features, optimizing performance and implementing PWA. This project honed my technical skills. I am proud to have contributed to the success of this project.",
        image: "/images/projects/langeek.png",
        link: "https://langeek.co/"
    },
    {
        name: "LanGeek Picture Dictionary",
        description: "Langeek Picture Dictionary is an integral component of the broader Langeek ecosystem, redefining language exploration through visual richness. Developed with the same commitment to excellence that defines Langeek, this picture dictionary offers users an innovative way to explore and understand a diverse range of terms and concepts. Powered by advanced technologies, including the Next.js framework and Sass for a sleek and responsive interface, Langeek Picture Dictionary goes beyond traditional definitions.",
        image: "/images/projects/langeek-dictionary.png",
        link: "https://dictionary.lange1ek.co/"
    },
    {
        name: "Trovio",
        description: "I developed Trovio, a website built with Next.js and Tailwind CSS. Trovio stands out because it not only loads quickly but also has a sleek and appealing design. To make it even better, I implemented Server-Side Rendering (SSR) and Incremental Static Regeneration (ISR). These advanced techniques ensure that Trovio delivers a smooth and responsive user experience.",
        image: "/images/projects/trovio.png",
        link: "https://www.trovio.io/"
    },
    {
        name: "OMP",
        description: "I proudly developed the OMP (Optimize Mind Performance) Dashboard project using Next.js and Tailwind CSS, with a special focus on leveraging the power of React Query. This dynamic combination results in a responsive and feature-rich dashboard. Next.js ensures speedy performance, Tailwind CSS contributes to a sleek design, and React Query enhances data fetching and management.",
        image: "/images/projects/OMP.png",
        link: "https://optimizemindperformance.com/"
    },
    {
        name: "Safeproud",
        description: "I contributed to the development of the Safeproud Dashboard Project, contributing my skills to enhance the project using Next.js, Tailwind CSS, and React Query. Together, these technologies create a robust and user-friendly experience. With Next.js for efficient performance, Tailwind CSS for a stylish design, and React Query for optimized data fetching, Safeproud is a testament to the seamless integration of cutting-edge tools.",
        image: "/images/projects/safeproud.png",
        link: "https://safeproud.com.au/"
    },
];