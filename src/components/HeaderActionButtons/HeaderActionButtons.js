import { Component } from "react";

import Cart from "../Cart/Cart";
import Select from "../../lib/Select";

import styles from "./HeaderActionButtons.module.scss";

export default class HeaderActionButtons extends Component {
  state = {
    // showModal: false,
    // showBigModal: false,
    items: [
      {
        simbol: "$",
        title: "USD",
      },
      {
        simbol: "@",
        title: "EUR",
      },
      {
        simbol: "&",
        title: "JPY",
      },
    ],
  };

  render() {
    return (
      <div className={styles.headerActionButtons}>
        <Select items={this.state.items} />
        <Cart />
      </div>
    );
  }
}
