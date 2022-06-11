import { Component } from "react";

import cn from "classnames";

import styles from "./CartItemDescription.module.scss";

export default class CartItemDescription extends Component {
  render() {
    const visibleFullScreen = this.props.visibleFullScreen;
    return (
      <div
        className={cn(styles.menuAboutThing, {
          [styles.menuAboutThing]: visibleFullScreen,
        })}
      >
        <h3
          className={cn(styles.titleThing, {
            [styles.titleThingFullScreen]: visibleFullScreen,
          })}
        >
          Apollo
        </h3>
        <p
          className={cn(styles.titleThingName, {
            [styles.titleThingNameFullScreen]: visibleFullScreen,
          })}
        >
          Running Short
        </p>
        <p
          className={cn(styles.textPriceThing, {
            [styles.textPriceThingFullScreen]: visibleFullScreen,
          })}
        >
          $50.00
        </p>
        <p
          className={cn(styles.textSize, {
            [styles.textSizeFullScreen]: visibleFullScreen,
          })}
        >
          Size:
        </p>
        <ul
          className={cn(styles.menuSize, {
            [styles.menuSizeFullScreen]: visibleFullScreen,
          })}
        >
          <li
            className={cn(styles.itemSize, {
              [styles.itemSizeFullScreen]: visibleFullScreen,
            })}
          >
            XS
          </li>
          <li
            className={cn(styles.itemSize, {
              [styles.itemSizeFullScreen]: visibleFullScreen,
            })}
          >
            S
          </li>
          <li
            className={cn(styles.itemSize, {
              [styles.itemSizeFullScreen]: visibleFullScreen,
            })}
          >
            M
          </li>
          <li
            className={cn(styles.itemSize, {
              [styles.itemSizeFullScreen]: visibleFullScreen,
            })}
          >
            L
          </li>
        </ul>
        <p
          className={cn(styles.textColor, {
            [styles.textColorFullScreen]: visibleFullScreen,
          })}
        >
          Color:
        </p>
        <ul className={styles.menuColor}>
          <li
            className={cn(styles.itemColor, {
              [styles.itemColorFullScreen]: visibleFullScreen,
            })}
          ></li>
          <li
            className={cn(styles.itemColor, {
              [styles.itemColorFullScreen]: visibleFullScreen,
            })}
          ></li>
          <li
            className={cn(styles.itemColor, {
              [styles.itemColorFullScreen]: visibleFullScreen,
            })}
          ></li>
        </ul>
      </div>
    );
  }
}
