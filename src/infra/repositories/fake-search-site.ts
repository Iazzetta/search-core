import { LoadSearchSiteRepository } from "../../datalayer/contracts/load-search-site";
import { SiteModel } from "../../datalayer/models/site";
import { fakeSites } from "../data-sources/sites";

export class FakeSearchSiteRepository implements LoadSearchSiteRepository {
    async loadSearchSite (text: any): Promise<SiteModel[]> {
        return fakeSites.map(item => ({
            url: item.url,
            title: item.title,
            description: item.description,
            score: item.score,
            updatedAt: new Date(item.updatedAt)
        }))
    }
}