import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

// client.writeQuery({
//   query: gql`
//     query Cart {
//       test {
//         id
//         text
//         completed
//       }
//     }
//   `,
//   data: {
//     test: {
//       __typename: "test",
//       id: 5,
//       text: "Buy grapes 🍇",
//       completed: false,
//     },
//   },
// });
