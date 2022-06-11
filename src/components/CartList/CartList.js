import { Component } from "react";

import cn from "classnames";

import CartItem from "../CartItem/CartItem";
import CartTotal from "../CartTotal";

import styles from "./CartList.module.scss";

export default class CartList extends Component {
  state = {
    numbersProduct: 0,
  };

  counterProducts = (amount) => {
    this.setState((prevState) => ({
      numbersProduct: this.state.numbersProduct + amount,
    }));
  };

  render() {
    return (
      <div>
        <div className={styles.badge}>{this.state.numbersProduct}</div>
        <ul
          className={cn({
            [styles.menu]: true,
            [styles.menuFullScreen]: this.props.visibleFullScreen,
          })}
        >
          <CartItem
            counterProducts={this.counterProducts}
            visibleFullScreen={this.props.visibleFullScreen}
          />
          <CartItem
            counterProducts={this.counterProducts}
            visibleFullScreen={this.props.visibleFullScreen}
          />
        </ul>
        <CartTotal visibleFullScreen={this.props.visibleFullScreen} />
      </div>
    );
  }
}
