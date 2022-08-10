import * as dotenv from 'dotenv'
dotenv.config()

export const MONGODB_CONNECT:string = process.env.MONGODB_CONNECT || ''