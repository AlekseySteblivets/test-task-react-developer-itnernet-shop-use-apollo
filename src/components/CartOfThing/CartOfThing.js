import { Component } from "react";
import AvatarOfThing from "../../lib/AvatarOfThing";
import Button from "../../lib/Button";

import styles from "./CartOfThing.module.scss";

export default class CartOfThing extends Component {
  render() {
    return (
      <div className={styles.cartOneThing}>
        <ul className={styles.blockThingViewExamples}>
          <li>
            <AvatarOfThing classNameProps={styles.thingViewExamples} />
          </li>
          <li>
            <AvatarOfThing classNameProps={styles.thingViewExamples} />
          </li>
          <li>
            <AvatarOfThing classNameProps={styles.thingViewExamples} />
          </li>
        </ul>
        <div className={styles.menuAvatar}>
          <AvatarOfThing classNameProps={styles.thingMainView} />
        </div>
        <div className={styles.menuAboutThing}>
          <h3 className={styles.titleThing}> Apollo</h3>
          <p> Running Short</p>
          <p className={styles.textPriceThing}>$50.00</p>
          <p className={styles.textSize}>Size:</p>
          <ul className={styles.menuSize}>
            <li className={styles.itemSize}>XS</li>
            <li className={styles.itemSize}>S</li>
            <li className={styles.itemSize}>M</li>
            <li className={styles.itemSize}>L</li>
          </ul>
          <p className={styles.textColor}>Color:</p>
          <ul className={styles.menuColor}>
            <li className={styles.itemColor}></li>
            <li className={styles.itemColor}></li>
            <li className={styles.itemColor}></li>
          </ul>
          <p>Price:</p>
          <p>$50</p>
          <Button classNameProps={styles.buttonAddToCart}>Add to cart</Button>
          <p className={styles.textAboutThing}>
            Find stunning women's cocktail dresses and party dresses. Stand out
            in lace and metallic cocktail dresses and party dresses from all
            your favorite brands.
          </p>
        </div>
      </div>
    );
  }
}
