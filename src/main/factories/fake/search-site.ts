import { SearchSiteLoaderService } from "../../../datalayer/services/search-site-loader"
import { FakeSearchSiteRepository } from "../../../infra/repositories/fakedb/fake-search-site"
import { SearchController } from "../../../presentation/contracts/controller"
import { LoadSearchSiteController } from "../../../presentation/controllers/load-search-site"

export const makeLoadSearchSiteController = (): SearchController => {
    const repo = new FakeSearchSiteRepository()
    const loader = new SearchSiteLoaderService(repo)
    return new LoadSearchSiteController(loader)
}