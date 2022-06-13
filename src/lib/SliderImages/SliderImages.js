import { Component } from "react";

import styles from "./SliderImages.module.scss";

export default class SliderImages extends Component {
  state = {
    // allImages: [image1, image2, image3],
    // currentImg: this.props.currentProductImage,
    currentImgIndex: 0,
  };

  onRightSliderBtn = () => {
    if (this.state.currentImgIndex < this.props.allImages.length - 1) {
      this.setState((prevState) => ({
        currentImgIndex: prevState.currentImgIndex + 1,
        //   currentImg: this.state.allImages[this.state.currentImgIndex],
      }));
      this.props.onChangeMainImg(this.state.currentImgIndex);
    } else {
      this.setState((prevState) => ({
        currentImgIndex: 0,
        //   currentImg: this.state.allImages[this.state.currentImgIndex],
      }));
      this.props.onChangeMainImg(this.state.currentImgIndex);
    }
  };
  //   onLeftSliderBtn = () => {
  //     this.state.currentImgIndex > 0
  //       ? this.setState((prevState) => ({
  //           currentImgIndex: prevState.currentImgIndex - 1,
  //           currentImg: this.state.allImages[this.state.currentImgIndex],
  //         }))
  //       : this.setState((prevState) => ({
  //           currentImgIndex: this.state.allImages.length - 1,
  //           currentImg: this.state.allImages[this.state.currentImgIndex],
  //         }));
  //   };

  render() {
    return (
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
    );
  }
}
