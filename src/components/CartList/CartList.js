import { Component } from 'react';
import cn from 'classnames';

import { graphql } from '@apollo/client/react/hoc';

import { READ_GET_PRODUCT_INTO_CART } from '../../api/cache/getProductIntoCart';

import CartItem from '../CartItem/CartItem';
import CartTotal from '../CartTotal';

import styles from './CartList.module.scss';

class CartList extends Component {
  render() {
    const { productIntoCart } = this.props.data;
    return (
      <div>
        <ul
          className={cn({
            [styles.menu]: true,
            [styles.menuFullScreen]: this.props.visibleFullScreen,
          })}
        >
          {productIntoCart.map(product => (
            <CartItem
              key={product.id}
              productId={product.id}
              visibleFullScreen={this.props.visibleFullScreen}
              numbersItem={product.numbersItem}
            />
          ))}
        </ul>
        <CartTotal visibleFullScreen={this.props.visibleFullScreen} />
      </div>
    );
  }
}

export default graphql(READ_GET_PRODUCT_INTO_CART, {
  options: props => ({
    fetchPolicy: 'cache-only',
  }),
})(CartList);
