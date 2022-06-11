import { Component } from "react";

import cn from "classnames";

import ProductImage from "../../lib/ProductImage";
// import ProductImagesSlider from "../ProductImagesSlider/ProductImagesSlider";
import image1 from "../../assets/img/thing-template.jpg";
import image2 from "../../assets/img/productImage2ForTest.jpg";
import image3 from "../../assets/img/productImage3ForTest.jpg";

import styles from "./CartItemImage.module.scss";

export default class CartItemImage extends Component {
  state = {
    allImages: [image1, image2, image3],
    currentImg: image1,
    currentImgIndex: 0,
  };

  onRightSliderBtn = () => {
    this.state.currentImgIndex < this.state.allImages.length - 1
      ? this.setState((prevState) => ({
          currentImgIndex: prevState.currentImgIndex + 1,
          currentImg: this.state.allImages[this.state.currentImgIndex],
        }))
      : this.setState((prevState) => ({
          currentImgIndex: 0,
          currentImg: this.state.allImages[this.state.currentImgIndex],
        }));
  };
  onLeftSliderBtn = () => {
    this.state.currentImgIndex > 0
      ? this.setState((prevState) => ({
          currentImgIndex: prevState.currentImgIndex - 1,
          currentImg: this.state.allImages[this.state.currentImgIndex],
        }))
      : this.setState((prevState) => ({
          currentImgIndex: this.state.allImages.length - 1,
          currentImg: this.state.allImages[this.state.currentImgIndex],
        }));
  };

  render() {
    console.log(this.state.currentImgIndex);

    return (
      <div className={styles.menuAvatar}>
        <ProductImage
          image={this.state.currentImg}
          classNameProps={cn(
            styles.thingTemplateForSmallModall,
            this.props.classNameProps,
            {
              [styles.thingTemplateForSmallModallFullScreen]:
                this.props.visibleFullScreen,
            }
          )}
        />
        {this.props.visibleFullScreen && (
          <div>
            <button
              type="button"
              className={styles.buttonLeftSlider}
              onClick={this.onLeftSliderBtn}
            >
              <svg width={6} height={11} className={styles.svgLeft}></svg>
            </button>
            <button
              type="button"
              className={styles.buttonRightSlider}
              onClick={this.onRightSliderBtn}
            >
              <svg width={6} height={11} className={styles.svgRight}></svg>
            </button>
          </div>
        )}
      </div>
    );
  }
}
