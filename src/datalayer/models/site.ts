import { Site } from "../../domain/entities/site";

export type SiteModel = {
    url: string
    title: string
    description: string
    score: number
    createdAt: string
    updatedAt: string
}