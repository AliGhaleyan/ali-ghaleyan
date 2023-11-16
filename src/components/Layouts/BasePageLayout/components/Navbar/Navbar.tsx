"use client"
import { Container } from "@/components/Fragments";
import NavItem from "./components/NavItem";
import { ROUTES } from "@/constants/routes";

const Navbar = () => {
    return <Container>
        <div className="gap-5 flex py-8 justify-center">
            <NavItem href={ROUTES.home}>About Me</NavItem>
            <NavItem href={ROUTES.skills}>Skills</NavItem>
            <NavItem href={ROUTES.experiences}>Experiences</NavItem>
            <NavItem href={ROUTES.contactMe}>Cantact Me</NavItem>
        </div>
    </Container>;
};

export default Navbar;