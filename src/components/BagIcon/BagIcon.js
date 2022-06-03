import { Component } from "react";

import emptyCartImg from "../../assets/img/empty-cart.svg";
import Button from "../../lib/Button/Button";
// import vector from "../../assets/img/vector.svg";
import Modal from "../../lib/Modal/Modal";
import Select from "../../lib/Select";
import BagItem from "../BagItem/BagItem";

import styles from "./BagIcon.module.scss";

export default class BagIcon extends Component {
  state = {
    showModal: false,
    showBigModal: false,
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

  onClickButton = () => {
    this.setState((state) => ({
      showBigModal: !state.showBigModal,
    }));
  };

  render() {
    const { showModal, showBigModal } = this.state;
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
        <Modal
          onClose={this.togleModal}
          visible={showModal}
          classNameProps={showBigModal ? styles.showBigModal : ""}
        >
          <h1 className={styles.title}>
            {!showBigModal ? (
              <>
                <span className={styles.modalTitle}>My Bag</span>
                <span className={styles.modalAmountImems}>, 3 items</span>
              </>
            ) : (
              <span className={styles.titleBigModal}> cart</span>
            )}
          </h1>
          <BagItem />

          {!showBigModal ? (
            <div className={styles.blockButtons}>
              <Button
                onClickProps={this.onClickButton}
                // classNameProps={
                //   this.state.showBigModal ? styles.showBigModal : ""
                // }
              >
                View bag
              </Button>
              <Button onClickProps={this.togleModal}>CHECK OUT</Button>
            </div>
          ) : (
            <div>
              <p>
                <span>Tax 21%:</span>
                <span> 42$</span>
              </p>
              <p>
                <span>Quantity:</span>
                <span> 3</span>
              </p>

              <Button onClickProps={this.onClickButton}>Order</Button>
            </div>
          )}
        </Modal>
      </>
    );
  }
}
