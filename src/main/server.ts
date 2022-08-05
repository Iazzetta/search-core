import express from 'express'
import { env } from './config/env'
import { makeLoadAddSiteController } from './factories/add-site';
import { makeLoadSearchSiteController } from './factories/search-site';

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


/* Add new site */
app.post('/add', async (req, res) => {
    const url = req.body.url;
    const title = req.body.title;
    const description = req.body.description;
    const controller = makeLoadAddSiteController()
    const httpResponse = await controller.handle(url, title, description)
    res.status(httpResponse.statusCode).json(httpResponse.data)
});

/* Search for sites */
app.get('/search', async (req, res) => {
    const search_text = req.query.q?.toString() || '';
    const controller = makeLoadSearchSiteController()
    const httpResponse = await controller.handle(search_text)
    res.status(httpResponse.statusCode).json(httpResponse.data)
});
  

app.listen(env.port, () => console.log(`Server running at .:${env.port}`))