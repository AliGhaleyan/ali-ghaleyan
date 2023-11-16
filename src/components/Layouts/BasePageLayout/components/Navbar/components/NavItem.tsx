import { PropsWithChildren } from "react";
import classNames from "classnames";
import { motion } from "framer-motion";

const NavItem = (props: PropsWithChildren) => {
    return <motion.div
        initial={{ scale: .9 }}
        whileHover={{ scale: 1.125 }}
        whileTap={{ scale: 0.8 }}
        className={classNames(
            "relative cursor-pointer text-primary font-semibold",
            "hover:font-bold",
            "after:absolute after:bottom-0 after:left-[15%] after:top-[1.75em] after:h-[2px] after:w-[70%] after:scale-x-0 after:bg-primary after:transition-all after:duration-300 after:ease-in-out after:content-[''] after:hover:scale-x-110"
        )}>
        {props.children}
    </motion.div>;
};

export default NavItem;