import { Component } from "react";
import { withRouter } from "react-router";
import { graphql } from "@apollo/client/react/hoc";

// import ProductImage from "../../lib/ProductImage";
import Button from "../../lib/Button";
import CartItemDescription from "../CartItemDescription";
import CartItemImage from "../CartItemImage";
import ProductImagesType from "../ProductImagesType/ProductImagesType";

import styles from "./Product.module.scss";
import { GET_ONE_PRODUCT_BY_ID } from "../../api/shemas/getOneProductById";

class Product extends Component {
  state = {
    currentProductImage: "",
  };

  componentDidMount() {
    console.log("componentDidMount", this.props);
    this.setFirstProductAsCurrent();
  }

  componentDidUpdate() {
    // console.log("componentDidUpdate", this.props);
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

  // componentWillUnmount() {

  //   this.setState({
  //     currentProductImage: "",
  //   });
  // }
  onClickToggleColorButton = () => {
    this.setState({ activeColor: !this.state.activeColor });
  };

  onChangeMainImg = (index) => {
    this.setState({
      currentProductImage: this.props.data.product.gallery[index],
    });
    console.log("onChangeMainImg");
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

  color = (arr) => {
    return arr?.find((oneAtribute) => oneAtribute.id === "Color");
  };

  atributes = (arr) => {
    return arr.filter((oneAtribute) => oneAtribute.id !== "Color");
  };

  render() {
    // console.log("Products-props", this.props);
    const { loading, product } = this.props.data;
    // console.log("constProduct", product);

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
              <CartItemDescription
                visibleFullScreen={true}
                brand={product.brand}
                name={product.name}
                // size={this.size(product.attributes)}
                color={this.color(product.attributes)}
                atributes={this.atributes(product.attributes)}
              />
              <p className={styles.priceText}>Price:</p>
              <p className={styles.priceNumber}>{this.price(product.prices)}</p>
              <Button classNameProps={styles.buttonAddToCart}>
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
  }),
})(withRouter(Product));
