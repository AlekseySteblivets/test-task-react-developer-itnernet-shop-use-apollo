import { Component } from "react";

import cn from "classnames";

import ProductImage from "../../lib/ProductImage";
import SliderImages from "../../lib/SliderImages/SliderImages";
// import image1 from "../../assets/img/thing-template.jpg";
// import image2 from "../../assets/img/productImage2ForTest.jpg";
// import image3 from "../../assets/img/productImage3ForTest.jpg";

import styles from "./CartItemImage.module.scss";

export default class CartItemImage extends Component {
  // state = {
  //   allImages: [image1, image2, image3],
  //   currentImg: this.props.currentProductImage,
  //   currentImgIndex: 0,
  // };

  // onRightSliderBtn = () => {
  //   this.state.currentImgIndex < this.state.allImages.length - 1
  //     ? this.setState((prevState) => ({
  //         currentImgIndex: prevState.currentImgIndex + 1,
  //         currentImg: this.state.allImages[this.state.currentImgIndex],
  //       }))
  //     : this.setState((prevState) => ({
  //         currentImgIndex: 0,
  //         currentImg: this.state.allImages[this.state.currentImgIndex],
  //       }));
  // };
  // onLeftSliderBtn = () => {
  //   this.state.currentImgIndex > 0
  //     ? this.setState((prevState) => ({
  //         currentImgIndex: prevState.currentImgIndex - 1,
  //         currentImg: this.state.allImages[this.state.currentImgIndex],
  //       }))
  //     : this.setState((prevState) => ({
  //         currentImgIndex: this.state.allImages.length - 1,
  //         currentImg: this.state.allImages[this.state.currentImgIndex],
  //       }));
  // };

  render() {
    return (
      <div className={styles.menuAvatar}>
        <ProductImage
          image={this.props.currentProductImage}
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
          <SliderImages
            onChangeMainImg={this.props.onChangeMainImg}
            // currentProductImage={this.props.currentProductImage}
            allImages={this.props.allImages}
          />
        )}
      </div>
    );
  }
}
