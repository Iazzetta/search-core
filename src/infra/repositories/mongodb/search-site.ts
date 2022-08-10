import { LoadSearchSiteRepository } from "../../../datalayer/contracts/load-search-site";
import { SiteModel } from "../../../datalayer/models/site";

import pkg from 'mongoose';
const { connect } = pkg;
import { SiteSchema } from "./schemas/sites";
import { MONGODB_CONNECT } from "../../../domain/credentials/env";

export class MongoDBSearchSiteRepository implements LoadSearchSiteRepository {
    async loadSearchSite (text: any): Promise<SiteModel[]> {
        const db = await connect(MONGODB_CONNECT);
        let sites:SiteModel[] = [];
        if ( text.length > 0 ) {
            sites = await SiteSchema.find({ 
                "title": { 
                    "$regex": text, 
                    "$options": "i" 
                } 
            }).exec()
        } else {
            sites = await SiteSchema.find().exec()
        }
        db.disconnect()
        return sites;
    }
}