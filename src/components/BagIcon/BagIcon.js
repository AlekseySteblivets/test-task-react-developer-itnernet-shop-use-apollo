import { Component } from "react";

import emptyCartImg from "../../assets/img/empty-cart.svg";
// import vector from "../../assets/img/vector.svg";
import Modal from "../../lib/Modal/Modal";
import Select from "../../lib/Select";
import BagItem from "../BagItem/BagItem";

import styles from "./BagIcon.module.scss";

export default class BagIcon extends Component {
  state = {
    showModal: true,
    items: [
      {
        simbol: "$",
        title: "USD",
      },
      {
        simbol: "@",
        title: "EUR",
      },
      {
        simbol: "&",
        title: "JPY",
      },
    ],
  };

  togleModal = () => {
    this.setState((state) => ({
      showModal: !state.showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <>
        <div className={styles.bag}>
          <Select items={this.state.items} />

          <button
            type="button"
            onClick={this.togleModal}
            className={styles.buttonOnBag}
          >
            <img
              alt="emptyCartImg"
              src={emptyCartImg}
              className={styles.emptyCartImg}
            />
          </button>
        </div>
        <Modal onClose={this.togleModal} visible={showModal}>
          <h1 className={styles.title}>
            <span className={styles.modalTitle}>My Bag</span>
            <span className={styles.modalAmountImems}>, 3 items</span>
          </h1>
          <BagItem />
          {/* <button type="button" onClick={this.togleModal}>
            Закрыть модалку
          </button> */}
        </Modal>
      </>
    );
  }
}
