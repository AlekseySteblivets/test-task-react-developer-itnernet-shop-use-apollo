import { Component } from "react";

import { graphql } from "@apollo/client/react/hoc";
import { client } from "../../api/base/apolloClient";
import cn from "classnames";

import CartItemAmount from "../CartItemAmount";
import CartItemImage from "../CartItemImage";
import { colorAtribute } from "../../utils/colorAtribute";
import { filterAtribute } from "../../utils/filterAtribute";
import { GET_ONE_PRODUCT_BY_ID } from "../../api/shemas/getOneProductById";
import CartItemAtributes from "../CartItemAtributes";
import { SELECTED_CURRENCY } from "../../api/cache/selectedCurrency";

import styles from "./CartItem.module.scss";
import { READ_GET_PRODUCT_INTO_CART } from "../../api/cache/getProductIntoCart";
// import { READ_GET_PRODUCT_INTO_CART } from "../../api/cache/getProductIntoCart";

class CartItem extends Component {
  state = {
    currentCurrencySymbol: "",
    sumProduct: 0,
    // numbersItem: 0,
  };

  componentDidMount() {
    const data = client.readQuery({
      query: SELECTED_CURRENCY,
    });
    this.setState(
      {
        currentCurrencySymbol: data.selectedCurrency.symbol,
      },
      () => this.updateQuery()
    );
    // console.log("01", this.props.data.product.prices);
    // console.log("02", this.state.currentCurrencySymbol);
    // console.log("03", this.props.numbersItem);
  }

  componentDidUpdate() {
    // console.log("1", this.props.data.product.prices);
    // console.log("2", this.state.currentCurrencySymbol);
    // console.log("3", this.props.numbersItem);
    // console.log(
    //   this.sumProduct(
    //     this.props.data.product.prices,
    //     this.state.currentCurrencySymbol,
    //     this.props.numbersItem
    //   )
    // );
    this.updateQuery();
  }

  updateQuery = () => {
    client.cache.updateQuery(
      {
        query: READ_GET_PRODUCT_INTO_CART,
      },
      (data) => ({
        productIntoCart: data.productIntoCart.map((product) => ({
          ...product,
          sumProduct:
            product.id === this.props.productId
              ? this.sumProduct(
                  this.props.data.product.prices,
                  this.state.currentCurrencySymbol,
                  this.props.numbersItem
                )
              : product.sumProduct,
        })),
      })
    );
  };

  sumProduct = (prices, symbolCurrency, numbersItem) => {
    return (
      prices.find(
        (kindOfCurrency) => kindOfCurrency.currency.symbol === symbolCurrency
      )?.amount * numbersItem
    );
  };

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
          currentCurrencySymbol={this.state.currentCurrencySymbol}
          // counterCostProducts={this.props.counterCostProducts}
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
