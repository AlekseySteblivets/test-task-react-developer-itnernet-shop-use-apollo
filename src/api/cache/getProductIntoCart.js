import { gql } from "@apollo/client";
import { client } from "../../api/base/apolloClient";

export const READ_GET_PRODUCT_INTO_CART = gql`
  query Cart {
    productIntoCart {
      id
      atributes
    }
  }
`;

//  query: gql`
//         query Cart {
//           productIntoCart {
//             id
//             atributes
//           }
//         }
//       `,

// client.readQuery({
//   query: READ_GET_PRODUCT_INTO_CART,
//   // variables: {
//   //   // Provide any required variables here.  Variables of mismatched types will return `null`.
//   //   id: 5,
//   // },
// });
