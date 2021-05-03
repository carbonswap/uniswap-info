import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://ewc-subgraph-production.carbonswap.exchange/subgraphs/name/carbonswap/uniswapv2',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})


export const healthClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://ewc-graphql-production.carbonswap.exchange/graphql',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

/*
export const stakingClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://ewc-subgraph-production.carbonswap.exchange/subgraphs/name/way2rach/talisman',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})
*/

export const blockClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://ewc-subgraph-production.carbonswap.exchange/subgraphs/name/blocklytics/ewc-blocks',
  }),
  cache: new InMemoryCache(),
})
