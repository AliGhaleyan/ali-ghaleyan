"use client";
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
import classNames from "classnames";
import { createPortal } from "react-dom";

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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(isOpen);

  return (
    <>
      <Container className="hidden md:flex justify-between items-center text-white">
        <div className="gap-5 flex py-8 items-center text-white">
          {Object.keys(SECTIONS).map((key) => {
            if (key == "contactMe") return;
            const section = SECTIONS[key as SectionKeys];
            return (
              <NavItem key={key} sectionId={section.id}>
                {section.title}
              </NavItem>
            );
          })}
          <NavItem email="mr.ali.serjik@gmail.com">
            {SECTIONS.contactMe.title}
          </NavItem>
        </div>
        <div className="flex gap-4 [&>a>svg]:h-6 [&>a>svg]:w-6">
          <SocialIcons />
        </div>
      </Container>

      <Container className="flex md:hidden justify-between items-center py-4 text-white">
        <FontAwesomeIcon
          icon={faBars}
          className="!h-8 !w-8"
          onClick={toggleMobileMenu}
        />
        <a href="https://github.com/AliGhaleyan" target="_blank">
          <FontAwesomeIcon icon={faGithub} className="!h-8 !w-8" />
        </a>
      </Container>

      {createPortal(
        <>
          <div
            className={classNames(
              "inset-0 bg-black/25 z-50",
              isOpen ? "fixed" : "hidden"
            )}
            onClick={toggleMobileMenu}
          />

          <div
            className={classNames(
              "fixed flex flex-col gap-6 p-2 top-0 bottom-0 left-0 min-h-full transition-all duration-300 z-[1050] bg-white w-3/4",
              isOpen
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            )}
          >
            <div className="flex justify-end text-dark-gray-700 pt-4 px-4">
              <FontAwesomeIcon
                icon={faXmark}
                className="!h-6 !w-6"
                onClick={toggleMobileMenu}
              />
            </div>
            <div className="grid text-dark-blue">
              {Object.keys(SECTIONS).map((key) => {
                if (key == "contactMe") return;
                const section = SECTIONS[key as SectionKeys];
                return (
                  <NavItem
                    key={key}
                    sectionId={section.id}
                    className="p-3 border-b text-xl border-b-gray-400"
                    onClick={toggleMobileMenu}
                  >
                    {section.title}
                  </NavItem>
                );
              })}
              <NavItem email="mr.ali.serjik@gmail.com" className="p-3 text-xl">
                {SECTIONS.contactMe.title}
              </NavItem>
            </div>
          </div>
        </>,
        document.body
      )}
    </>
  );
};

export default Navbar;
