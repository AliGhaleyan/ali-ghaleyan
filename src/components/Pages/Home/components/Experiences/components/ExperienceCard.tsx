"use client"
import { Experience } from "@/types";
import classNames from "classnames";
import { format } from "date-fns";
import { motion } from "framer-motion";

type Props = {
    experience: Experience
}

const ExperienceCard = ({ experience }: Props) => {
    return <motion.div
        whileHover={{ scale: 1.025 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="flex flex-col gap-4 p-4 rounded-lg hover:shadow-md border">
        <div>
            <div className="grid gap-2">
                <div>
                    <div className="text-xl text-dark-blue font-bold">{experience.company.name}</div>
                    <div className="text-sm text-dark-blue-400">{experience.position}</div>
                </div>
                <div className="text-dark-gray text-xs">
                    {format(experience.startedAt, "MMM yyy")}
                    {experience.endAt ? <>
                        - {format(experience.endAt, "MMM yyy")}
                    </> : "Present"}
                </div>
                <div className="text-xs flex gap-4">
                    <span className="font-semibold">Skills:</span>
                    <div>{experience.skills.join(", ")}</div>
                </div>
                {experience.description && <p className="text-dark-gray text-xs text-justify">{experience.description}</p>}
            </div>
        </div>
        <div className={classNames(
            "flex justify-end items-center mt-auto text-xs",
            experience.link ? "text-primary hover:underline" : "text-dark-gray-700"
        )}>
            <a href={experience.link} target="_blank">
                Visit Website
            </a>
        </div>
    </motion.div>;
};

export default ExperienceCard;