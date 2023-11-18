"use client"
import classNames from "classnames";
import { motion } from "framer-motion";
import { PropsWithChildren, useCallback, useEffect, useMemo, useState } from "react";

type Props = PropsWithChildren<{
    sectionId: string,
    isActive: boolean
}>;

const NavItem = (props: Props) => {
    const [element, setElement] = useState<HTMLElement | null>();

    const handleOnClick = () => {
        if (!element) return;
        window.scrollTo({ behavior: "smooth", top: element.offsetTop - 120 });
    };

    useEffect(() => {
        if (element) return;

        setElement(document.getElementById(props.sectionId));
    }, [props.sectionId, element]);

    return <motion.div
        initial={{ scale: .9 }}
        whileHover={{ scale: 1.125 }}
        whileTap={{ scale: 0.8 }}
        onClick={handleOnClick}
        className={classNames(
            "relative cursor-pointer text-primary font-semibold",
            "hover:font-bold",
            "after:absolute after:bottom-0 after:left-[15%] after:top-[1.75em] after:h-[2px] after:w-[70%] after:scale-x-0 after:bg-primary after:transition-all after:duration-300 after:ease-in-out after:content-['']",
            props.isActive ? "after:scale-x-110" : "after:hover:scale-x-110"
        )}>
        {props.children}
    </motion.div>;
};

export default NavItem;