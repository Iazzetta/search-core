import pkg from 'mongoose';
const { Schema, model } = pkg;
import { SiteModel } from '../../../../datalayer/models/site';

const siteSchema = new Schema<SiteModel>({
    url: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    score: { type: Number, required: true, default: 0 },
    createdAt: { type: Date, required: true, default: Date.now() },
    updatedAt: { type: Date, required: true, default: Date.now() }
});

export const SiteSchema = model<SiteModel>('Site', siteSchema);