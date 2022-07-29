import { Component } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { graphql } from '@apollo/client/react/hoc';

import { client } from '../../api/base/apolloClient';
import { READ_GET_PRODUCT_INTO_CART } from '../../api/cache/getProductIntoCart';
import { GET_ONE_PRODUCT_BY_ID } from '../../api/shemas/getOneProductById';
import ProductImage from '../../lib/ProductImage';

import styles from './ProductItem.module.scss';

class ProductItem extends Component {
  state = {
    currentAtribute: {},
  };

  componentDidUpdate() {}

  // handleClick = () => {
  //   const { onTogleModal, idProduct } = this.props;
  //   // onTogleModal(idProduct);
  // };

  price = arr => {
    console.log('this.props.currencySymbol', this.props.currencySymbol);
    let money = null;
    if (arr) {
      money = arr.filter(
        kindCurrency =>
          kindCurrency.currency.symbol === this.props.currencySymbol,
      );
      return money[0].currency.symbol + money[0].amount;
    }
  };

  updateQuery = attributes => {
    client.cache.updateQuery(
      {
        query: READ_GET_PRODUCT_INTO_CART,
      },
      data => {
        console.log('data', data);
        const { productIntoCart } = data;
        const copyProducts = [...productIntoCart];
        console.log('this.props.idProduct', this.props.idProduct);
        let repeadIndex = copyProducts.findIndex(
          prod => prod.id === this.props.idProduct,
        );

        const product = {
          id: this.props.idProduct,
          atributes: attributes,
          numbersItem: 1,
          sumProduct: this.price(this.props.data.product.prices),
        };

        if (repeadIndex === -1) {
          copyProducts.push(product);
          return { productIntoCart: copyProducts };
        } else {
          console.log('copyProducts', copyProducts);
          return {
            productIntoCart: copyProducts,
          };
        }
      },
    );
  };

  addToCart = e => {
    e.preventDefault();
    const { attributes } = this.props.data.product;

    const fierstAttributes = attributes?.reduce((acc, atribute) => {
      return { ...acc, [atribute.id]: atribute.items[0].displayValue };
    }, {});

    this.updateQuery(fierstAttributes);

    // this.handleClick();
  };

  render() {
    const {
      isInStock,
      image,
      idProduct,
      brand,
      name,
      currencySymbol,
      amountMoney,
    } = this.props;

    return (
      <li
        className={cn(styles.item, {
          [styles.itemNotActive]: !isInStock,
        })}
        // onClick={this.handleClick}
      >
        <Link to={`${this.props.slug}/${this.props.idProduct}`}>
          <ProductImage image={image} idProduct={idProduct} />
          {!isInStock && (
            <>
              <div className={styles.blockOutOfStock}> </div>
              <p className={styles.textOutOfStock}>OUT OF STOCK</p>
            </>
          )}
          <h3 className={styles.titleThing}>
            {brand} {name}
          </h3>
          <p
            className={styles.textPriceThing}
          >{`${currencySymbol}${amountMoney}`}</p>
          {isInStock && (
            <div className={styles.icon} onClick={this.addToCart}></div>
          )}
        </Link>
      </li>
    );
  }
}

const getOneProductById = graphql(GET_ONE_PRODUCT_BY_ID, {
  options: props => ({
    variables: {
      id: props.idProduct,
    },
    // fetchPolicy: 'cache-only',
  }),
});

export default getOneProductById(ProductItem);
