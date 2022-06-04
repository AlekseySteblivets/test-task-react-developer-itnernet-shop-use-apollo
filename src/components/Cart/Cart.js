import { Component } from "react";

import CartContent from "../CartContent";
import CartIcon from "../CartIcon/CartIcon";
import Modal from "../../lib/Modal/Modal";
import CartButtons from "../CartButtons";

import styles from "./Cart.module.scss";

// import classNames from "classnames";

export default class Cart extends Component {
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
    return (
      <div>
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
