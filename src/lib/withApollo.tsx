import { ApolloClient, ApolloProvider, createHttpLink, from, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { NextPage } from 'next';

// HOC -  High Order Component
export const withApollo = (Component: NextPage) => {
  return function Provider(props: any) {
    return (
      <ApolloProvider client={getApolloClient(props.apolloState)}>
        <Component {...props} />
      </ApolloProvider>
    )
  }
}

function getApolloClient(ssrCache?: NormalizedCacheObject) {
  const httpLink = createHttpLink({
    uri: 'http://localhost:3332/graphql',
    fetch
  });
  
  const cache = new InMemoryCache().restore(ssrCache ?? {})
  
  return new ApolloClient({
    link: from([httpLink]),
    cache
  })
}


