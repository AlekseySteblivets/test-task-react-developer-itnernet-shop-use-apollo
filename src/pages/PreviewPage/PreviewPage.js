import { Component } from "react";

import LayoutSection from "../../views/LayoutSection/LayoutSection";
import Container from "../../components/Container";
import ProductList from "../../components/ProductList";
import Header from "../../components/Header";

// import styles from "./PreviewPage.module.scss";

export class PreviewPage extends Component {
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
              <ProductList />
            </Container>
          </LayoutSection>
        </main>
      </>
    );
  }
}

export default PreviewPage;
