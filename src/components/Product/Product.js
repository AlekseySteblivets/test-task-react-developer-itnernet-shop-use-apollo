import { Component } from "react";

// import ProductImage from "../../lib/ProductImage";
import Button from "../../lib/Button";
import CartItemDescription from "../CartItemDescription";
import CartItemImage from "../CartItemImage";

import styles from "./Product.module.scss";
import ProductImagesSlider from "../ProductImagesSlider/ProductImagesSlider";

export default class Product extends Component {
  state = {
    // allImages: [],
    currentProductImage: "",
  };

  render() {
    return (
      <div className={styles.cartOneThing}>
        <ProductImagesSlider />
        <CartItemImage classNameProps={styles.thingMainView} />

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
