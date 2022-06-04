import { Component } from "react";

import emptyCartImg from "../../assets/img/empty-cart.svg";

import styles from "./CartIcon.module.scss";

export default class CartIcon extends Component {
  render() {
    return (
      <>
        <button
          type="button"
          onClick={this.props.onClickByIconProps}
          className={styles.buttonCart}
        >
          <img
            alt="emptyCartImg"
            src={emptyCartImg}
            className={styles.emptyCartImg}
          />
        </button>
      </>
    );
  }
}
