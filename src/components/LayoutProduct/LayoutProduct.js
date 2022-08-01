import { Component } from 'react';
import { withRouter } from 'react-router';

import { graphql } from '@apollo/client/react/hoc';

import { SELECTED_CURRENCY } from '../../api/cache/selectedCurrency';

import Product from '../Product';

class LayoutProduct extends Component {
  render() {
    return <Product takenCurrency={this.props.data} />;
  }
}

export default graphql(SELECTED_CURRENCY, {
  options: () => ({
    fetchPolicy: 'cache-only',
  }),
})(withRouter(LayoutProduct));
