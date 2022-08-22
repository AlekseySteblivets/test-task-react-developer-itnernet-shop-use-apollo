import { Component } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { client } from '../../api/base/apolloClient';
import { READ_GET_PRODUCT_INTO_CART } from '../../api/cache/getProductIntoCart';
import { GET_ONE_PRODUCT_BY_ID } from '../../api/shemas/getOneProductById';

import ProductImage from '../../lib/ProductImage';

import styles from './ProductItem.module.scss';
import { nameCategory } from '../../utils/nameCategory';

class ProductItem extends Component {
  state = {
    currentAtribute: {},
  };

  price = arr => {
    let money = null;
    if (arr) {
      money = arr.filter(
        kindCurrency =>
          kindCurrency.currency.symbol === this.props.currencySymbol,
      );
      return money[0].currency.symbol + money[0].amount;
    }
  };

  updateQuery = (attributes, prices) => {
    client.cache.updateQuery(
      {
        query: READ_GET_PRODUCT_INTO_CART,
      },
      data => {
        const { productIntoCart } = data;
        const copyProducts = [...productIntoCart];
        let repeadIndex = copyProducts.findIndex(
          prod => prod.id === this.props.idProduct,
        );

        const product = {
          id: this.props.idProduct,
          atributes: attributes,
          numbersItem: 1,
          sumProduct: this.price(prices),
        };

        if (repeadIndex === -1) {
          copyProducts.push(product);
          return { productIntoCart: copyProducts };
        } else {
          return {
            productIntoCart: copyProducts,
          };
        }
      },
    );
  };

  addToCart = async e => {
    e.preventDefault();
    const { data } = await client.query({
      query: GET_ONE_PRODUCT_BY_ID,
      variables: {
        id: this.props.idProduct,
      },
    });

    const { attributes, prices } = data.product;

    const firstAttributes = attributes?.reduce((acc, atribute) => {
      return { ...acc, [atribute.id]: atribute.items[0].displayValue };
    }, {});

    this.updateQuery(firstAttributes, prices);
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
      >
        <Link
          to={`/${nameCategory}/${this.props.slug}/${this.props.idProduct}`}
          className={styles.linkRoute}
        >
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

export default ProductItem;
