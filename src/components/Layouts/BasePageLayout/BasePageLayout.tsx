"use client"
import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { motion } from "framer-motion";

const BasePageLayout = (props: React.PropsWithChildren) => {

    return <motion.main initial={{ y: 0 }} className="pb-10">
        <div className="absolute top-0 w-full bg-transparent z-50">
            <Navbar />
        </div>
        {props.children}
        <Footer />
    </motion.main>;
};

export default BasePageLayout;