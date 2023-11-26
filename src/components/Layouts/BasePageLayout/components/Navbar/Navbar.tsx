"use client"
import { Container } from "@/components/Fragments";
import { SECTIONS } from "@/constants/sections";
import { Section, SectionKeys } from "@/types";
import { useEffect, useState } from "react";
import NavItem from "./components/NavItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons/faTelegram";

const Navbar = () => {
    const [activeItem, setActiveItem] = useState<Section["id"]>();

    useEffect(() => {
        const sectionKeys = Object.keys(SECTIONS);

        const handleScroll = () => {
            const sectionOffsets = sectionKeys.map((sectionKey) => ({
                id: sectionKey,
                offset: document.getElementById(sectionKey)?.offsetTop,
            }));

            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (const { id, offset } of sectionOffsets.reverse()) {
                if (typeof offset !== "undefined" && scrollPosition >= offset) {
                    setActiveItem(id);
                    break;
                }
            }
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return <Container className="flex justify-between items-center text-white">
        <div className="gap-5 flex py-8 items-center">
            {Object.keys(SECTIONS).map((key) => {
                if (key == "contactMe") return;
                const section = SECTIONS[key as SectionKeys];
                return <NavItem key={key} sectionId={section.id}>{section.title}</NavItem>;
            })}
            <NavItem email="mr.ali.serjik@gmail.com">{SECTIONS.contactMe.title}</NavItem>
        </div>
        <div className="flex gap-4 [&>a>svg]:h-6 [&>a>svg]:w-6">
            <a href="https://github.com/AliGhaleyan" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/ali-ghaleyan-8014b0187/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://t.me/Serjikaa">
                <FontAwesomeIcon icon={faTelegram} />
            </a>
            <a href="mailto:mr.ali.serjik@gmail.com">
                <FontAwesomeIcon icon={faAt} />
            </a>
        </div>
    </Container>;
};

export default Navbar;