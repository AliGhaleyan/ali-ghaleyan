"use client"
import classNames from "classnames";
import ReactTyped from "react-typed";

const AboutMe = () => {
    const description = [
        "Hello, I'm Ali Ghaleyan, a frontend developer with 3 years of experience in ReactJs and NextJs.",
        "I'm passionate about turning ideas into interactive and visually appealing experiences.",
        "In the ever-changing tech world, I thrive on learning and adapting, using each project to expand my skill set and explore innovative solutions.",
        "I'm always excited to delve into new technologies and best practices.",
    ];
    const descriptionClassName = "text-2xl font-light text-center text-white/80";

    return <div className="max-w-lg w-[32rem] flex flex-col gap-12 justify-center text-center">
        <h1 className="text-6xl text- font-extrabold text-white">
            Ali Ghaleyan
        </h1>
        <div className="relative">
            <p className={classNames(
                "absolute top-0 w-full",
                descriptionClassName
            )}>
                <ReactTyped
                    strings={description}
                    typeSpeed={40}
                    backSpeed={15}
                    backDelay={3000}
                    startDelay={1000}
                    loop
                />
            </p>
            <p className={classNames(
                "invisible",
                descriptionClassName
            )}>
                {description[2]}
            </p>
        </div>
        <div className="flex justify-center items-center [&>svg]:h-8 gap-4 font-extralight">
            {/* <span className="font-semibold">Email:</span>
            <span>mr.ali.serjik@gmail.com</span> */}
            {/* <FontAwesomeIcon icon={faEnvelope} />
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faLinkedin} /> */}
        </div>
    </div>;
};

export default AboutMe;