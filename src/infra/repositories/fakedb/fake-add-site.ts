import { LoadAddSiteRepository } from "../../../datalayer/contracts/load-add-site";
import { SiteModel } from "../../../datalayer/models/site";
import { fakeSites } from "../../data-sources/sites";

export class FakeAddSiteRepository implements LoadAddSiteRepository {
    async loadAddSite (url: string, title: string, description: string): Promise<SiteModel> {
        const newSite:SiteModel = {
            url: url,
            title: title,
            description: description,
            score: 0,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        fakeSites.push(newSite)
        return newSite
    }
}