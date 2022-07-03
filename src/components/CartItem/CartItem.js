import { Component } from "react";
import { graphql } from "@apollo/client/react/hoc";

import cn from "classnames";

import CartItemDescription from "../CartItemDescription";
import CartItemAmount from "../CartItemAmount";
import CartItemImage from "../CartItemImage";

import styles from "./CartItem.module.scss";
import { GET_ONE_PRODUCT_BY_ID } from "../../api/shemas/getOneProductById";

class CartItem extends Component {
  color = (arr) => {
    return arr?.find((oneAtribute) => oneAtribute.id === "Color");
  };

  atributes = (arr) => {
    return arr.filter((oneAtribute) => oneAtribute.id !== "Color");
  };

  render() {
    const { product } = this.props.data;
    console.log("5555", this.props.data);
    return (
      <li
        className={cn(styles.item, {
          [styles.itemFullScreen]: this.props.visibleFullScreen,
        })}
      >
        <CartItemDescription
          visibleFullScreen={this.props.visibleFullScreen}
          attributes={this.atributes(product.attributes)}
          color={this.color(product.attributes)}
          brand={product.brand}
          name={product.name}
          // attributes={this.atributes(product.attributes)}
        />
        <CartItemAmount
          counterProducts={this.props.counterProducts}
          visibleFullScreen={this.props.visibleFullScreen}
        />
        <CartItemImage
          visibleFullScreen={this.props.visibleFullScreen}
          currentProductImage={this.props.data.product.gallery[0]}
        />
      </li>
    );
  }
}
export default graphql(GET_ONE_PRODUCT_BY_ID, {
  options: (props) => ({
    variables: {
      id: props.productId,
    },
    fetchPolicy: "cache-only",
  }),
})(CartItem);
