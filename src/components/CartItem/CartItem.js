import { Component } from "react";

import cn from "classnames";

import CartItemDescription from "../CartItemDescription";
import CartItemAmount from "../CartItemAmount";
import CartItemImage from "../CartItemImage";

import styles from "./CartItem.module.scss";

export default class CartItem extends Component {
  render() {
    return (
      <li
        className={cn(styles.item, {
          [styles.itemFullScreen]: this.props.visibleFullScreen,
        })}
      >
        <CartItemDescription visibleFullScreen={this.props.visibleFullScreen} />
        <CartItemAmount
          counterProducts={this.props.counterProducts}
          visibleFullScreen={this.props.visibleFullScreen}
        />
        <CartItemImage visibleFullScreen={this.props.visibleFullScreen} />
      </li>
    );
  }
}
