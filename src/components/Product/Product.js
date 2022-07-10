import { Component } from "react";
import { withRouter } from "react-router";

import { graphql } from "@apollo/client/react/hoc";

import { client } from "../../api/base/apolloClient";
import Button from "../../lib/Button";
import CartItemImage from "../CartItemImage";
import ProductImagesType from "../ProductImagesType/ProductImagesType";
import { GET_ONE_PRODUCT_BY_ID } from "../../api/shemas/getOneProductById";
import { READ_GET_PRODUCT_INTO_CART } from "../../api/cache/getProductIntoCart";
import ProductItemAtributes from "../ProductItemAtributes/ProductItemAtributes";
import { filterAtribute } from "../../utils/filterAtribute";
import { colorAtribute } from "../../utils/colorAtribute";

import styles from "./Product.module.scss";

class Product extends Component {
  state = {
    currentProductImage: "",
    idProduct: "",
    atributes: {},
  };

  componentDidMount() {
    this.setFirstProductAsCurrent();
    this.setState({
      idProduct: this.props.productId,
    });
  }

  componentDidUpdate() {
    this.setFirstProductAsCurrent();
  }

  setFirstProductAsCurrent = () => {
    const { data } = this.props;
    if (!this.state.currentProductImage && !data.loading) {
      this.setState({
        currentProductImage: data.product.gallery[0],
      });
    }
  };

  onChangeMainImg = (index) => {
    this.setState({
      currentProductImage: this.props.data.product.gallery[index],
    });
  };

  textDescription = (text) => {
    return { __html: text };
  };

  price = (arr) => {
    let money = null;
    if (arr) {
      money = arr.filter(
        (kindCurrency) => kindCurrency.currency.symbol === "£"
      );
      return money[0].currency.symbol + money[0].amount;
    }
  };

  choosedColorByUser = (color) => {
    this.setState((prev) => ({
      atributes: { ...prev.atributes, color: color },
    }));
  };

  choosedAtributesByUser = (id, sizeAtribute) => {
    this.setState((prev) => ({
      atributes: {
        ...prev.atributes,
        [id]: sizeAtribute,
      },
    }));
  };

  onClickAddToCart = () => {
    client.cache.updateQuery(
      {
        query: READ_GET_PRODUCT_INTO_CART,
      },
      (data) => {
        // console.log(data);
        const product = {
          id: this.state.idProduct,
          atributes: this.state.atributes,
          numbersItem: 1,
        };
        const { productIntoCart } = data;
        const copyProducts = [...productIntoCart];
        // console.log(productIntoCart);
        copyProducts.push(product);
        return { productIntoCart: copyProducts };
      }
    );
    this.props.onTogleModal();
  };

  render() {
    // console.log("Products-props", this.props);
    const { loading, product } = this.props.data;
    console.log("product.attributes", product);

    return (
      <div className={styles.cartOneThing}>
        {loading ? (
          <p>loading product...</p>
        ) : (
          <>
            <ProductImagesType
              allImages={product.gallery}
              onChangeMainImg={this.onChangeMainImg}
            />
            <CartItemImage
              currentProductImage={this.state.currentProductImage}
              classNameProps={styles.thingMainView}
            />
            <div>
              <ProductItemAtributes
                choosedAtributesByUser={this.choosedAtributesByUser}
                choosedColorByUser={this.choosedColorByUser}
                visibleFullScreen={true}
                brand={product.brand}
                name={product.name}
                color={colorAtribute(product.attributes)}
                attributes={filterAtribute(product.attributes)}
              />
              <p className={styles.priceText}>Price:</p>
              <p className={styles.priceNumber}>{this.price(product.prices)}</p>
              <Button
                classNameProps={styles.buttonAddToCart}
                onClickProps={this.onClickAddToCart}
              >
                Add to cart
              </Button>
              <div
                className={styles.textDescription}
                dangerouslySetInnerHTML={this.textDescription(
                  product.description
                )}
              ></div>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default graphql(GET_ONE_PRODUCT_BY_ID, {
  options: (props) => ({
    variables: {
      id: props.productId,
    },
    // fetchPolicy: "cache-first",
  }),
})(
  //   (
  //   graphql(READ_GET_PRODUCT_INTO_CART, {
  //     options: (props) => ({
  //       // variables: {
  //       //   id: props.productId,
  //       // },
  //       fetchPolicy: "cache-only",
  //     }),
  //   })
  // )
  withRouter(Product)
);
