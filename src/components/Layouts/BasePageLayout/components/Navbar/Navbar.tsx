"use client"
import { Container } from "@/components/Fragments";
import { SECTIONS } from "@/constants/sections";
import { Section, SectionKeys } from "@/types";
import { useEffect, useState, Fragment } from "react";
import SocialIcons from "../SocialIcons";
import NavItem from "./components/NavItem";
import { Transition, Dialog, Menu } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const [activeItem, setActiveItem] = useState<Section["id"]>();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMobileMenu = () => setIsOpen(!isOpen);

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

    return <>
        <Container className="hidden md:flex justify-between items-center text-white">
            <div className="gap-5 flex py-8 items-center">
                {Object.keys(SECTIONS).map((key) => {
                    if (key == "contactMe") return;
                    const section = SECTIONS[key as SectionKeys];
                    return <NavItem key={key} sectionId={section.id}>{section.title}</NavItem>;
                })}
                <NavItem email="mr.ali.serjik@gmail.com">{SECTIONS.contactMe.title}</NavItem>
            </div>
            <div className="flex gap-4 [&>a>svg]:h-6 [&>a>svg]:w-6">
                <SocialIcons />
            </div>
        </Container>

        <Container className="flex md:hidden justify-between items-center py-4 text-white">
            <a href="https://github.com/AliGhaleyan" target="_blank">
                <FontAwesomeIcon icon={faGithub} className="h-8 w-8" />
            </a>
            <FontAwesomeIcon icon={faBars} className="h-8 w-8" onClick={toggleMobileMenu} />
        </Container>

        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-[1050]" onClose={toggleMobileMenu}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Dialog.Overlay className="fixed inset-0 bg-black/25" />
                </Transition.Child>

                <div className="fixed h-full right-0 top-0 overflow-y-auto">
                    <div className="flex min-w-full min-h-full overflow-hidden">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="ease-in duration-300"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                        >
                            <Dialog.Panel className="flex flex-col gap-6 bg-white z-[1050] min-w-full min-h-full w-[20rem] max-w-xs transform overflow-hidden p-6 text-left transition-all">
                                <div className="flex justify-start text-dark-gray-700">
                                    <FontAwesomeIcon icon={faXmark} className="h-6 w-6" onClick={toggleMobileMenu} />
                                </div>
                                <div className="grid">
                                    {Object.keys(SECTIONS).map((key) => {
                                        if (key == "contactMe") return;
                                        const section = SECTIONS[key as SectionKeys];
                                        return <NavItem key={key} sectionId={section.id}>{section.title}</NavItem>;
                                    })}
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    </>;
};

export default Navbar;