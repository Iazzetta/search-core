import { HttpResponse } from "./http";

export interface Controller {
    handle: (text: string) => Promise<HttpResponse>
}