import { Component } from "react";

import { graphql } from "@apollo/client/react/hoc";

import { READ_GET_PRODUCT_INTO_CART } from "../../api/cache/getProductIntoCart";
import CartContent from "../CartContent";
import CartIcon from "../CartIcon/CartIcon";
import Modal from "../../lib/Modal/Modal";
import CartButtons from "../CartButtons";

import styles from "./Cart.module.scss";

// import classNames from "classnames";

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
    // console.log("Cart-productIntoCart", productIntoCart);

    return (
      <div className={styles.cart}>
        {productIntoCart.length > 0 && (
          <div className={styles.badge}>
            {productIntoCart.length > 1
              ? productIntoCart.reduce((acc, currentValue) => {
                  return acc + currentValue.numbersItem;
                }, 0)
              : productIntoCart[0].numbersItem}
          </div>
        )}

        <CartIcon onClickByIconProps={this.togleModal} />
        <Modal
          onClose={this.togleModal}
          visible={showModal}
          classNameProps={{ [styles.fullScreenModal]: fullScreenModal }}
        >
          <CartContent visibleFullScreen={fullScreenModal} />
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
