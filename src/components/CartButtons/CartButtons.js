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
        <Button
          classNameProps={{
            [styles.buttonWhenFullScreen]: this.props.visibleFullScreen,
          }}
        >
          Order
        </Button>
      </div>
    );
  }
}
