import { SiteModel } from "../models/site";

export interface LoadSearchSiteRepository {
    loadSearchSite: (text: string) => Promise<SiteModel[]>
}