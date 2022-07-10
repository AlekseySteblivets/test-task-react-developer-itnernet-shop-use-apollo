import { Component } from "react";

import { graphql } from "@apollo/client/react/hoc";
import cn from "classnames";

import CartItemAmount from "../CartItemAmount";
import CartItemImage from "../CartItemImage";
import { colorAtribute } from "../../utils/colorAtribute";
import { filterAtribute } from "../../utils/filterAtribute";
import { GET_ONE_PRODUCT_BY_ID } from "../../api/shemas/getOneProductById";
import CartItemAtributes from "../CartItemAtributes";

import styles from "./CartItem.module.scss";

class CartItem extends Component {
  render() {
    const { product } = this.props.data;
    console.log("CartItem-this.props.data", product);
    return (
      <li
        className={cn(styles.item, {
          [styles.itemFullScreen]: this.props.visibleFullScreen,
        })}
      >
        <CartItemAtributes
          visibleFullScreen={this.props.visibleFullScreen}
          attributes={filterAtribute(product.attributes)}
          color={colorAtribute(product.attributes)}
          brand={product.brand}
          name={product.name}
          productId={this.props.productId}
          prices={product.prices}
        />
        <CartItemAmount
          // counterProducts={this.props.counterProducts}
          visibleFullScreen={this.props.visibleFullScreen}
          productId={this.props.productId}
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
