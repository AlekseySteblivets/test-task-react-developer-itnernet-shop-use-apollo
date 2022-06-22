import { Component } from "react";

import Cart from "../Cart/Cart";
import Select from "../../lib/Select";

import styles from "./HeaderActionButtons.module.scss";

export default class HeaderActionButtons extends Component {
  render() {
    return (
      <div className={styles.headerActionButtons}>
        <Select />
        <Cart />
      </div>
    );
  }
}
