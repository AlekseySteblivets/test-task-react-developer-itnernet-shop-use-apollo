import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';

import { graphql } from '@apollo/client/react/hoc';

import { GET_CATEGORIES_NAME } from '../../api/shemas/categoriesName';

import LayoutSection from '../../views/LayoutSection/LayoutSection';
import Container from '../../components/Container';
import Header from '../../components/Header';
import LayoutProductList from '../../components/LayoutProductList/LayoutProductList';
import LayoutProduct from '../../components/LayoutProduct/LayoutProduct';
import CartPage from '../../components/CartPage/CartPage';
import { nameCartPage } from '../../utils/nameCartPage';
import { nameCategory } from '../../utils/nameCategory';

import styles from './PreviewPage.module.scss';

class PreviewPage extends Component {
  componentDidUpdate() {
    const { data, location, history } = this.props;
    if (location.pathname === '/') {
      history.push(`/${nameCategory}/${data.categories[0].name}`);
    }
  }

  render() {
    return (
      <>
        <LayoutSection element="header" classNameProps={styles.header}>
          <Container>
            <Header />
          </Container>
        </LayoutSection>
        <main>
          <LayoutSection>
            <Container>
              <Switch>
                <Route exact path={`/${nameCartPage}`} component={CartPage} />
                <Route
                  exact
                  path={`/${nameCategory}/:slug`}
                  component={LayoutProductList}
                />
                <Route
                  path={`/${nameCategory}/:slug/:idProduct`}
                  component={LayoutProduct}
                />
              </Switch>
            </Container>
          </LayoutSection>
        </main>
      </>
    );
  }
}

export default graphql(GET_CATEGORIES_NAME)(withRouter(PreviewPage));
