import { gql } from "@apollo/client";

export const GET_PRODUCTS_BY_NAME = gql`
  query GetProductsByName($type: String!) {
    category(input: { title: $type }) {
      products {
        name
        id
        name
        inStock
        gallery
        category
        prices {
          currency {
            label
            symbol
          }
          amount
        }
        brand
      }
    }
  }
`;
