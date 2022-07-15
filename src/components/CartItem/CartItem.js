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
import { READ_GET_PRODUCT_INTO_CART } from "../../api/cache/getProductIntoCart";

import styles from "./CartItem.module.scss";

class CartItem extends Component {
  state = {
    currentCurrencySymbol: "",
    sumProduct: 0,
    currentProductImage: "",
  };

  componentDidMount() {
    const data = client.readQuery({
      query: SELECTED_CURRENCY,
    });
    this.setState(
      {
        currentCurrencySymbol: data.selectedCurrency.symbol,
        currentProductImage: this.props.data.product.gallery[0],
      },
      () => this.updateQuery()
    );
  }

  componentDidUpdate() {
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

  onChangeMainImg = (index) => {
    this.setState({
      currentProductImage: this.props.data.product.gallery[index],
    });
  };
  render() {
    const { product } = this.props.data;

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
        />
        <CartItemAmount
          visibleFullScreen={this.props.visibleFullScreen}
          productId={this.props.productId}
        />
        <CartItemImage
          allImages={product.gallery}
          visibleFullScreen={this.props.visibleFullScreen}
          currentProductImage={this.state.currentProductImage}
          onChangeMainImg={this.onChangeMainImg}
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
