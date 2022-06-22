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
          {this.props.brand}
        </h3>
        <p
          className={cn(styles.titleThingName, {
            [styles.titleThingNameFullScreen]: visibleFullScreen,
          })}
        >
          {this.props.name}
        </p>

        {!visibleFullScreen && (
          <p
            className={cn(styles.textPriceThing, {
              [styles.textPriceThingFullScreen]: visibleFullScreen,
            })}
          >
            $50.00
          </p>
        )}

        {this.props.atributes &&
          this.props.atributes.map((oneAtribute) => (
            <div key={oneAtribute.id}>
              <p
                className={cn(styles.textSize, {
                  [styles.textSizeFullScreen]: visibleFullScreen,
                })}
              >
                {oneAtribute.id}:
              </p>
              <ul
                className={cn(styles.menuSize, {
                  [styles.menuSizeFullScreen]: visibleFullScreen,
                })}
              >
                {oneAtribute.items.map((oneSize) => (
                  <li
                    key={oneSize.value}
                    className={cn(styles.itemSize, {
                      [styles.itemSizeFullScreen]: visibleFullScreen,
                    })}
                  >
                    {oneSize.value}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        <p
          className={cn(styles.textColor, {
            [styles.textColorFullScreen]: visibleFullScreen,
          })}
        >
          {this.props.color && "Color:"}
        </p>
        <ul className={styles.menuColor}>
          {this.props.color &&
            this.props.color.items.map((oneColor) => (
              <li
                key={oneColor.value}
                className={cn(styles.itemColor, {
                  [styles.itemColorFullScreen]: visibleFullScreen,
                })}
                style={{ backgroundColor: oneColor.value }}
              ></li>
            ))}
        </ul>
      </div>
    );
  }
}
