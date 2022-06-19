import { Component } from "react";
import { withRouter } from "react-router";
// import { useCategories } from "../../api/queriesHOC/withCategories";
import { graphql } from "@apollo/client/react/hoc";

import Modal from "../../lib/Modal/Modal";
import Product from "../Product";
import ProductItem from "../ProductItem";

import styles from "./ProductList.module.scss";
import { GET_PRODUCTS_BY_NAME } from "../../api/shemas/getProductsByName";

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
    const {
      match: { params },
      data: { category, loading },
    } = this.props;
    // console.log("category", category);

    console.log("ProductList", this.props);
    return (
      <div>
        <h2 className={styles.title}>{params.slug}</h2>
        {loading ? (
          <p>...Loading PRODUCTS</p>
        ) : (
          <ul className={styles.menu}>
            {category.products.map((oneProduct) => (
              <ProductItem
                onTogleModal={this.togleModal}
                key={oneProduct.id}
                idProduct={oneProduct.id}
                brand={oneProduct.brand}
                amountMoney={oneProduct.prices[0].amount}
                image={oneProduct.gallery[0]}
                name={oneProduct.name}
                isInStock={oneProduct.inStock}
                currencySimbol={oneProduct.prices[0].currency.symbol}
              />
            ))}
          </ul>
        )}
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

export default graphql(GET_PRODUCTS_BY_NAME, {
  options: (props) => ({
    variables: { type: props.match.params.slug },
  }),
})(withRouter(ProductList));
