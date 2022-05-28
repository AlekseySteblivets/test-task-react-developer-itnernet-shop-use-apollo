import { Component } from "react";

import logo from "../../assets/img/Brand-icon.png";
import BagIcon from "../BagIcon/BagIcon";

import styles from "./Navigation.module.scss";

export default class Navigation extends Component {
  render() {
    return (
      <nav className={styles.navigation}>
        <ul className={styles.menu}>
          <li className={styles.item}>
            <a href="/" className={styles.link}>
              women
            </a>
          </li>
          <li className={styles.item}>
            <a href="/" className={styles.link}>
              men
            </a>
          </li>
          <li className={styles.item}>
            <a href="/" className={styles.link}>
              kids
            </a>
          </li>
        </ul>

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
