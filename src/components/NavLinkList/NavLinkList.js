import { Component } from "react";
import NavLink from "../NavLink/NavLink";

import styles from "./NavLinkList.module.scss";

const dataLinks = [
  { title: "women", href: "/" },
  { title: "men", href: "/" },
  { title: "kids", href: "/" },
];

export default class NavLinkList extends Component {
  render() {
    return (
      <ul className={styles.menu}>
        {dataLinks.map((link) => (
          <div key={link.title + link.href}>
            <NavLink title={link.title} href={link.href} />
          </div>
        ))}
      </ul>
    );
  }
}
