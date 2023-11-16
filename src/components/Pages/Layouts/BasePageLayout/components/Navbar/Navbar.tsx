"use client"
import { Container } from "@/components/Fragments";
import NavItem from "./components/NavItem";

const Navbar = () => {
    return <Container>
        <div className="gap-5 flex py-4 justify-center">
            <NavItem>About Me</NavItem>
            <NavItem>Skills</NavItem>
            <NavItem>Cantact Me</NavItem>
        </div>
    </Container>;
};

export default Navbar;