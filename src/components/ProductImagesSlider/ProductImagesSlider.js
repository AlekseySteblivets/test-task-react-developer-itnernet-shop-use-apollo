import { Component } from "react";
import ProductImage from "../../lib/ProductImage";

import image1 from "../../assets/img/thing-template.jpg";
import image2 from "../../assets/img/productImage2ForTest.jpg";
import image3 from "../../assets/img/productImage3ForTest.jpg";

import styles from "./ProductImagesSlider.module.scss";

export default class ProductImagesSlider extends Component {
  state = {
    allImages: [image1, image2, image3],
    currentProductImage: image1,
  };

  onChangeMainImg = (index) => {
    this.setState({ currentProductImage: this.state.allImages[index] });
  };

  render() {
    return (
      <ul className={styles.blockThingViewExamples}>
        {this.state.allImages.map((image, index) => (
          <li
            onClick={() => {
              this.onChangeMainImg(index);
            }}
            key={index}
          >
            <ProductImage
              image={image}
              classNameProps={styles.thingViewExamples}
            />
          </li>
        ))}
      </ul>
    );
  }
}
