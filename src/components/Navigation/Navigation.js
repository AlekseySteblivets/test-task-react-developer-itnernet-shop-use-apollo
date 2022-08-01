import { Component } from 'react';

import { graphql } from '@apollo/client/react/hoc';

import { GET_CATEGORIES_NAME } from '../../api/shemas/categoriesName';

import NavigationLink from '../NavigationLink/NavigationLink';

import styles from './Navigation.module.scss';

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
            {categories.map(category => (
              <NavigationLink
                title={category.name}
                href={`/${category.name}`}
                key={category.name}
              />
            ))}
          </ul>
        )}
      </nav>
    );
  }
}

export default graphql(GET_CATEGORIES_NAME)(Navigation);
