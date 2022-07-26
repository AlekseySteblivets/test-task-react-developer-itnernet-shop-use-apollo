import { Component } from 'react';
import cn from 'classnames';

import { graphql } from '@apollo/client/react/hoc';
import { client } from '../../api/base/apolloClient';

import { READ_GET_PRODUCT_INTO_CART } from '../../api/cache/getProductIntoCart';

import styles from './CartItemAmount.module.scss';

class CartItemAmount extends Component {
  state = {
    amount: 0,
  };

  componentDidMount() {
    if (this.props.productId) {
      let product = this.props.data.productIntoCart.filter(
        product => product.id === this.props.productId,
      );
      this.setState({ amount: product[0].numbersItem });
    }
  }

  updateQuery = () => {
    client.cache.updateQuery(
      {
        query: READ_GET_PRODUCT_INTO_CART,
      },
      data => ({
        productIntoCart: data.productIntoCart.map(product => ({
          ...product,
          numbersItem:
            product.id === this.props.productId
              ? this.state.amount
              : product.numbersItem,
        })),
      }),
    );
  };

  handleIncrement = () => {
    this.setState(
      prevState => ({ amount: prevState.amount + 1 }),
      () => this.updateQuery(),
    );
  };

  handleDecrement = () => {
    if (this.state.amount === 1) {
      this.setState({ amount: 1 }, () => this.updateQuery());
    } else {
      this.setState(
        prevState => ({ amount: prevState.amount - 1 }),
        () => this.updateQuery(),
      );
    }
  };

  render() {
    const visibleFullScreen = this.props.visibleFullScreen;
    return (
      <div
        className={cn(styles.menuAmount, {
          [styles.menuAmountFullScreen]: visibleFullScreen,
        })}
      >
        <button
          className={cn(styles.buttonAmount, styles.increment, {
            [styles.incrementFullScreen]: visibleFullScreen,
            [styles.buttonAmountFullScreen]: visibleFullScreen,
          })}
          onClick={this.handleIncrement}
        ></button>
        <p
          className={cn(styles.textAmount, {
            [styles.textAmountFullScreen]: visibleFullScreen,
          })}
        >
          {this.state.amount}
        </p>
        <button
          className={cn(styles.buttonAmount, {
            [styles.buttonAmountFullScreen]: visibleFullScreen,
          })}
          onClick={this.handleDecrement}
        ></button>
      </div>
    );
  }
}

export default graphql(READ_GET_PRODUCT_INTO_CART, {
  options: props => ({
    fetchPolicy: 'cache-only',
  }),
})(CartItemAmount);
