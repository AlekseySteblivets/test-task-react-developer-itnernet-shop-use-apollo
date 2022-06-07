import { Component } from "react";

import cn from "classnames";

import styles from "./CartItemAmount.module.scss";

export default class CartItemAmount extends Component {
  render() {
    return (
      <div
        className={cn({
          [styles.menuAmount]: !this.props.visibleFullScreen,
          [styles.menuAmountFullScreen]: this.props.visibleFullScreen,
        })}
      >
        <button
          className={cn({
            [styles.buttonAmount]: !this.props.visibleFullScreen,
            [styles.buttonAmountFullScreen]: this.props.visibleFullScreen,
          })}
        ></button>
        <p className={styles.textAmount}>1</p>
        <button
          className={cn({
            [styles.buttonAmount]: !this.props.visibleFullScreen,
            [styles.buttonAmountFullScreen]: this.props.visibleFullScreen,
          })}
        ></button>
      </div>
    );
  }
}
