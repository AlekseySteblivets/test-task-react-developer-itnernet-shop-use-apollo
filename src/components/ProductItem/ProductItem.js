import { Component } from "react";
import cn from "classnames";

import ProductImage from "../../lib/ProductImage";

import styles from "./ProductItem.module.scss";

export default class ProductItem extends Component {
  handleClick = (id) => {
    this.props.onTogleModal(id);
  };

  render() {
    return (
      <li
        className={cn(styles.item, {
          [styles.itemNotActive]: !this.props.isInStock,
        })}
        onClick={() => this.handleClick(this.props.idProduct)}
      >
        <ProductImage
          image={this.props.image}
          idProduct={this.props.idProduct}
        />
        {!this.props.isInStock && (
          <>
            <div className={styles.blockOutOfStock}> </div>
            <p className={styles.textOutOfStock}>OUT OF STOCK</p>
          </>
        )}

        <h3 className={styles.titleThing}>
          {this.props.brand} {this.props.name}
        </h3>

        <p
          className={styles.textPriceThing}
        >{`${this.props.currencySymbol}${this.props.amountMoney}`}</p>

        <div className={styles.icon}></div>
      </li>
    );
  }
}
