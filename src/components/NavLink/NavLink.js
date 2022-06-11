import { Component } from "react";

import styles from "./NavLink.module.scss";

export default class NavLink extends Component {
  render() {
    return (
      <li className={styles.item}>
        <a href={this.props.href} className={styles.link}>
          {this.props.title}
        </a>
      </li>
    );
  }
}
