"use client"
import { Experience } from "@/types";
import classNames from "classnames";
import { format } from "date-fns";
import { motion } from "framer-motion";
import ExperienceDates from "./ExperienceDates";

type Props = {
    experience: Experience
}

const ExperienceCard = ({ experience }: Props) => {
    return <motion.div
        whileHover={{ scale: 1.025 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="flex flex-col gap-4 px-6 py-8 lg:p-4 lg:rounded-3xl transition-shadow duration-300 md:drop-shadow-sm shadow-light-blue-900 md:shadow-sm lg:backdrop-blur-sm lg:bg-white/30">
        <div className="flex gap-4">
            <div className="hidden lg:block">
                <ExperienceDates {...experience} />
            </div>
            <div className="grid gap-4 lg:gap-2">
                <div className="grid gap-1 lg:gap-0">
                    <div className="text-3xl lg:text-xl text-dark-blue font-bold">{experience.company.name}</div>
                    <div className="text-2xl lg:text-sm text-dark-blue-400">{experience.position}</div>
                </div>
                <div className="text-lg lg:text-xs flex gap-4">
                    <span className="font-semibold">Skills:</span>
                    <div>{experience.skills.join(", ")}</div>
                </div>
                <div className="lg:hidden">
                    <ExperienceDates {...experience} />
                </div>
                {experience.description && <p className="text-dark-gray text-xl lg:text-xs lg:text-justify">{experience.description}</p>}
            </div>
        </div>
        <div className={classNames(
            "flex justify-end items-center mt-auto text-base lg:text-xs",
            experience.link ? "text-primary hover:underline" : "text-dark-gray-700"
        )}>
            <a href={experience.link} target="_blank">
                Visit Website
            </a>
        </div>
    </motion.div>;
};

export default ExperienceCard;