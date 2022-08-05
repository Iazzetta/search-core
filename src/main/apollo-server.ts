import { ApolloServer, gql } from 'apollo-server-express'
import { makeLoadSearchSiteController } from './factories/search-site';

const typeDefs = gql`
    type Query {
        sites: [ Site! ]
    }
    type Site {
        url: String
        title: String
        description: String
        score: Int
        createdAt: String
        updatedAt: String
    }
`;

const resolvers = { 
    Query: {
        async sites (): Promise<any> {
            const controller = makeLoadSearchSiteController()
            const httpResponse = await controller.handle('')
            return httpResponse.data
        }
    }
};

export const apolloServer = async (app: any) => {
    const server = new ApolloServer({
        resolvers,
        typeDefs
    })
    await server.start()
    server.applyMiddleware({ app })
}