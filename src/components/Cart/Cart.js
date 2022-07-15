import { Component } from "react";

import { graphql } from "@apollo/client/react/hoc";

import { READ_GET_PRODUCT_INTO_CART } from "../../api/cache/getProductIntoCart";
import CartContent from "../CartContent";
import CartIcon from "../CartIcon/CartIcon";
import Modal from "../../lib/Modal/Modal";
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
        <Modal
          onClose={this.togleModal}
          visible={showModal}
          classNameProps={{ [styles.fullScreenModal]: fullScreenModal }}
        >
          <CartContent
            visibleFullScreen={fullScreenModal}
            productIntoCart={productIntoCart}
          />
          <CartButtons
            onClickButtonCartProps={this.onClickButton}
            visibleFullScreen={fullScreenModal}
          />
        </Modal>
      </div>
    );
  }
}

export default graphql(READ_GET_PRODUCT_INTO_CART, {
  options: (props) => ({
    // variables: {
    //   id: props.productId,
    // },
    fetchPolicy: "cache-only",
  }),
})(Cart);
