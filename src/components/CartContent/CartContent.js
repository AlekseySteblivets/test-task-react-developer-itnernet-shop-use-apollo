import { Component } from "react";

import CartItem from "../CartItem/CartItem";

import styles from "./CartContent.module.scss";

export default class CartContent extends Component {
  render() {
    return (
      <>
        <h1 className={styles.title}>
          {!this.props.visibleFullScreen ? (
            <>
              <span className={styles.modalTitle}>My Bag</span>

              <span className={styles.modalAmountImems}>, 3 items</span>
            </>
          ) : (
            <span className={styles.titleBigModal}> cart</span>
          )}
        </h1>
        <CartItem />
      </>
    );
  }
}
