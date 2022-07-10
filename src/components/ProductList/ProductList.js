import { Component } from "react";

import { withRouter } from "react-router";
import { graphql } from "@apollo/client/react/hoc";

// import { READ_GET_PRODUCT_INTO_CART } from "../../api/cache/getProductIntoCart";
// import { client } from "../../api/base/apolloClient";
import Modal from "../../lib/Modal/Modal";
import Product from "../Product";
import ProductItem from "../ProductItem";
import { GET_PRODUCTS_BY_NAME } from "../../api/shemas/getProductsByName";

import styles from "./ProductList.module.scss";

class ProductList extends Component {
  state = {
    showCartOfThing: false,
    idProduct: "",
  };

  togleModal = (id) => {
    this.setState((state) => ({
      showCartOfThing: !state.showCartOfThing,
      idProduct: id,
    }));
  };

  render() {
    const {
      match: { params },
      data: { category, loading },
    } = this.props;

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
          <Product
            productId={this.state.idProduct}
            onTogleModal={this.togleModal}
          />
        </Modal>
      </div>
    );
  }
}

export default graphql(GET_PRODUCTS_BY_NAME, {
  options: (props) => ({
    variables: {
      type: props.match.params.slug,
    },
  }),
})(withRouter(ProductList));
