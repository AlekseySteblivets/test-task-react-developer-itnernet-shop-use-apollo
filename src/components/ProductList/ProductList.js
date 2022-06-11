import { Component } from "react";

import Modal from "../../lib/Modal/Modal";
import Product from "../Product";
import ProductItem from "../ProductItem";

import styles from "./ProductList.module.scss";

export default class ProductList extends Component {
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
          <ProductItem onTogleModal={this.togleModal} />
          <ProductItem onTogleModal={this.togleModal} />
          <ProductItem onTogleModal={this.togleModal} />
          <ProductItem onTogleModal={this.togleModal} />
          <ProductItem onTogleModal={this.togleModal} />
          <ProductItem onTogleModal={this.togleModal} />
        </ul>
        <Modal
          onClose={this.togleModal}
          visible={this.state.showCartOfThing}
          classNameProps={styles.modalCartOfThing}
        >
          <Product />
        </Modal>
      </div>
    );
  }
}
