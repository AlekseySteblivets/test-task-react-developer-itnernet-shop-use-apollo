import { Component } from "react";

import cn from "classnames";

import styles from "./CartItemAmount.module.scss";

export default class CartItemAmount extends Component {
  state = {
    amount: 0,
  };

  handleIncrement = () => {
    this.setState((prevState) => ({ amount: prevState.amount + 1 }));
    this.props.counterProducts(1);
  };

  handleDecrement = () => {
    if (this.state.amount === 0) {
      this.setState({ amount: 0 });
      this.props.counterProducts(0);
    } else {
      this.setState((prevState) => ({ amount: prevState.amount - 1 }));
      this.props.counterProducts(-1);
    }
  };

  render() {
    const visibleFullScreen = this.props.visibleFullScreen;
    return (
      <div
        className={cn(styles.menuAmount, {
          [styles.menuAmountFullScreen]: visibleFullScreen,
        })}
      >
        <button
          className={cn(styles.buttonAmount, styles.increment, {
            [styles.incrementFullScreen]: visibleFullScreen,
            [styles.buttonAmountFullScreen]: visibleFullScreen,
          })}
          onClick={this.handleIncrement}
        ></button>
        <p className={styles.textAmount}>{this.state.amount}</p>
        <button
          className={cn(styles.buttonAmount, {
            [styles.buttonAmountFullScreen]: visibleFullScreen,
          })}
          onClick={this.handleDecrement}
        ></button>
      </div>
    );
  }
}
