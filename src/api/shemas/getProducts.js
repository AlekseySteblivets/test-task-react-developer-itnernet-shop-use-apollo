import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query GetProducts {
    categories {
      name
      products {
        category
        name
        id
        brand
        prices {
          amount
          currency {
            label
            symbol
          }
        }
        gallery
      }
    }
  }
`;
