import { SearchSiteLoader } from "../../domain/usecases/search-site";
import { SearchController } from "../contracts/controller";
import { HttpResponse } from "../contracts/http";
import { SiteViewModel } from "../view-models/site";

export class LoadSearchSiteController implements SearchController {
    constructor(private readonly searchSiteLoader: SearchSiteLoader) {}

    async handle(text: string): Promise<HttpResponse<SiteViewModel[]>> {
        try {
            const sites = await this.searchSiteLoader.load(text)
            return {
                statusCode: 200,
                data: sites.map(item => ({
                    url: item.url,
                    title: item.title,
                    description: item.description,
                    score: item.score,
                    createdAt: new Date(item.createdAt),
                    updatedAt: new Date(item.updatedAt),
                }))
            }
        } catch (error: any) {
            return {
                statusCode: 500,
                data: error
            }
        }
    }
}