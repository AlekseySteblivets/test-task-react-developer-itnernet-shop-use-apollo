import { Component } from "react";
import Button from "../../lib/Button/Button";

import styles from "./CartButtons.module.scss";

export default class CartButtons extends Component {
  state = {};

  render() {
    if (!this.props.visibleFullScreen)
      return (
        <div className={styles.blockButtons}>
          <Button onClickProps={this.props.onClickButtonCartProps}>
            View bag
          </Button>
          <Button
          //   onClickProps={this.togleModal}
          >
            CHECK OUT
          </Button>
        </div>
      );

    return (
      <div>
        <p>
          <span>Tax 21%:</span>
          <span> 42$</span>
        </p>
        <p>
          <span>Quantity:</span>
          <span> 3</span>
        </p>

        <Button>Order</Button>
      </div>
    );
  }
}
