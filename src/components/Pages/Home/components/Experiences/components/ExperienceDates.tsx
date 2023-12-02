import { Experience } from "@/types";
import { format } from "date-fns";

const ExperienceDates = (experience: Experience) => {
    return <div className="flex gap-2 lg:gap-0 lg:min-w-[5rem] text-center pt-2 lg:flex-col text-dark-gray text-lg lg:text-sm font-bold">
        <span>{format(experience.startedAt, "MMM yyy")}</span>
        <span className="lg:hidden">-</span>
        <span>{experience.endAt ? <>
            {format(experience.endAt, "MMM yyy")}
        </> : "Present"}</span>
    </div>;
};

export default ExperienceDates;