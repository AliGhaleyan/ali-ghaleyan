"use client"
import classNames from "classnames";
import { HTMLMotionProps, motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const MotionContainer = ({ className, children, ...props }: HTMLMotionProps<"div">) => {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref);

    const variants = {
        initial: { y: 30, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="initial"
            variants={variants}
            transition={{ delay: 0.9, duration: 0.5 }}
            className={classNames("container", className)}
            {...props}
        >{children}</motion.div>
    );
};

export default MotionContainer;