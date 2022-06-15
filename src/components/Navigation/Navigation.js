import { Component } from "react";
import { graphql } from "@apollo/client/react/hoc";

import { GET_CATEGORIES_NAME } from "../../api/shemas/categoriesName";

import NavLink from "../NavLink/NavLink";

import styles from "./Navigation.module.scss";
// import { GET_CATEGORIES } from "../../api/shemas/categories";

// const dataLinks = [
//   { title: "women", href: "/" },
//   { title: "men", href: "/" },
//   { title: "kids", href: "/" },
// ];

class Navigation extends Component {
  render() {
    const {
      data: { loading, categories },
    } = this.props;

    return (
      <nav className={styles.navigation}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul className={styles.menu}>
            {categories.map((link) => (
              <NavLink
                title={link.name}
                href={`/${link.name}`}
                key={link.name}
              />
            ))}
          </ul>
        )}
      </nav>
    );
  }
}

export default graphql(GET_CATEGORIES_NAME)(Navigation);
