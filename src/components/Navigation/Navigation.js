import { Component } from "react";

import logo from "../../assets/img/Brand-icon.png";
import BagIcon from "../BagIcon/BagIcon";
// import NavLink from "../NavLink/NavLink";
import NavLinkList from "../NavLinkList/NavLinkList";

import styles from "./Navigation.module.scss";

export default class Navigation extends Component {
  render() {
    return (
      <nav className={styles.navigation}>
        <NavLinkList />
        <a href="/">
          <img
            alt="logo"
            src={logo}
            width="41"
            height="41"
            className={styles.logo}
          />
        </a>
        <BagIcon />
      </nav>
    );
  }
}
