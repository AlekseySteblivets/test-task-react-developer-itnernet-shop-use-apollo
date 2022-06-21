import { Component } from "react";
import { NavLink } from "react-router-dom";

import styles from "./NavigationLink.module.scss";

export default class NavigationLink extends Component {
  render() {
    // console.log("NavigationLink", this.props);
    return (
      <li className={styles.item}>
        <NavLink
          to={this.props.href}
          className={styles.link}
          activeClassName={styles.active}
        >
          {this.props.title}
        </NavLink>
      </li>
    );
  }
}
