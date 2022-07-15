import { gql } from "@apollo/client";

export const SELECTED_CURRENCY = gql`
  query selectedCurrency {
    selectedCurrency {
      symbol
      label
    }
  }
`;
