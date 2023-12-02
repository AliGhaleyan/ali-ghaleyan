"use client"
import { Education } from "@/types";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

type Props = {
    education: Education
}

const EducationCard = ({ education }: Props) => {
    return <motion.div
        whileHover={{ scale: 1.025 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="flex flex-col gap-4 p-4 rounded-lg lg:rounded-3xl transition-shadow duration-300 shadow-light-blue-900 shadow-lg lg:shadow-md">
        <div className="flex gap-6 lg:gap-4">
            <div>
                <div className="p-4 rounded-lg bg-gray-200">
                    <FontAwesomeIcon icon={faGraduationCap} className="w-8 h-8 lg:w-4 lg:h-4" />
                </div>
            </div>
            <div className="grid gap-4 lg:gap-2">
                <div className="text-3xl lg:text-xl text-dark-blue font-bold">{education.schoolName}</div>
                <div className="text-xl lg:text-sm text-dark-blue-400">
                    {education.degree}, {education.fieldOfStudy}
                </div>
                <div className="text-xl lg:text-sm text-dark-blue-400">
                    {education.startYear} - {education.endYear}
                </div>
            </div>
        </div>
    </motion.div>;
};

export default EducationCard;