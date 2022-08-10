/* Internal Imports */
import { env } from './config/env'

/* Third Party Imports */
import express from 'express'
import { apolloServer } from './apollo-server';
import { makeLoadAddSiteControllerMongoDB } from './factories/mongodb/add-site';
import { makeLoadSearchSiteControllerMongoDB } from './factories/mongodb/search-site';

/* Config Express */
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Add site
 * @constructor
 * @param {string} url - The url of the site.
 * @param {string} title - The title of the site.
 * @param {string} description - The description of the site.
 */
app.post('/add', async (req, res) => {
    const url = req.body.url;
    const title = req.body.title;
    const description = req.body.description;
    const controller = makeLoadAddSiteControllerMongoDB()
    const httpResponse = await controller.handle(url, title, description)
    res.status(httpResponse.statusCode).json(httpResponse.data)
});

/**
 * Search sites
 * @constructor
 * @param {string} q - The string text for search in sites
 */
app.get('/search', async (req, res) => {
    const search_text = req.query.q?.toString() || '';
    const controller = makeLoadSearchSiteControllerMongoDB()
    const httpResponse = await controller.handle(search_text)
    res.status(httpResponse.statusCode).json(httpResponse.data)
});

/* GraphQL */
apolloServer(app)
console.log(`GraphQL at http://localhost:${env.port}/graphql`)
app.listen(env.port, () => console.log(`Server running at http://localhost:${env.port}`))