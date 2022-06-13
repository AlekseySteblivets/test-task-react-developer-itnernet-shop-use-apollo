import { Component } from "react";

// import ProductImage from "../../lib/ProductImage";
import Button from "../../lib/Button";
import CartItemDescription from "../CartItemDescription";
import CartItemImage from "../CartItemImage";
import ProductImagesType from "../ProductImagesType/ProductImagesType";

import image1 from "../../assets/img/thing-template.jpg";
import image2 from "../../assets/img/productImage2ForTest.jpg";
import image3 from "../../assets/img/productImage3ForTest.jpg";

import styles from "./Product.module.scss";

export default class Product extends Component {
  state = {
    allImages: [image1, image2, image3],
    currentProductImage: image1,
  };

  onChangeMainImg = (index) => {
    this.setState({ currentProductImage: this.state.allImages[index] });
    console.log("onChangeMainImg");
  };

  render() {
    return (
      <div className={styles.cartOneThing}>
        <ProductImagesType
          allImages={this.state.allImages}
          onChangeMainImg={this.onChangeMainImg}
        />
        <CartItemImage
          // onChangeMainImg={this.onChangeMainImg}
          currentProductImage={this.state.currentProductImage}
          // allImages={this.state.allImages}
          classNameProps={styles.thingMainView}
        />

        <div>
          <CartItemDescription visibleFullScreen={true} />
          <p className={styles.priceText}>Price:</p>
          <p className={styles.priceNumber}>$50</p>
          <Button classNameProps={styles.buttonAddToCart}>Add to cart</Button>
          <p className={styles.textAboutThing}>
            Find stunning women's cocktail dresses and party dresses. Stand out
            in lace and metallic cocktail dresses and party dresses from all
            your favorite brands.
          </p>
        </div>
      </div>
    );
  }
}
