import {ApolloClient, HttpLink, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://fakerql.goosfraba.ro/graphql',
    cache: new InMemoryCache(),
})

export default client
