"use client"
import { PropsWithChildren } from "react";
import classNames from "classnames";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = PropsWithChildren<{
    href: string
}>;

const NavItem = (props: Props) => {
    const pathName = usePathname();
    return <Link href={props.href}>
        <motion.div
            initial={{ scale: .9 }}
            whileHover={{ scale: 1.125 }}
            whileTap={{ scale: 0.8 }}
            className={classNames(
                "relative cursor-pointer text-primary font-semibold",
                "hover:font-bold",
                "after:absolute after:bottom-0 after:left-[15%] after:top-[1.75em] after:h-[2px] after:w-[70%] after:scale-x-0 after:bg-primary after:transition-all after:duration-300 after:ease-in-out after:content-['']",
                pathName == props.href ? "after:scale-x-110" : "after:hover:scale-x-110"
            )}>
            {props.children}
        </motion.div>
    </Link>;
};

export default NavItem;