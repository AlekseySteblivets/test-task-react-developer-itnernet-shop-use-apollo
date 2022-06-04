import { Component } from "react";

import NavLink from "../NavLink/NavLink";

import styles from "./Navigation.module.scss";

const dataLinks = [
  { title: "women", href: "/" },
  { title: "men", href: "/" },
  { title: "kids", href: "/" },
];

export default class Navigation extends Component {
  render() {
    return (
      <nav className={styles.navigation}>
        <ul className={styles.menu}>
          {dataLinks.map((link) => (
            <div key={link.title + link.href}>
              <NavLink title={link.title} href={link.href} />
            </div>
          ))}
        </ul>
      </nav>
    );
  }
}
