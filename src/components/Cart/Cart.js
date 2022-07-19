import { Component } from "react";
import cn from "classnames";

import { graphql } from "@apollo/client/react/hoc";

import { READ_GET_PRODUCT_INTO_CART } from "../../api/cache/getProductIntoCart";
import CartContent from "../CartContent";
import CartIcon from "../CartIcon/CartIcon";
import ModalCart from "../../lib/ModalCart/ModalCart";
import CartButtons from "../CartButtons";
import Badge from "../../lib/Badge/Badge";

import styles from "./Cart.module.scss";

class Cart extends Component {
  state = {
    showModal: false,
    fullScreenModal: false,
  };

  togleModal = () => {
    this.setState((state) => ({
      showModal: !state.showModal,
    }));
  };

  onClickButton = () => {
    this.setState((state) => ({
      fullScreenModal: !state.fullScreenModal,
    }));
  };

  render() {
    const { showModal, fullScreenModal } = this.state;
    const { productIntoCart } = this.props.data;

    return (
      <div className={styles.cart}>
        <Badge productIntoCart={productIntoCart} />
        <CartIcon onClickByIconProps={this.togleModal} />
        <ModalCart
          onClose={this.togleModal}
          visible={showModal}
          classNameProps={cn({
            [styles.fullScreenModal]: fullScreenModal,
          })}
        >
          <CartContent
            visibleFullScreen={fullScreenModal}
            productIntoCart={productIntoCart}
          />
          <CartButtons
            onClickButtonCartProps={this.onClickButton}
            visibleFullScreen={fullScreenModal}
          />
        </ModalCart>
      </div>
    );
  }
}

export default graphql(READ_GET_PRODUCT_INTO_CART, {
  options: (props) => ({
    fetchPolicy: "cache-only",
  }),
})(Cart);
