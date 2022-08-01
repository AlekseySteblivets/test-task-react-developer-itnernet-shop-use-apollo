import { Component } from 'react';
import { withRouter } from 'react-router';

import { graphql } from '@apollo/client/react/hoc';

import { SELECTED_CURRENCY } from '../../api/cache/selectedCurrency';

import ProductList from '../ProductList/ProductList';

class LayoutProductList extends Component {
  render() {
    return (
      <ProductList
        takenCurrency={this.props.data}
        slug={this.props.match.params.slug}
      />
    );
  }
}

export default graphql(SELECTED_CURRENCY, {
  options: () => ({
    fetchPolicy: 'cache-only',
  }),
})(withRouter(LayoutProductList));
