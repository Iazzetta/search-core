import { HttpResponse } from "./http";

export interface SearchController {
    handle: (text: string) => Promise<HttpResponse>
}
export interface AddController {
    handle: (url: string, title: string, description: string) => Promise<HttpResponse>
}