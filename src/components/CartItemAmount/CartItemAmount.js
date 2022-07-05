import { Component } from "react";

import { client } from "../../api/base/apolloClient";
import { READ_GET_PRODUCT_INTO_CART } from "../../api/cache/getProductIntoCart";
import { graphql } from "@apollo/client/react/hoc";

import cn from "classnames";

import styles from "./CartItemAmount.module.scss";

class CartItemAmount extends Component {
  state = {
    amount: 0,
  };

  componentDidMount() {
    if (this.props.productId) {
      let product = this.props.data.productIntoCart.filter(
        (product) => product.id === this.props.productId
      );
      this.setState({ amount: product[0].numbersItem });
    }
  }

  // componentDidUpdate() {
  //   console.log("888", this.props);
  //   // this.setState({amount: })
  // }

  // componentWillUnmount() {
  //   console.log("000", this.props);
  //   client.cache.updateQuery(
  //     {
  //       query: READ_GET_PRODUCT_INTO_CART,
  //     },
  //     (data) => ({
  //       productIntoCart: data.productIntoCart.map((product) => ({
  //         ...product,
  //         numbersItem: 1,
  //       })),
  //     })
  //   );
  // }

  updateQuery = () => {
    client.cache.updateQuery(
      {
        query: READ_GET_PRODUCT_INTO_CART,
      },
      (data) => ({
        productIntoCart: data.productIntoCart.map((product) => ({
          ...product,
          numbersItem:
            product.id === this.props.productId
              ? this.state.amount
              : product.numbersItem,
        })),
      })
    );
  };

  handleIncrement = () => {
    this.setState(
      (prevState) => ({ amount: prevState.amount + 1 }),
      // () => this.props.counterProducts(1),
      () => this.updateQuery()
    );

    // console.log("handleIncrement", client);
  };

  handleDecrement = () => {
    if (this.state.amount === 0) {
      this.setState({ amount: 0 }, () => this.updateQuery());
      // this.props.counterProducts(0);
    } else {
      this.setState(
        (prevState) => ({ amount: prevState.amount - 1 }),
        () => this.updateQuery()
      );
      // this.props.counterProducts(-1);
    }
  };

  render() {
    // console.log("CartItemAmount", this.props);
    const visibleFullScreen = this.props.visibleFullScreen;
    return (
      <div
        className={cn(styles.menuAmount, {
          [styles.menuAmountFullScreen]: visibleFullScreen,
        })}
      >
        <button
          className={cn(styles.buttonAmount, styles.increment, {
            [styles.incrementFullScreen]: visibleFullScreen,
            [styles.buttonAmountFullScreen]: visibleFullScreen,
          })}
          onClick={this.handleIncrement}
        ></button>
        <p className={styles.textAmount}>{this.state.amount}</p>
        <button
          className={cn(styles.buttonAmount, {
            [styles.buttonAmountFullScreen]: visibleFullScreen,
          })}
          onClick={this.handleDecrement}
        ></button>
      </div>
    );
  }
}

export default graphql(READ_GET_PRODUCT_INTO_CART, {
  options: (props) => ({
    fetchPolicy: "cache-only",
  }),
})(CartItemAmount);
