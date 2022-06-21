import { gql } from "@apollo/client";

export const GET_KIND_OF_CURRENCIES = gql`
  query GetKindOfCurrencies {
    currencies {
      label
      symbol
    }
  }
`;
