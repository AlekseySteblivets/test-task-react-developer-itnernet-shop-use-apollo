import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

client.writeQuery({
  query: gql`
    query Cart {
      productIntoCart {
        id
        atributes
      }
    }
  `,
  data: { productIntoCart: [] },
});
