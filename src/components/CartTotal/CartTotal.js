import { Component } from "react";

import { graphql } from "@apollo/client/react/hoc";
import { client } from "../../api/base/apolloClient";
import { SELECTED_CURRENCY } from "../../api/cache/selectedCurrency";
import { READ_GET_PRODUCT_INTO_CART } from "../../api/cache/getProductIntoCart";

import styles from "./CartTotal.module.scss";

class CartTotal extends Component {
  totalSumProducts = (productIntoCart) => {
    let summ = 0;
    for (let i = 0; i < productIntoCart.length; i++) {
      summ = summ + productIntoCart[i].sumProduct;
    }
    //  return +summ.toFixed(2);
    return summ;
  };

  queryCurrency = () => {
    const data = client.readQuery({
      query: SELECTED_CURRENCY,
    });
    return data.selectedCurrency.symbol;
  };

  queryQuantity = () => {
    const data = client.readQuery({
      query: READ_GET_PRODUCT_INTO_CART,
    });
    let summ = 0;
    for (let i = 0; i < data.productIntoCart.length; i++) {
      summ = summ + data.productIntoCart[i].numbersItem;
    }
    return summ;
  };

  render() {
    const { productIntoCart } = this.props.data;
    if (!this.props.visibleFullScreen) {
      return (
        <div>
          <p className={styles.blockTotal}>
            <span className={styles.textBlockTotal}>Total:</span>
            <span
              className={styles.priceBlockTotal}
            >{`${this.queryCurrency()}${this.totalSumProducts(
              productIntoCart
            )}`}</span>
          </p>
        </div>
      );
    }
    return (
      <div className={styles.blockTotalFullScreen}>
        <p className={styles.text}>
          <span className={styles.totalText}>Tax 21%: </span>
          <span className={styles.totalNumbers}>
            {`${this.queryCurrency()}${
              this.totalSumProducts(productIntoCart) * 0.21
            }`}
          </span>
        </p>
        <p className={styles.text}>
          <span className={styles.totalText}>Quantity:</span>
          <span className={styles.totalNumbers}> {this.queryQuantity()}</span>
        </p>

        <p>
          <span className={styles.textBlockTotalFullScreen}>Total: </span>
          <span className={styles.priceBlockTotalFullScreen}>
            {`${this.queryCurrency()}${this.totalSumProducts(productIntoCart)}`}
          </span>
        </p>
      </div>
    );
  }
}

export default graphql(READ_GET_PRODUCT_INTO_CART, {
  options: () => ({
    fetchPolicy: "cache-only",
  }),
})(CartTotal);
