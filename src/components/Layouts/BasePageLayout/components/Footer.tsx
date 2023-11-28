import { Container, MotionContainer } from "@/components/Fragments";
import { faGithub, faLinkedin, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faAt, faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import SocialIcons from "./SocialIcons";

const Footer = () => {
    return <footer className="pt-20">
        <MotionContainer className="pt-20 border-t border-gray-100">
            <div className="grid grid-cols-2 mx-auto max-w-5xl">
                <div className="grid gap-4 text-dark-gray">
                    <div className="flex text-dark-blue-300 gap-4 [&>a>svg]:h-6 [&>a>svg]:w-6">
                        <SocialIcons />
                    </div>
                    <div>
                        <span className="font-bold">Email:</span> mr.ali.serjik@gmail.com
                    </div>
                </div>
                <div className="flex justify-end items-center">
                    <a href="/Ali's%20Resume.pdf">
                        <button className={classNames(
                            "border-2 uppercase rounded-full flex items-center gap-2 font-bold border-dark-blue-300 px-8 py-2 text-dark-blue-300",
                            "hover:bg-dark-blue-300 hover:text-white",
                        )}>
                            Download My Resume
                            <FontAwesomeIcon icon={faFileArrowDown} />
                        </button>
                    </a>
                </div>
            </div>
        </MotionContainer>
    </footer>;
};

export default Footer;