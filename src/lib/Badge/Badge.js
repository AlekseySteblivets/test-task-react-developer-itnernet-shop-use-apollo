import { Component } from "react";

import styles from "./Badge.module.scss";

export default class Badge extends Component {
  itemsProduct = (productIntoCart) => {
    let summ = 0;
    for (let i = 0; i < productIntoCart.length; i++) {
      summ = summ + productIntoCart[i].numbersItem;
    }
    return summ;
  };

  render() {
    return (
      <>
        {this.props.productIntoCart.length > 0 && (
          <div className={styles.badge}>
            {this.itemsProduct(this.props.productIntoCart)}
          </div>
        )}
      </>
    );
  }
}
