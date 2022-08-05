import { AddSiteLoader } from "../../domain/usecases/add-site";
import { AddController } from "../contracts/controller";
import { HttpResponse } from "../contracts/http";
import { SiteViewModel } from "../view-models/site";

export class LoadAddSiteController implements AddController {
    constructor(private readonly addSiteLoader: AddSiteLoader) {}

    async handle(url: string, title: string, description: string): Promise<HttpResponse<SiteViewModel>> {
        try {
            const site = await this.addSiteLoader.load(url, title, description)
            return {
                statusCode: 200,
                data: {
                    url: site.url,
                    title: site.title,
                    description: site.description,
                    score: site.score,
                    createdAt: new Date(site.createdAt),
                    updatedAt: new Date(site.updatedAt),
                }
            }
        } catch (error: any) {
            return {
                statusCode: 500,
                data: error
            }
        }
    }
}