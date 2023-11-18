"use client"
import { Navbar } from "./components/Navbar";
import { motion } from "framer-motion";

const BasePageLayout = (props: React.PropsWithChildren) => {

    return <motion.main initial={{ y: 0 }} className="pt-20 pb-10">
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="top-0 fixed w-full backdrop-blur-md bg-white/30 z-50">
            <Navbar />
        </motion.div>
        <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}>
            {props.children}
        </motion.div>
    </motion.main>;
};

export default BasePageLayout;