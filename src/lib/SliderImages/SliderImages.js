import { Component } from "react";

import styles from "./SliderImages.module.scss";

export default class SliderImages extends Component {
  state = {
    currentImgIndex: 0,
  };

  onRightSliderBtn = () => {
    if (this.state.currentImgIndex < this.props.allImages.length - 1) {
      this.setState(
        (prevState) => ({
          currentImgIndex: prevState.currentImgIndex + 1,
        }),
        () => this.props.onChangeMainImg(this.state.currentImgIndex)
      );
    } else {
      this.setState({ currentImgIndex: 0 }, () =>
        this.props.onChangeMainImg(this.state.currentImgIndex)
      );
    }
  };
  onLeftSliderBtn = () => {
    this.state.currentImgIndex > 0
      ? this.setState(
          (prevState) => ({
            currentImgIndex: prevState.currentImgIndex - 1,
          }),
          () => this.props.onChangeMainImg(this.state.currentImgIndex)
        )
      : this.setState(
          { currentImgIndex: this.props.allImages.length - 1 },
          () => this.props.onChangeMainImg(this.state.currentImgIndex)
        );
  };

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
