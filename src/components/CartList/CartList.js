import { Component } from "react";

import cn from "classnames";

import CartItem from "../CartItem/CartItem";
import CartTotal from "../CartTotal";

import styles from "./CartList.module.scss";

export default class CartList extends Component {
  render() {
    return (
      <div>
        <ul
          className={cn({
            [styles.menu]: true,
            [styles.menuFullScreen]: this.props.visibleFullScreen,
          })}
        >
          <CartItem visibleFullScreen={this.props.visibleFullScreen} />
          <CartItem visibleFullScreen={this.props.visibleFullScreen} />
        </ul>
        <CartTotal visibleFullScreen={this.props.visibleFullScreen} />
      </div>
    );
  }
}
