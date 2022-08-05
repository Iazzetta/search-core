import { SiteModel } from "../../datalayer/models/site";

export type SiteViewModel = {
    url: string
    title: string
    description: string
    score: number
    createdAt: Date
    updatedAt: Date
}