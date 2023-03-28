export type JobType = "PART-TIME" | "FULL-TIME" | "CONTRACT" | undefined | null;
export type WorkType = "ON-SITE" | "REMOTE" | "IN-OFFICE" | "HYBRID" | undefined | null;
export type ApplyType = "QUICK-APPLY" | "EXTERNAL-APPLY";

export interface IJob {
    title: string,
    companyName: string,
    industry: string,
    location? : string,
    jobType? : JobType,
    workType?: WorkType,
    experience? :{
        min: number,
        max: number
    },
    salary? :{
        min: number,
        max: number
    },
    totalEmployee? : string,
    applyType: ApplyType
}