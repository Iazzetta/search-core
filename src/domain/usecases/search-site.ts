import { Site } from "../entities/site";

export interface SearchSiteLoader {
    load: (text: string) => Promise<Site[]>
}