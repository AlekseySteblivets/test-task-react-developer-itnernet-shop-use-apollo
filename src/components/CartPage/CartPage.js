import { Component } from 'react';
import { withRouter } from 'react-router';

import { graphql } from '@apollo/client/react/hoc';

import { READ_GET_PRODUCT_INTO_CART } from '../../api/cache/getProductIntoCart';

import CartButtons from '../CartButtons';
import CartContent from '../CartContent';

import styles from './CartPage.module.scss';

class CartPage extends Component {
  render() {
    const { productIntoCart } = this.props.data;
    return (
      <div className={styles.cartPage}>
        <CartContent
          visibleFullScreen={true}
          productIntoCart={productIntoCart}
        />
        <CartButtons onClose={this.togleModal} visibleFullScreen={true} />
      </div>
    );
  }
}

const getProductIntoCart = graphql(READ_GET_PRODUCT_INTO_CART, {
  options: props => ({
    fetchPolicy: 'cache-only',
  }),
});

export default getProductIntoCart(withRouter(CartPage));
