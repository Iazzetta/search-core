import { AddSiteLoaderService } from "../../../datalayer/services/add-site-loader";
import { FakeAddSiteRepository } from "../../../infra/repositories/fakedb/fake-add-site";
import { AddController } from "../../../presentation/contracts/controller";
import { LoadAddSiteController } from "../../../presentation/controllers/load-add-site";

export const makeLoadAddSiteController = (): AddController => {
    const repo = new FakeAddSiteRepository()
    const loader = new AddSiteLoaderService(repo)
    return new LoadAddSiteController(loader)
}