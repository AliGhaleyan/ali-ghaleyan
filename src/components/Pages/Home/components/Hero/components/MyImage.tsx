"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const MyImage = () => {
    return <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative overflow-hidden bg-gradient-to-r from-primary to-accent w-96 h-96"
        style={{
            borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%"
        }}>
        <Image src="/images/ali-ghaleyan.png" alt="Ali Ghaleyan" layout="fill" />
    </motion.div>;
};

export default MyImage;