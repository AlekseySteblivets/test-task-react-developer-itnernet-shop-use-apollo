import { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { graphql } from "@apollo/client/react/hoc";
import { GET_CATEGORIES_NAME } from "../../api/shemas/categoriesName";
import { withRouter } from "react-router";

import LayoutSection from "../../views/LayoutSection/LayoutSection";
import Container from "../../components/Container";
import ProductList from "../../components/ProductList";
import Product from "../../components/Product";
import Header from "../../components/Header";

// import styles from "./PreviewPage.module.scss";
class PreviewPage extends Component {
  componentDidUpdate() {
    // console.log(this.props);
  }

  render() {
    return (
      <>
        <LayoutSection element="header">
          <Container>
            <Header />
          </Container>
        </LayoutSection>
        <main>
          <LayoutSection>
            <Container>
              <Switch>
                <Route path="/:slug/" component={ProductList} />
                {/* <Route path="/:slug/:idProduct" component={Product} /> */}
              </Switch>
            </Container>
          </LayoutSection>
        </main>
      </>
    );
  }
}

export default graphql(GET_CATEGORIES_NAME)(withRouter(PreviewPage));
