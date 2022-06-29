import { gql } from "@apollo/client";
import { client } from "./apolloClient";

export const cart = client.writeQuery({
  query: gql`
    query Cart {
      test {
        id
      }
    }
  `,
  data: {
    test: {
      __typename: "test",
      id: 5,
    },
  },
});

// client.writeQuery({
//   query: gql`
//     query WriteTodo($id: Int!) {
//       todo(id: $id) {
//         id
//         text
//         completed
//       }
//     }
//   `,
//   data: {
//     // Contains the data to write
//     todo: {
//       __typename: "Todo",
//       id: 5,
//       text: "Buy grapes 🍇",
//       completed: false,
//     },
//   },
//   variables: {
//     id: 5,
//   },
// });
