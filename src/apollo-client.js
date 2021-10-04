import {
    ApolloClient,
    InMemoryCache,
  } from "@apollo/client";
  
  const client = new ApolloClient({
    uri: 'https://reactjs-project.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers: {
        'x-hasura-admin-secret': 'yx5L8nl2AA5Vg5iGHXsA5UuPVzPrBPU8XmWurUc2UBTjUwR03oSLjKiodfpapiBL',
    }
  });
  
  export default client;