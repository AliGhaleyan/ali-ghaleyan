import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons/faTelegram";
import { motion } from "framer-motion";

const SocialIcons = () => {
    const motionProps = {
        whileHover: { scale: 1.125 },
        transition: { type: "spring", stiffness: 300 },
    };

    return <>
        <motion.a {...motionProps} href="https://github.com/AliGhaleyan" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
        </motion.a>
        <motion.a {...motionProps} href="https://www.linkedin.com/in/ali-ghaleyan-8014b0187/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
        </motion.a>
        <motion.a {...motionProps} href="https://t.me/Serjikaa" target="_blank">
            <FontAwesomeIcon icon={faTelegram} />
        </motion.a>
        <motion.a {...motionProps} href="mailto:mr.ali.serjik@gmail.com">
            <FontAwesomeIcon icon={faAt} />
        </motion.a>
    </>;
};

export default SocialIcons;