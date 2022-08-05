import { Site } from "../../domain/entities/site";
// import { MandatoryFieldError } from "../../domain/errors/mandatory-field";
import { AddSiteLoader } from "../../domain/usecases/add-site";
import { LoadAddSiteRepository } from "../contracts/load-add-site";

export class AddSiteLoaderService implements AddSiteLoader {
    constructor(private readonly loadSearchSiteRepository: LoadAddSiteRepository) {}
    
    async load(url: string, title: string, description: string): Promise<Site> {
        return this.loadSearchSiteRepository.loadAddSite(url, title, description)
    }
}