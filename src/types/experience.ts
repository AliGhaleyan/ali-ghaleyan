import { Company } from "./company";

export type Experience = {
    company: Company
    position: string,
    skills: string[],
    startedAt: Date,
    link?: string,
    endAt?: Date
    description?: string,
};