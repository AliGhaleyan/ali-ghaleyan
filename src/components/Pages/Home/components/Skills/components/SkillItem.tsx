"use client"
import { Skill } from "@/types";
import { motion } from "framer-motion";

const SkillItem = (props: Skill) => {
    return <motion.div
        whileHover={{ scale: 1.125 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="grid gap-4 text-center font-bold cursor-pointer">
        {props.icon}
        <div>{props.name}</div>
    </motion.div>;
};

export default SkillItem;