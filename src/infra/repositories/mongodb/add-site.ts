import { LoadAddSiteRepository } from "../../../datalayer/contracts/load-add-site";
import { SiteModel } from "../../../datalayer/models/site";

import pkg from 'mongoose';
const { connect } = pkg;
import { SiteSchema } from "./schemas/sites";
import { MONGODB_CONNECT } from "../../../domain/credentials/env";

export class MongoDBAddSiteRepository implements LoadAddSiteRepository {
    async loadAddSite (url: string, title: string, description: string): Promise<SiteModel> {

        const db = await connect(MONGODB_CONNECT);
        const newSite = await new SiteSchema({ 
            url: url,
            title: title,
            description: description,
            score: 0,
            createdAt: new Date(),
            updatedAt: new Date()
         }).save();
        db.disconnect()
        return newSite
    }
}