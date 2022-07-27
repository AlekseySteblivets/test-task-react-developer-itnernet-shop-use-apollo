import { Component } from 'react';

import cn from 'classnames';

import styles from './ProductAtributes.module.scss';

export default class ProductAtributes extends Component {
  price = prices => {
    let money = null;
    if (this.props.currentCurrencySymbol) {
      money = prices.filter(
        kindCurrency =>
          kindCurrency.currency.symbol === this.props.currentCurrencySymbol,
      );

      return money[0].amount;
    }
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

        <p
          className={cn(styles.textPriceThing, {
            [styles.textPriceThingFullScreen]: visibleFullScreen,
          })}
        >
          {this.props.currentCurrencySymbol}
          {this.price(this.props.prices)}
        </p>

        {this.props.attributes &&
          this.props.attributes.map(oneAtribute => (
            <div key={oneAtribute.id + oneAtribute.items[0].value}>
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
                {oneAtribute.items.map(oneSize => (
                  <li
                    onClick={() =>
                      this.props.onClickAtributes(oneAtribute.id, oneSize.value)
                    }
                    key={oneSize.value}
                    className={cn(styles.itemSize, {
                      [styles.itemSizeFullScreen]: visibleFullScreen,
                      [styles.activeItemSize]:
                        this.props.currentAtribute[oneAtribute.id] ===
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
          {this.props.color && 'Color:'}
        </p>
        <ul className={styles.menuColor}>
          {this.props.color &&
            this.props.color.items.map(color => (
              <li
                onClick={() => this.props.onClickColorButton(color.id)}
                key={color.value}
                className={cn(styles.itemColor, {
                  [styles.itemColorFullScreen]: visibleFullScreen,
                  [styles.activeColor]: this.props.currentColor === color.id,
                })}
                style={
                  color.value !== '#FFFFFF'
                    ? { backgroundColor: color.value }
                    : {
                        backgroundColor: color.value,
                        borderColor: '#000000',
                      }
                }
              ></li>
            ))}
        </ul>
      </div>
    );
  }
}
