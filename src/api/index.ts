import {
  ApolloClient,
  InMemoryCache
} from "@apollo/client"
import { API_ENDPOINT } from "../constants/constants"

const client = new ApolloClient({
  uri: API_ENDPOINT,
  cache: new InMemoryCache(),
  ssrMode: typeof "window" === undefined,
})

export default client
