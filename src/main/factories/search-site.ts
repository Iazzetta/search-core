import { SearchSiteLoaderService } from "../../datalayer/services/search-site-loader";
import { FakeSearchSiteRepository } from "../../infra/repositories/fake-search-site";
import { Controller } from "../../presentation/contracts/controller";
import { LoadSearchSiteController } from "../../presentation/controllers/load-search-site";

export const makeLoadSearchSiteController = (): Controller => {
    const repo = new FakeSearchSiteRepository()
    const loader = new SearchSiteLoaderService(repo)
    return new LoadSearchSiteController(loader)
}