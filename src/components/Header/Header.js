import { Component } from "react";

import BagIcon from "../BagIcon/BagIcon";
import Logo from "../Logo";
// import NavLink from "../NavLink/NavLink";
import Navigation from "../Navigation/Navigation";

import styles from "./Header.module.scss";

export default class Header extends Component {
  render() {
    return (
      // <div className={styles.blockHeader}>
      <>
        <Navigation />
        <Logo />
        <BagIcon />
      </>

      // </div>
    );
  }
}
