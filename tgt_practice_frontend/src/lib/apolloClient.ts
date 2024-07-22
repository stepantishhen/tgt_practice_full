import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Cookie from "js-cookie";

const httpLink = createHttpLink({
  uri: 'https://172.20.10.6/api/graphql/',
  credentials: 'include'
});

const csrfToken = Cookie.get("csrftoken")
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      'X-CSRFToken': csrfToken ? csrfToken : '',
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default client;
