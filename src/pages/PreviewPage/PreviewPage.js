import { Component } from "react";
import LayoutSection from "../../views/LayoutSection/LayoutSection";
import Container from "../../components/Container";
import PageOfThings from "../../components/PageOfThings";
import Header from "../../components/Header";

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
              <PageOfThings />
            </Container>
          </LayoutSection>
        </main>
      </>
    );
  }
}

export default PreviewPage;
