import { SiteModel } from "../../datalayer/models/site";

export type SearchSiteViewModel = {
    url: string
    title: string
    description: string
    score: number
    updatedAt: Date
}