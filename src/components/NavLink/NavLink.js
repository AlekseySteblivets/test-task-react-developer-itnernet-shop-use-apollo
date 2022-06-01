import { Component } from "react";

import styles from "./NavLink.module.scss";

export default class NavLink extends Component {
  render() {
    console.log(this.props.title);
    return (
      <li key={this.props.title} className={styles.item}>
        <a href={this.props.href} className={styles.link}>
          {this.props.title}
        </a>
      </li>
    );
  }
}
