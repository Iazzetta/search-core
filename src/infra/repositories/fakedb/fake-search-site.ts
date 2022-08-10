
import { LoadSearchSiteRepository } from "../../../datalayer/contracts/load-search-site";
import { SiteModel } from "../../../datalayer/models/site";
import { fakeSites } from "../../data-sources/sites";

export class FakeSearchSiteRepository implements LoadSearchSiteRepository {
    async loadSearchSite (text: any): Promise<SiteModel[]> {
        if (text.length > 0) {
            return fakeSites.filter(item => 
                item.title.toLowerCase().includes(text.toLowerCase())
            )
        }
        return fakeSites.map(item => ({
            url: item.url,
            title: item.title,
            description: item.description,
            score: item.score,
            createdAt: item.createdAt,
            updatedAt: item.updatedAt
        }))
    }
}