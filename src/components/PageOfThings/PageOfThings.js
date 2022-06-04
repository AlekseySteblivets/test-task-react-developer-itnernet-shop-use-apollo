import { Component } from "react";

import ProductImage from "../../lib/ProductImage";
import Modal from "../../lib/Modal/Modal";
import CartOfThing from "../CartOfThing";

import styles from "./PageOfThings.module.scss";

export default class PageOfThings extends Component {
  state = {
    showCartOfThing: false,
  };

  togleModal = () => {
    this.setState((state) => ({
      showCartOfThing: !state.showCartOfThing,
    }));
  };

  render() {
    return (
      <div>
        <h2 className={styles.title}>Category name</h2>
        <ul className={styles.menu}>
          <li className={styles.item} onClick={this.togleModal}>
            {/* <img width="354" height="330" /> */}
            <ProductImage />
            <h3 className={styles.titleThing}>Apollo Running Short</h3>
            <p className={styles.textPriceThing}>$50.00</p>
          </li>
          <li className={styles.item}>
            {/* <img width="354" height="330" /> */}
            <ProductImage />
            <h3 className={styles.titleThing}>Apollo Running Short</h3>
            <p className={styles.textPriceThing}>$50.00</p>
          </li>
          <li className={styles.item}>
            {/* <img width="354" height="330" /> */}
            <ProductImage />
            <h3 className={styles.titleThing}>Apollo Running Short</h3>
            <p className={styles.textPriceThing}>$50.00</p>
          </li>
          <li className={styles.item}>
            {/* <img width="354" height="330" /> */}
            <ProductImage />
            <h3 className={styles.titleThing}>Apollo Running Short</h3>
            <p className={styles.textPriceThing}>$50.00</p>
          </li>
          <li className={styles.item}>
            {/* <img width="354" height="330" /> */}
            <ProductImage />
            <h3 className={styles.titleThing}>Apollo Running Short</h3>
            <p className={styles.textPriceThing}>$50.00</p>
          </li>
          <li className={styles.item}>
            {/* <img width="354" height="330" /> */}
            <ProductImage />
            <h3 className={styles.titleThing}>Apollo Running Short</h3>
            <p className={styles.textPriceThing}>$50.00</p>
          </li>
        </ul>
        <Modal
          onClose={this.togleModal}
          visible={this.state.showCartOfThing}
          classNameProps={styles.modalCartOfThing}
        >
          <CartOfThing />
        </Modal>
      </div>
    );
  }
}
