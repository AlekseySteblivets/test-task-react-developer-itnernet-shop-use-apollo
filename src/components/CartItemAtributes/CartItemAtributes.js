import { Component } from "react";

// import cn from "classnames";
import { graphql } from "@apollo/client/react/hoc";

import { READ_GET_PRODUCT_INTO_CART } from "../../api/cache/getProductIntoCart";
import { client } from "../../api/base/apolloClient";
import ProductAtributes from "../../lib/ProductAtributes/ProductAtributes";

// import styles from "./CartItemAtributes.module.scss";

class CartItemAtributes extends Component {
  state = {
    currentColor: "",
    currentAtribute: {},
    // idProduct: "",
  };

  componentDidMount() {
    // if (this.props.data.productIntoCart.length !== 0) {
    const atribute = this.props.data.productIntoCart.filter(
      (product) => product.id === this.props.productId
    );
    this.setState({
      currentAtribute: atribute[0].atributes,
      currentColor: atribute[0].atributes.color
        ? atribute[0].atributes.color
        : "",
    });
    // }
  }

  changeArtributeInCache = () => {
    client.cache.updateQuery(
      {
        query: READ_GET_PRODUCT_INTO_CART,
      },
      (data) => ({
        productIntoCart: data.productIntoCart.map((product) => ({
          ...product,
          atributes:
            product.id === this.props.productId
              ? this.state.currentAtribute
              : product.atributes,
        })),
      })
    );
  };

  onClickColorButton = (color) => {
    this.setState(
      (prev) => ({
        currentColor: color,
        currentAtribute: { ...prev.currentAtribute, color: color },
      }),
      () => this.changeArtributeInCache()
    );
  };

  onClickAtributes = (id, sizeAtribute) => {
    this.setState(
      (prev) => ({
        currentAtribute: {
          ...prev.currentAtribute,
          [id]: sizeAtribute,
        },
      }),
      () => this.changeArtributeInCache()
    );
  };

  render() {
    // console.log("CartItemAtributes", this.props);
    return (
      <>
        <ProductAtributes
          visibleFullScreen={this.props.visibleFullScreen}
          onClickAtributes={this.onClickAtributes}
          onClickColorButton={this.onClickColorButton}
          attributes={this.props.attributes}
          name={this.props.name}
          color={this.props.color}
          brand={this.props.brand}
          productId={this.props.productId}
          prices={this.props.prices}
          currentColor={this.state.currentColor}
          currentAtribute={this.state.currentAtribute}
        />
      </>
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
})(CartItemAtributes);
