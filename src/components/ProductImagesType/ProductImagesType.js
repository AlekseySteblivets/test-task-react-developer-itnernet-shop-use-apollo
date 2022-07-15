import { Component } from "react";

import ProductImage from "../../lib/ProductImage";

import styles from "./ProductImagesType.module.scss";

export default class ProductImagesType extends Component {
  render() {
    return (
      <ul className={styles.blockThingViewExamples}>
        {this.props.allImages.map((image, index) => (
          <li onClick={() => this.props.onChangeMainImg(index)} key={index}>
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
