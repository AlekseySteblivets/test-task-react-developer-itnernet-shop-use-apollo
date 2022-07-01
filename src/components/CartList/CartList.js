import { Component } from "react";
import { withRouter } from "react-router";
import { graphql } from "@apollo/client/react/hoc";

import cn from "classnames";

import CartItem from "../CartItem/CartItem";
import CartTotal from "../CartTotal";
import { READ_GET_PRODUCT_INTO_CART } from "../../api/cache/getProductIntoCart";
import { client } from "../../api/base/apolloClient";

import styles from "./CartList.module.scss";

class CartList extends Component {
  state = {
    numbersProduct: 0,
  };

  // componentDidMount() {
  //   const cart = client.readQuery({
  //     query: READ_GET_PRODUCT_INTO_CART,
  //     // variables: {
  //     //   // Provide any required variables here.  Variables of mismatched types will return `null`.
  //     //   id: 5,
  //     // },
  //   });
  //   console.log("cart", cart);
  // }

  counterProducts = (amount) => {
    this.setState((prevState) => ({
      numbersProduct: prevState.numbersProduct + amount,
    }));
    this.props.modalAmountImems(this.state.numbersProduct);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <div className={styles.badge}>{this.state.numbersProduct}</div>
        <ul
          className={cn({
            [styles.menu]: true,
            [styles.menuFullScreen]: this.props.visibleFullScreen,
          })}
        >
          <CartItem
            counterProducts={this.counterProducts}
            visibleFullScreen={this.props.visibleFullScreen}
          />
          <CartItem
            counterProducts={this.counterProducts}
            visibleFullScreen={this.props.visibleFullScreen}
          />
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
