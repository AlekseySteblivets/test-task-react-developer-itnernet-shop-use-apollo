import { Component } from "react";

import cn from "classnames";

import styles from "./CartItemDescription.module.scss";

export default class CartItemDescription extends Component {
  render() {
    return (
      <div
        className={cn({
          [styles.menuAboutThing]: !this.props.visibleFullScreen,
          [styles.menuAboutThingFullScreen]: this.props.visibleFullScreen,
        })}
      >
        <h3
          className={cn({
            [styles.titleThing]: !this.props.visibleFullScreen,
            [styles.titleThingFullScreen]: this.props.visibleFullScreen,
          })}
        >
          Apollo
        </h3>
        <p
          className={cn({
            [styles.titleThingName]: !this.props.visibleFullScreen,
            [styles.titleThingNameFullScreen]: this.props.visibleFullScreen,
          })}
        >
          Running Short
        </p>
        <p
          className={cn({
            [styles.textPriceThing]: !this.props.visibleFullScreen,
            [styles.textPriceThingFullScreen]: this.props.visibleFullScreen,
          })}
        >
          $50.00
        </p>
        <p
          className={cn({
            [styles.textSize]: !this.props.visibleFullScreen,
            [styles.textSizeFullScreen]: this.props.visibleFullScreen,
          })}
        >
          Size:
        </p>
        <ul
          className={cn({
            [styles.menuSize]: !this.props.visibleFullScreen,
            [styles.menuSizeFullScreen]: this.props.visibleFullScreen,
          })}
        >
          <li
            className={cn({
              [styles.itemSize]: !this.props.visibleFullScreen,
              [styles.itemSizeFullScreen]: this.props.visibleFullScreen,
            })}
          >
            XS
          </li>
          <li
            className={cn({
              [styles.itemSize]: !this.props.visibleFullScreen,
              [styles.itemSizeFullScreen]: this.props.visibleFullScreen,
            })}
          >
            S
          </li>
          <li
            className={cn({
              [styles.itemSize]: !this.props.visibleFullScreen,
              [styles.itemSizeFullScreen]: this.props.visibleFullScreen,
            })}
          >
            M
          </li>
          <li
            className={cn({
              [styles.itemSize]: !this.props.visibleFullScreen,
              [styles.itemSizeFullScreen]: this.props.visibleFullScreen,
            })}
          >
            L
          </li>
        </ul>
        <p
          className={cn({
            [styles.textColor]: !this.props.visibleFullScreen,
            [styles.textColorFullScreen]: this.props.visibleFullScreen,
          })}
        >
          Color:
        </p>
        <ul className={styles.menuColor}>
          <li
            className={cn({
              [styles.itemColor]: !this.props.visibleFullScreen,
              [styles.itemColorFullScreen]: this.props.visibleFullScreen,
            })}
          ></li>
          <li
            className={cn({
              [styles.itemColor]: !this.props.visibleFullScreen,
              [styles.itemColorFullScreen]: this.props.visibleFullScreen,
            })}
          ></li>
          <li
            className={cn({
              [styles.itemColor]: !this.props.visibleFullScreen,
              [styles.itemColorFullScreen]: this.props.visibleFullScreen,
            })}
          ></li>
        </ul>
      </div>
    );
  }
}
