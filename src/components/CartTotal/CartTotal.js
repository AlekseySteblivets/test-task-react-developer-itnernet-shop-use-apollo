import { Component } from "react";

import styles from "./CartTotal.module.scss";

export default class CartTotal extends Component {
  render() {
    if (!this.props.visibleFullScreen) {
      return (
        <div className={styles.blockTotal}>
          <p>
            <span className={styles.textBlockTotal}>Total:</span>
            <span className={styles.priceBlockTotal}>$200.00</span>
          </p>
        </div>
      );
    }
    return (
      <div className={styles.blockTotalFullScreen}>
        <p className={styles.text}>
          <span className={styles.totalText}>Tax 21%: </span>
          <span className={styles.totalNumbers}> $42.00</span>
        </p>
        <p className={styles.text}>
          <span className={styles.totalText}>Quantity:</span>
          <span className={styles.totalNumbers}> 3</span>
        </p>

        <p>
          <span className={styles.textBlockTotalFullScreen}>Total: </span>
          <span className={styles.priceBlockTotalFullScreen}> $200.00</span>
        </p>
      </div>
    );
  }
}
