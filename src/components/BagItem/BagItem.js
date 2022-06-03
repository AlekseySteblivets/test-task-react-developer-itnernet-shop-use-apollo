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
              <h3 className={styles.titleThing}> Apollo Running Short</h3>
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
            </div>
            <div className={styles.menuAmount}>
              <button className={styles.buttonAmount}></button>
              <p className={styles.textAmount}>1</p>
              <button className={styles.buttonAmount}></button>
            </div>
            <div className={styles.menuAvatar}>
              <AvatarOfThing
                classNameProps={styles.thingTemplateForSmallModall}
              />
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.menuAboutThing}>
              <h3 className={styles.titleThing}> Apollo Running Short</h3>
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
            </div>
            <div className={styles.menuAmount}>
              <button className={styles.buttonAmount}></button>
              <p className={styles.textAmount}>1</p>
              <button className={styles.buttonAmount}></button>
            </div>
            <div className={styles.menuAvatar}>
              <AvatarOfThing
                classNameProps={styles.thingTemplateForSmallModall}
              />
            </div>
          </li>
        </ul>
        <div className={styles.blockTotal}>
          <p className={styles.textBlockTotal}>Total:</p>
          <p className={styles.priceBlockTotal}>$200.00</p>
        </div>
      </div>
    );
  }
}
