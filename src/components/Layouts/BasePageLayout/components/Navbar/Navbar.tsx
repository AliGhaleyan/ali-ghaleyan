"use client"
import { Container } from "@/components/Fragments";
import { SECTIONS } from "@/constants/sections";
import { Section, SectionKeys } from "@/types";
import { useEffect, useState } from "react";
import NavItem from "./components/NavItem";

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

    return <Container>
        <div className="gap-5 flex py-8 justify-center">
            {Object.keys(SECTIONS).map((key) => {
                if (key == "contactMe") return;
                const section = SECTIONS[key as SectionKeys];
                return <NavItem key={key} sectionId={section.id}
                    isActive={activeItem == section.id}>{section.title}</NavItem>;
            })}
            <NavItem email="mr.ali.serjik@gmail.com">{SECTIONS.contactMe.title}</NavItem>
        </div>
    </Container>;
};

export default Navbar;