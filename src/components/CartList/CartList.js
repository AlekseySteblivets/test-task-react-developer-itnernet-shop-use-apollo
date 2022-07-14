import { Component } from "react";
// import { withRouter } from "react-router";
import { graphql } from "@apollo/client/react/hoc";

import cn from "classnames";

import CartItem from "../CartItem/CartItem";
import CartTotal from "../CartTotal";
import { READ_GET_PRODUCT_INTO_CART } from "../../api/cache/getProductIntoCart";
import { client } from "../../api/base/apolloClient";
import { SELECTED_CURRENCY } from "../../api/cache/selectedCurrency";

import styles from "./CartList.module.scss";

class CartList extends Component {
  // componentDidMount() {
  //   console.log(
  //     "CartList-componentDidUpdate-this.state.total",
  //     this.state.total
  //   );
  // }

  // counterCostProducts = (amount) => {
  //   console.log("amount", amount);
  //   this.setState((prevState) => ({
  //     total: prevState.total + amount,
  //   }));
  // };

  render() {
    const { productIntoCart } = this.props.data;
    console.log("productIntoCart", productIntoCart);
    return (
      <div>
        <ul
          className={cn({
            [styles.menu]: true,
            [styles.menuFullScreen]: this.props.visibleFullScreen,
          })}
        >
          {productIntoCart.map((product) => (
            <CartItem
              key={product.id}
              productId={product.id}
              // counterProducts={this.counterProducts}
              visibleFullScreen={this.props.visibleFullScreen}
              numbersItem={product.numbersItem}
              // counterCostProducts={this.counterCostProducts}
            />
          ))}
        </ul>
        <CartTotal visibleFullScreen={this.props.visibleFullScreen} />
      </div>
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
})(CartList);
