import { Component } from 'react';

import { client } from '../../api/base/apolloClient';
import { graphql } from '@apollo/client/react/hoc';

import { READ_GET_PRODUCT_INTO_CART } from '../../api/cache/getProductIntoCart';
import ProductAtributes from '../../lib/ProductAtributes/ProductAtributes';

class CartItemAtributes extends Component {
  state = {
    currentColor: '',
    currentAtribute: {},
  };

  componentDidMount() {
    const atribute = this.props.data.productIntoCart.filter(
      product => product.id === this.props.productId,
    );
    console.log('CartItemAtributes', atribute);
    this.setState({
      currentAtribute: atribute[0].atributes,
      currentColor: atribute[0].atributes.color
        ? atribute[0].atributes.color
        : '',
    });
  }

  changeArtributeInCache = () => {
    client.cache.updateQuery(
      {
        query: READ_GET_PRODUCT_INTO_CART,
      },
      data => ({
        productIntoCart: data.productIntoCart.map(product => ({
          ...product,
          atributes:
            product.id === this.props.productId
              ? this.state.currentAtribute
              : product.atributes,
        })),
      }),
    );
  };

  onClickColorButton = color => {
    this.setState(
      prev => ({
        currentColor: color,
        currentAtribute: { ...prev.currentAtribute, color: color },
      }),
      () => this.changeArtributeInCache(),
    );
  };

  onClickAtributes = (id, sizeAtribute) => {
    this.setState(
      prev => ({
        currentAtribute: {
          ...prev.currentAtribute,
          [id]: sizeAtribute,
        },
      }),
      () => this.changeArtributeInCache(),
    );
  };

  render() {
    return (
      <>
        <ProductAtributes
          visibleFullScreen={this.props.visibleFullScreen}
          onClickAtributes={this.onClickAtributes}
          onClickColorButton={this.onClickColorButton}
          attributes={this.props.attributes}
          name={this.props.name}
          color={this.props.color}
          brand={this.props.brand}
          productId={this.props.productId}
          prices={this.props.prices}
          currentColor={this.state.currentColor}
          currentAtribute={this.state.currentAtribute}
          currentCurrencySymbol={this.props.currentCurrencySymbol}
        />
      </>
    );
  }
}

export default graphql(READ_GET_PRODUCT_INTO_CART, {
  options: props => ({
    fetchPolicy: 'cache-only',
  }),
})(CartItemAtributes);
