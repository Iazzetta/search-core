import { Site } from "../entities/site";

export interface AddSiteLoader {
    load: (url: string, title: string, description: string) => Promise<Site>
}