import { gql } from "@apollo/client";

export const READ_GET_PRODUCT_INTO_CART = gql`
  query Cart {
    productIntoCart {
      id
      atributes
      numbersItem
      sumProduct
    }
  }
`;
