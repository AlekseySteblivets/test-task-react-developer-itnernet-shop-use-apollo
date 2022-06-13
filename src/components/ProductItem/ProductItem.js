import { Component } from "react";

import ProductImage from "../../lib/ProductImage";

import styles from "./ProductItem.module.scss";

export default class ProductItem extends Component {
  handleClick = () => {
    this.props.onTogleModal();
  };
  render() {
    return (
      <li className={styles.item} onClick={this.handleClick}>
        <ProductImage />
        <h3 className={styles.titleThing}>Apollo Running Short</h3>
        <p className={styles.textPriceThing}>$50.00</p>
        <div className={styles.icon}></div>
      </li>
    );
  }
}
