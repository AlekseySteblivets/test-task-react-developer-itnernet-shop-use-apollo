import { Component } from "react";
import { useCategories } from "../../api/queriesHOC/withCategories";
import { graphql } from "@apollo/client/react/hoc";
import { GET_CATEGORIES } from "../../api/shemas/categories";

import Modal from "../../lib/Modal/Modal";
import Product from "../Product";
import ProductItem from "../ProductItem";

import styles from "./ProductList.module.scss";

class ProductList extends Component {
  state = {
    showCartOfThing: false,
  };

  togleModal = () => {
    this.setState((state) => ({
      showCartOfThing: !state.showCartOfThing,
    }));
  };

  render() {
    console.log(this.props);
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

// eslint-disable-next-line react-hooks/rules-of-hooks
export default graphql(GET_CATEGORIES)(ProductList);
