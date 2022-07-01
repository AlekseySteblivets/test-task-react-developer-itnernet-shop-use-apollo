import { Component } from "react";

import cn from "classnames";

import styles from "./CartItemDescription.module.scss";

export default class CartItemDescription extends Component {
  state = {
    currentColor: "",
    currentAtribute: {},
    idProduct: "",
  };

  onClickColorButton = (color) => {
    this.setState({ currentColor: color });
    this.props.choosedColorByUser(color);
  };

  onClickAtributes = (id, sizeAtribute) => {
    this.setState((prev) => ({
      currentAtribute: {
        ...prev.currentAtribute,
        [id]: sizeAtribute,
      },
    }));
    this.props.choosedAtributesByUser(id, sizeAtribute);
  };

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
                    onClick={() =>
                      this.onClickAtributes(oneAtribute.id, oneSize.value)
                    }
                    key={oneSize.value}
                    className={cn(styles.itemSize, {
                      [styles.itemSizeFullScreen]: visibleFullScreen,
                      [styles.activeItemSize]:
                        this.state.currentAtribute[oneAtribute.id] ===
                        oneSize.value,
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
            this.props.color.items.map((color) => (
              <li
                onClick={() => this.onClickColorButton(color.id)}
                key={color.value}
                className={cn(styles.itemColor, {
                  [styles.itemColorFullScreen]: visibleFullScreen,
                  [styles.activeColor]: this.state.currentColor === color.id,
                })}
                style={
                  color.value !== "#FFFFFF"
                    ? { backgroundColor: color.value }
                    : {
                        backgroundColor: color.value,
                        borderColor: "#000000",
                      }
                }
              ></li>
            ))}
        </ul>
      </div>
    );
  }
}
