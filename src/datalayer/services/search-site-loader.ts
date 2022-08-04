import { Site } from "../../domain/entities/site";
// import { MandatoryFieldError } from "../../domain/errors/mandatory-field";
import { SearchSiteLoader } from "../../domain/usecases/search-site";
import { LoadSearchSiteRepository } from "../contracts/load-search-site";

export class SearchSiteLoaderService implements SearchSiteLoader {
    constructor(private readonly loadSearchSiteRepository: LoadSearchSiteRepository) {}
    
    async load(text: string): Promise<Site[]> {
        // if (!text) {
        //     throw new MandatoryFieldError()
        // }
        return this.loadSearchSiteRepository.loadSearchSite(text)
    }
}