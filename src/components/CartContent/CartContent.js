import { Component } from "react";

import CartList from "../CartList/CartList";

import styles from "./CartContent.module.scss";

export default class CartContent extends Component {
  itemsProduct = (productIntoCart) => {
    let summ = 0;
    for (let i = 0; i < productIntoCart.length; i++) {
      summ = summ + productIntoCart[i].numbersItem;
    }
    return summ;
  };

  modalAmountImems = (amount) => {
    this.setState({ items: amount });
  };

  render() {
    return (
      <>
        <h1 className={styles.title}>
          {!this.props.visibleFullScreen ? (
            <>
              <span className={styles.modalTitle}>My Bag</span>

              <span className={styles.modalAmountImems}>
                , {this.itemsProduct(this.props.productIntoCart)}items
              </span>
            </>
          ) : (
            <span className={styles.titleBigModal}> cart</span>
          )}
        </h1>
        <CartList
          visibleFullScreen={this.props.visibleFullScreen}
        />
      </>
    );
  }
}
