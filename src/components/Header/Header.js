import { Component } from "react";

import HeaderActionButtons from "../HeaderActionButtons";
import Logo from "../Logo";
import Navigation from "../Navigation/Navigation";

// import styles from "./Header.module.scss";

export default class Header extends Component {
  render() {
    return (
      // <div className={styles.blockHeader}>
      <>
        <Navigation />
        <Logo />
        <HeaderActionButtons />
      </>

      // </div>
    );
  }
}
