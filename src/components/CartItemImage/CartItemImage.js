import { Component } from "react";
import cn from "classnames";

import ProductImage from "../../lib/ProductImage";
import SliderImages from "../../lib/SliderImages/SliderImages";

import styles from "./CartItemImage.module.scss";

export default class CartItemImage extends Component {
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
            allImages={this.props.allImages}
          />
        )}
      </div>
    );
  }
}
