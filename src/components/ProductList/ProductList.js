import { Component } from 'react';
import { withRouter } from 'react-router';

import { graphql } from '@apollo/client/react/hoc';

import ProductItem from '../ProductItem';
import { GET_PRODUCTS_BY_NAME } from '../../api/shemas/getProductsByName';

import styles from './ProductList.module.scss';

class ProductList extends Component {
  amountMoney = currencies => {
    return currencies.find(
      kindOfCurrency =>
        kindOfCurrency.currency.symbol ===
        this.props.takenCurrency.selectedCurrency.symbol,
    )?.amount;
  };

  currencySymbolOfProduct = currencies => {
    return currencies.find(
      kindOfCurrency =>
        kindOfCurrency.currency.symbol ===
        this.props.takenCurrency.selectedCurrency.symbol,
    )?.currency.symbol;
  };

  render() {
    const {
      match: { params },
      data: { category, loading },
    } = this.props;

    return (
      <div className={styles.productList}>
        <h2 className={styles.title}>{params.slug}</h2>
        {loading || !this.props.takenCurrency.selectedCurrency ? (
          <p>...Loading PRODUCTS</p>
        ) : (
          <ul className={styles.menu}>
            {category?.products.map(oneProduct => (
              <ProductItem
                onTogleModal={this.togleModal}
                key={oneProduct.id}
                idProduct={oneProduct.id}
                brand={oneProduct.brand}
                amountMoney={this.amountMoney(oneProduct.prices)}
                image={oneProduct.gallery[0]}
                name={oneProduct.name}
                isInStock={oneProduct.inStock}
                currencySymbol={this.currencySymbolOfProduct(oneProduct.prices)}
                slug={this.props.slug}
              />
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default graphql(GET_PRODUCTS_BY_NAME, {
  options: props => ({
    variables: {
      type: props.slug,
    },
  }),
})(withRouter(ProductList));
