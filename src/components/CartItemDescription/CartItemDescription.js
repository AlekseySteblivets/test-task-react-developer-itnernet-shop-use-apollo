import { Component } from "react";

import { graphql } from "@apollo/client/react/hoc";
import { READ_GET_PRODUCT_INTO_CART } from "../../api/cache/getProductIntoCart";
import { client } from "../../api/base/apolloClient";

import cn from "classnames";

import styles from "./CartItemDescription.module.scss";

class CartItemDescription extends Component {
  state = {
    currentColor: "",
    currentAtribute: {},
    idProduct: "",
  };

  // componentDidMount() {
  //   console.log("componentDidMount-CartItemDescription", this.props);

  //   if (this.props.data.productIntoCart.length !== 0) {
  //     const atribute = this.props.data.productIntoCart.filter(
  //       (product) => product.id === this.props.productId
  //     );
  //     this.setState({
  //       currentAtribute: atribute[0].atributes,
  //       currentColor: atribute[0].atributes.color
  //         ? atribute[0].atributes.color
  //         : "",
  //     });
  //   }
  // }

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
    // if (
    //   !this.props.data.productIntoCart.filter(
    //     (product) => product.id === this.props.productId
    //   )
    // ) {
    //   console.log("false");
    this.props.choosedAtributesByUser(id, sizeAtribute);
    // } else {
    //   console.log("true - можно вставлять апдейт квери");
    // }

    // }
  };

  render() {
    const visibleFullScreen = this.props.visibleFullScreen;
    console.log(this.props);
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
            {this.props.prices[0].currency.symbol}
            {this.props.prices[0].amount}
          </p>
        )}

        {this.props.attributes &&
          this.props.attributes.map((oneAtribute) => (
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

export default graphql(READ_GET_PRODUCT_INTO_CART, {
  options: (props) => ({
    // variables: {
    //   id: props.productId,
    // },
    fetchPolicy: "cache-only",
  }),
})(CartItemDescription);

// }

// const cart = client.readQuery({
//   query: READ_GET_PRODUCT_INTO_CART,
// });
// if (!cart || !cart.productIntoCart || cart.productIntoCart.length == 0) {
//   return;
// }
// let copy = JSON.parse(JSON.stringify(cart));
// console.log("car is null? - ", copy == null);
// console.log("car item size - ", copy.productIntoCart[0].atributes.Size);
// this.setState({
//   currentAtribute: cart.productIntoCart[0].atributes,
// });

// console.log(
//   "CartItemDescription-componentDidMount",
//   this.props.data.productIntoCart
// );
// // if (!this.state.currentAtribute && this.props.data.loading) {
// setInterval(
//   () =>
//     this.setState({
//       currentAtribute: cart.productIntoCart[0].atributes,
//     }),
//   1000
// );

// // }

// setInterval(
//   () =>
//     this.setState({
//       currentAtribute: atribute[0].atributes,
//     }),
//   1000
// );
