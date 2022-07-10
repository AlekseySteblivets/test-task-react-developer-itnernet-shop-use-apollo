import { gql } from "@apollo/client";
// import { client } from "../../api/base/apolloClient";

export const SELECTED_CURRENCY = gql`
  query selectedCurrency {
    selectedCurrency {
      symbol
      label
    }
  }
`;
