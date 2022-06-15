import { Component } from "react";
// import { useCategories } from "../../api/queriesHOC/withCategories";
import { graphql } from "@apollo/client/react/hoc";
// import { GET_CATEGORIES } from "../../api/shemas/categories";

import Modal from "../../lib/Modal/Modal";
import Product from "../Product";
import ProductItem from "../ProductItem";

import styles from "./ProductList.module.scss";
import { GET_PRODUCTS } from "../../api/shemas/getProducts";

class ProductList extends Component {
  state = {
    showCartOfThing: false,
    categoryName: "all",
    allCategories: this.props.data.categories,
    currentCategories: [],
  };

  togleModal = () => {
    this.setState((state) => ({
      showCartOfThing: !state.showCartOfThing,
    }));
  };

  // takeCategory = (array) => {
  //   for (let i = 0; i < array.length; i++) {
  //     const element = array[i];
  //     if (element.name === this.state.categoryName) {
  //       this.setState({ currentCategories: element.products });
  //     }
  //   }
  // };

  render() {
    const arrCategories = this.props.data.categories;
    console.log(arrCategories);

    return (
      <div>
        <h2 className={styles.title}>{this.state.categoryName}</h2>
        {/* <h2 className={styles.title}>{this.state.allCategories[0].name}</h2> */}
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
export default graphql(GET_PRODUCTS)(ProductList);
