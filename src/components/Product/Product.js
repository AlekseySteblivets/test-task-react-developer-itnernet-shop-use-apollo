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

  // componentDidMount() {
  //   console.log(this.props);
  //   this.setState({
  //     currentProductImage:
  //       this.props.data.observable.last.result.data.product.gallery[0],
  //   });
  // }

  onChangeMainImg = (index) => {
    this.setState({
      currentProductImage: this.props.data.product.gallery[index],
    });
    console.log("onChangeMainImg");
  };

  render() {
    // console.log("products-props", this.props);
    const { loading, product } = this.props.data;
    // console.log("producCT", product);

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
              // onChangeMainImg={this.onChangeMainImg}
              currentProductImage={this.state.currentProductImage}
              // allImages={this.state.allImages}
              classNameProps={styles.thingMainView}
            />
            <div>
              <CartItemDescription
                visibleFullScreen={true}
                brand={product.brand}
                name={product.name}
                // color={product.attributes[1].id}
              />
              <p className={styles.priceText}>Price:</p>
              <p className={styles.priceNumber}>$50</p>
              <Button classNameProps={styles.buttonAddToCart}>
                Add to cart
              </Button>
              <p className={styles.textAboutThing}>{product.description}</p>
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
      id: props.idProductAfterClickLiEl,
    },
  }),
})(withRouter(Product));
