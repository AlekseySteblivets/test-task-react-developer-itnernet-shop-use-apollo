import { gql } from "@apollo/client";

export const GET_ONE_PRODUCT_BY_ID = gql`
  query GetOneProductById {
    category(input: { title: "tech" }) {
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
