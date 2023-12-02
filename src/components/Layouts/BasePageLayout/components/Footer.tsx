import { MotionContainer } from "@/components/Fragments";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import SocialIcons from "./SocialIcons";

const Footer = () => {
    return <footer className="pt-20">
        <MotionContainer className="mt-20 lg:mt-0 pt-20 border-t border-gray-100">
            <div className="grid gap-10 lg:gap-4 lg:grid-cols-2 mx-auto max-w-5xl">
                <div className="flex flex-col items-center lg:grid gap-4 text-dark-gray">
                    <div className={classNames(
                        "flex text-dark-blue-300 gap-4",
                        "[&>a>svg]:h-8 [&>a>svg]:w-8 lg:[&>a>svg]:h-6 lg:[&>a>svg]:w-6",
                        ""
                    )}>
                        <SocialIcons />
                    </div>
                    <div>
                        <span className="font-bold">Email:</span> mr.ali.serjik@gmail.com
                    </div>
                </div>
                <div className="flex justify-center lg:justify-end items-center">
                    <a href="/Ali's%20Resume.pdf">
                        <button className={classNames(
                            "border-2 uppercase rounded-full flex items-center gap-2 font-bold border-dark-blue-300 px-8 py-2 text-dark-blue-300",
                            "hover:bg-dark-blue-300 hover:text-white",
                            "text-xl lg:text-base"
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