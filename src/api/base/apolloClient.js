import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { READ_GET_PRODUCT_INTO_CART } from "../cache/getProductIntoCart";

export const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

client.writeQuery({
  query: READ_GET_PRODUCT_INTO_CART,
  data: {
    productIntoCart: [],
  },
  // variables: {
  //   currencySymbol: "$",
  // },
});

// query Cart($currencySymbol: String!) {
//       productIntoCart(currencySymbol: $currencySymbol) {
