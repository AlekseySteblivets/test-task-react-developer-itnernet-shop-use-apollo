import { Component } from 'react';

import { graphql } from '@apollo/client/react/hoc';

import { READ_GET_PRODUCT_INTO_CART } from '../../api/cache/getProductIntoCart';
import CartContent from '../CartContent';
import CartIcon from '../CartIcon/CartIcon';
import ModalCartOverlay from '../../lib/ModalCartOverlay/ModalCartOverlay';
import CartButtons from '../CartButtons';
import Badge from '../../lib/Badge/Badge';

import styles from './CartOverlayButton.module.scss';
import { withRouter } from 'react-router-dom';

class CartOverlayButton extends Component {
  state = {
    showModal: false,
  };

  togleModal = () => {
    if (this.props.location.pathname === '/cart') {
      return;
    }
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    const { productIntoCart } = this.props.data;

    return (
      <div className={styles.cart}>
        <Badge productIntoCart={productIntoCart} />
        <CartIcon onClickByIconProps={this.togleModal} />
        <ModalCartOverlay onClose={this.togleModal} visible={showModal}>
          <CartContent productIntoCart={productIntoCart} />
          <CartButtons onClose={this.togleModal} />
        </ModalCartOverlay>
      </div>
    );
  }
}

export default graphql(READ_GET_PRODUCT_INTO_CART, {
  options: props => ({
    fetchPolicy: 'cache-only',
  }),
})(withRouter(CartOverlayButton));
