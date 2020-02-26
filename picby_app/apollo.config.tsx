import {ApolloClient} from 'apollo-client';
import {InMemoryCache, NormalizedCacheObject} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://192.168.1.242:8090/graphql',
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link,
});

export default client;