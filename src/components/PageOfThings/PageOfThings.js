import { Component } from "react";
import AvatarOfThing from "../../lib/AvatarOfThing";

import styles from "./PageOfThings.module.scss";

export default class PageOfThings extends Component {
  render() {
    return (
      <div>
        <h2 className={styles.title}>Category name</h2>
        <ul className={styles.menu}>
          <li className={styles.item}>
            {/* <img width="354" height="330" /> */}
            <AvatarOfThing />
            <h3 className={styles.titleThing}>Apollo Running Short</h3>
            <p className={styles.textPriceThing}>$50.00</p>
          </li>
          <li className={styles.item}>
            {/* <img width="354" height="330" /> */}
            <AvatarOfThing />
            <h3 className={styles.titleThing}>Apollo Running Short</h3>
            <p className={styles.textPriceThing}>$50.00</p>
          </li>
          <li className={styles.item}>
            {/* <img width="354" height="330" /> */}
            <AvatarOfThing />
            <h3 className={styles.titleThing}>Apollo Running Short</h3>
            <p className={styles.textPriceThing}>$50.00</p>
          </li>
          <li className={styles.item}>
            {/* <img width="354" height="330" /> */}
            <AvatarOfThing />
            <h3 className={styles.titleThing}>Apollo Running Short</h3>
            <p className={styles.textPriceThing}>$50.00</p>
          </li>
          <li className={styles.item}>
            {/* <img width="354" height="330" /> */}
            <AvatarOfThing />
            <h3 className={styles.titleThing}>Apollo Running Short</h3>
            <p className={styles.textPriceThing}>$50.00</p>
          </li>
          <li className={styles.item}>
            {/* <img width="354" height="330" /> */}
            <AvatarOfThing />
            <h3 className={styles.titleThing}>Apollo Running Short</h3>
            <p className={styles.textPriceThing}>$50.00</p>
          </li>
        </ul>
      </div>
    );
  }
}
