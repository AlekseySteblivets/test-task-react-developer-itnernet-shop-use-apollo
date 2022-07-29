import { Component } from 'react';
import { withRouter } from 'react-router';
import { Link, Route, Switch } from 'react-router-dom';
import cn from 'classnames';

import { graphql } from '@apollo/client/react/hoc';
import { Interweave } from 'interweave';

import { client } from '../../api/base/apolloClient';
import Button from '../../lib/Button';
import CartItemImage from '../CartItemImage';
import ProductImagesType from '../ProductImagesType/ProductImagesType';
import { GET_ONE_PRODUCT_BY_ID } from '../../api/shemas/getOneProductById';
import { READ_GET_PRODUCT_INTO_CART } from '../../api/cache/getProductIntoCart';
import ProductItemAtributes from '../ProductItemAtributes/ProductItemAtributes';
import { filterAtribute } from '../../utils/filterAtribute';
import { colorAtribute } from '../../utils/colorAtribute';

import styles from './Product.module.scss';
import OutsideClickHandler from '../../lib/OutsideClickHandler/OutsideClickHandler';
import { SELECTED_CURRENCY } from '../../api/cache/selectedCurrency';
import LayoutProductList from '../LayoutProductList/LayoutProductList';

class Product extends Component {
  state = {
    currentProductImage: '',
    idProduct: '',
    atributes: {},
    infoAboutProductById: null,
    curCurrency: '',
  };

  componentDidMount() {
    const data = client.readQuery({
      query: GET_ONE_PRODUCT_BY_ID,
      variables: {
        id: this.props.match.params.idProduct,
      },
    });
    console.log('data', data);
    const curCurrency = client.readQuery({
      query: SELECTED_CURRENCY,
    });

    this.setState(
      {
        idProduct: this.props.match.params.idProduct,
        infoAboutProductById: { ...data.product },
        curCurrency: curCurrency.selectedCurrency.symbol,
      },
      () => this.setFirstProductAsCurrent(),
    );

    // console.log('curCurrencyDM', curCurrency.selectedCurrency.symbol);
  }

  componentDidUpdate() {
    this.setFirstProductAsCurrent();
  }

  setFirstProductAsCurrent = () => {
    // if (!this.state.currentProductImage && !data.loading) {
    if (!this.state.currentProductImage) {
      this.setState({
        currentProductImage: this.state.infoAboutProductById.gallery[0],
      });
    }
  };

  onChangeMainImg = index => {
    this.setState({
      currentProductImage: this.state.infoAboutProductById.gallery[index],
    });
  };

  price = arr => {
    let money = null;
    if (arr) {
      money = arr.filter(
        kindCurrency => kindCurrency.currency.symbol === this.state.curCurrency,
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

    const allAtributesfromQuery = this.state.infoAboutProductById.attributes;
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
          prod => prod.id === this.state.idProduct,
        );

        const product = {
          id: this.state.idProduct,
          atributes: this.state.atributes,
          numbersItem: 1,
          sumProduct: this.price(this.state.infoAboutProductById.prices),
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

    // this.props.onTogleModal();
  };

  render() {
    // const { gallery, brand, name, attributes, prices, inStock, description } =
    //   this.state.infoAboutProductById;
    // console.log('gallery', gallery);
    console.log('this.props', this.props);

    return (
      <OutsideClickHandler
        onOutsideClick={() => {
          // this.props.onClose();
          console.log('onOutsideClick');
          // <Link to="/"></Link>;
        }}
      >
        <div className={styles.cartOneThing}>
          {!this.state.infoAboutProductById ? (
            <p>loading product...</p>
          ) : (
            <>
              <ProductImagesType
                allImages={this.state.infoAboutProductById.gallery}
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
                  brand={this.state.infoAboutProductById.brand}
                  name={this.state.infoAboutProductById.name}
                  color={colorAtribute(
                    this.state.infoAboutProductById.attributes,
                  )}
                  attributes={filterAtribute(
                    this.state.infoAboutProductById.attributes,
                  )}
                />
                <p className={styles.priceText}>Price:</p>
                <p className={styles.priceNumber}>
                  {this.price(this.state.infoAboutProductById.prices)}
                </p>
                <Link to="/">
                  <Button
                    classNameProps={cn(styles.buttonAddToCart, {
                      [styles.buttonDisable]:
                        !this.state.infoAboutProductById.inStock,
                    })}
                    onClickProps={this.onClickAddToCart}
                    disableProps={!this.state.infoAboutProductById.inStock}
                  >
                    Add to cart
                  </Button>
                </Link>
                <div className={styles.textDescription}>
                  <Interweave
                    content={this.state.infoAboutProductById.description}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </OutsideClickHandler>
    );
  }
}

// const getOneProductById = graphql(GET_ONE_PRODUCT_BY_ID, {
//   options: props => ({
//     variables: {
//       id: this.props.match.params.idProduct,
//     },
//   }),
// });

export default withRouter(Product);

// export default graphql(SELECTED_CURRENCY, {
//   options: () => ({
//     fetchPolicy: 'cache-only',
//   }),
// })(withRouter(Product));
