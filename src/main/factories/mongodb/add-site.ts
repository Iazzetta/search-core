import { AddSiteLoaderService } from "../../../datalayer/services/add-site-loader";
import { MongoDBAddSiteRepository } from "../../../infra/repositories/mongodb/add-site";
import { AddController } from "../../../presentation/contracts/controller";
import { LoadAddSiteController } from "../../../presentation/controllers/load-add-site";

export const makeLoadAddSiteControllerMongoDB = (): AddController => {
    const repo = new MongoDBAddSiteRepository()
    const loader = new AddSiteLoaderService(repo)
    return new LoadAddSiteController(loader)
}