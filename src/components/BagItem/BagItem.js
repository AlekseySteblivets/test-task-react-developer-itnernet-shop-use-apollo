import { Component } from "react";
import AvatarOfThing from "../../lib/AvatarOfThing";
import styles from "./BagItem.module.scss";
import modalImgTemplate from "../../assets/img/thing-template-for-modal.png";

export default class BagItem extends Component {
  state = {
    modalImg: modalImgTemplate,
  };

  render() {
    return (
      <div>
        <ul className={styles.menu}>
          <li className={styles.item}>
            <div className={styles.menuAboutThing}>
              <h3> Apollo Running Short</h3>
              <p>$50.00</p>
              <p>Size:</p>
              <ul className={styles.menuSize}>
                <li className={styles.itemSize}>XS</li>
                <li className={styles.itemSize}>S</li>
                <li className={styles.itemSize}>M</li>
                <li className={styles.itemSize}>L</li>
              </ul>
              <p>Color:</p>
              <ul className={styles.menuColor}>
                <li className={styles.itemColor}></li>
                <li className={styles.itemColor}></li>
                <li className={styles.itemColor}></li>
              </ul>
            </div>
            <div className={styles.menuAmount}>
              <button>+</button>
              <p>1</p>
              <button>+</button>
            </div>
            <div className={styles.menuAvatar}>
              <AvatarOfThing />
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
