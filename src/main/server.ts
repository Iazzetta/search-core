import express from 'express'
import { env } from './config/env'
import { makeLoadSearchSiteController } from './factories/search-site';

const app = express()


/* Routes */
app.get('/search', async (req, res) => {
    const controller = makeLoadSearchSiteController()
    const httpResponse = await controller.handle('')
    res.status(httpResponse.statusCode).json(httpResponse.data)
});
  

app.listen(env.port, () => console.log(`Server running at .:${env.port}`))