import { Component } from 'react';
import { withRouter } from 'react-router';
import cn from 'classnames';

import { graphql } from '@apollo/client/react/hoc';
import { Interweave } from 'interweave';

import { client } from '../../api/base/apolloClient';
import { GET_ONE_PRODUCT_BY_ID } from '../../api/shemas/getOneProductById';
import { READ_GET_PRODUCT_INTO_CART } from '../../api/cache/getProductIntoCart';

import CartItemImage from '../CartItemImage';
import ProductImagesType from '../ProductImagesType/ProductImagesType';
import ProductItemAtributes from '../ProductItemAtributes/ProductItemAtributes';

import Button from '../../lib/Button';

import { filterAtribute } from '../../utils/filterAtribute';
import { colorAtribute } from '../../utils/colorAtribute';

import styles from './Product.module.scss';

class Product extends Component {
  state = {
    currentProductImage: '',
    atributes: {},
    curCurrency: '',
  };

  componentDidMount() {
    this.setFirstProductAsCurrent();
  }

  componentDidUpdate() {
    this.setFirstProductAsCurrent();
  }

  setFirstProductAsCurrent = () => {
    const { data } = this.props;
    if (!this.state.currentProductImage && !data.loading) {
      this.setState({
        currentProductImage: data.product.gallery[0],
      });
    }
  };

  onChangeMainImg = index => {
    this.setState({
      currentProductImage: this.props.data.product.gallery[index],
    });
  };

  price = arr => {
    let money = null;
    if (arr) {
      money = arr.filter(
        kindCurrency =>
          kindCurrency.currency.symbol ===
          this.props.takenCurrency.selectedCurrency.symbol,
      );
      return money[0].currency.symbol + money[0].amount;
    }
  };

  choosedColorByUser = color => {
    this.setState(prev => ({
      atributes: { ...prev.atributes, color: color },
    }));
  };

  choosedAtributesByUser = (id, sizeAtribute) => {
    this.setState(prev => ({
      atributes: {
        ...prev.atributes,
        [id]: sizeAtribute,
      },
    }));
  };

  onClickAddToCart = () => {
    const isEmptyAtributes = Object.keys(this.state.atributes);

    const allAtributesfromQuery = this.props.data.product.attributes;
    let allAtributesIDfromQuery = [];

    for (let i = 0; i < allAtributesfromQuery.length; i++) {
      allAtributesIDfromQuery.push(allAtributesfromQuery[i].id);
    }

    if (isEmptyAtributes.length !== allAtributesIDfromQuery.length) {
      return;
    }
    client.cache.updateQuery(
      {
        query: READ_GET_PRODUCT_INTO_CART,
      },
      data => {
        const { productIntoCart } = data;
        const copyProducts = [...productIntoCart];
        let repeadIndex = copyProducts.findIndex(
          prod => prod.id === this.props.match.params.idProduct,
        );

        const product = {
          id: this.props.match.params.idProduct,
          atributes: this.state.atributes,
          numbersItem: 1,
          sumProduct: this.price(this.props.data.product.prices),
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

    this.props.history.goBack();
  };

  render() {
    return (
      <div className={styles.cartOneThing}>
        {this.props.data.loading ||
        !this.props.takenCurrency.selectedCurrency ? (
          <p>loading product...</p>
        ) : (
          <>
            <ProductImagesType
              allImages={this.props.data.product.gallery}
              onChangeMainImg={this.onChangeMainImg}
            />
            <CartItemImage
              currentProductImage={this.state.currentProductImage}
              classNameProps={styles.thingMainView}
            />
            <div>
              <ProductItemAtributes
                choosedAtributesByUser={this.choosedAtributesByUser}
                choosedColorByUser={this.choosedColorByUser}
                visibleFullScreen={true}
                brand={this.props.data.product.brand}
                name={this.props.data.product.name}
                color={colorAtribute(this.props.data.product.attributes)}
                attributes={filterAtribute(this.props.data.product.attributes)}
              />
              <p className={styles.priceText}>Price:</p>
              <p className={styles.priceNumber}>
                {this.price(this.props.data.product.prices)}
              </p>

              <Button
                classNameProps={cn(styles.buttonAddToCart, {
                  [styles.buttonDisable]: !this.props.data.product.inStock,
                })}
                onClickProps={this.onClickAddToCart}
                disableProps={!this.props.data.product.inStock}
              >
                Add to cart
              </Button>

              <div className={styles.textDescription}>
                <Interweave content={this.props.data.product.description} />
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

const getOneProductById = graphql(GET_ONE_PRODUCT_BY_ID, {
  options: props => ({
    variables: {
      id: props.match.params.idProduct,
    },
  }),
});

export default withRouter(getOneProductById(Product));
