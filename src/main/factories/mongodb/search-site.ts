import { SearchSiteLoaderService } from "../../../datalayer/services/search-site-loader"
import { MongoDBSearchSiteRepository } from "../../../infra/repositories/mongodb/search-site"
import { SearchController } from "../../../presentation/contracts/controller"
import { LoadSearchSiteController } from "../../../presentation/controllers/load-search-site"

export const makeLoadSearchSiteControllerMongoDB = (): SearchController => {
    const repo = new MongoDBSearchSiteRepository()
    const loader = new SearchSiteLoaderService(repo)
    return new LoadSearchSiteController(loader)
}