import { SiteModel } from "../models/site";

export interface LoadAddSiteRepository {
    loadAddSite: (url: string, title: string, description: string) => Promise<SiteModel>
}