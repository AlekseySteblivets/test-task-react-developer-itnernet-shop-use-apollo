import { Component } from "react";

import cn from "classnames";

import ProductImage from "../../lib/ProductImage";

import styles from "./CartItemImage.module.scss";

export default class CartItemImage extends Component {
  render() {
    return (
      <div className={styles.menuAvatar}>
        <ProductImage
          classNameProps={cn({
            [styles.thingTemplateForSmallModall]: !this.props.visibleFullScreen,
            [styles.thingTemplateForSmallModallFullScreen]:
              this.props.visibleFullScreen,
          })}
        />
      </div>
    );
  }
}
