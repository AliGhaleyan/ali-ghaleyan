"use client";
import classNames from "classnames";
import { HTMLMotionProps, motion } from "framer-motion";
import { PropsWithChildren, useEffect, useState } from "react";

type Props<Email extends string = string> = PropsWithChildren<
  {
    email?: Email;
    className?: string;
    onClick?: VoidFunction;
  } & (Email extends string
    ? { sectionId?: string; isActive?: boolean }
    : { sectionId: string; isActive: boolean })
>;

const NavItem = (props: Props) => {
  const [element, setElement] = useState<HTMLElement | null>();

  const handleOnClick = () => {
    if (!element) return;
    window.scrollTo({ behavior: "smooth", top: element.offsetTop - 120 });
    props?.onClick?.();
  };

  useEffect(() => {
    if (element || !props.sectionId) return;

    setElement(document.getElementById(props.sectionId));
  }, [props.sectionId, element]);

  const motionProps: HTMLMotionProps<"div" | "a"> = {
    initial: { scale: 0.9 },
    whileHover: { scale: 1.125 },
    whileTap: { scale: 0.8 },
    onClick: handleOnClick,
    className: classNames(
      "relative cursor-pointer font-semibold",
      "hover:font-bold",
      "after:absolute after:bottom-0 after:left-[15%] after:top-[1.75em] after:h-[2px] after:w-[70%] after:scale-x-0 after:bg-white after:transition-all after:duration-300 after:ease-in-out after:content-['']",
      props.isActive ? "after:scale-x-110" : "after:hover:scale-x-110",
      props?.className
    ),
    children: props.children,
  };

  if (props.email)
    return (
      <motion.a
        {...(motionProps as HTMLMotionProps<"a">)}
        href={`mailto:${props.email}`}
      />
    );

  return <motion.div {...(motionProps as HTMLMotionProps<"div">)} />;
};

export default NavItem;
