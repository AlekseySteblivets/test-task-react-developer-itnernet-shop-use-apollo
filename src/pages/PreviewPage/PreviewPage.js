import { Component } from "react";
import LayoutSection from "../../views/LayoutSection/LayoutSection";
import Container from "../../components/Container";
import Navigation from "../../components/Navigation";
import PageOfThings from "../../components/PageOfThings";

export class PreviewPage extends Component {
  render() {
    return (
      <>
        <LayoutSection element="header">
          <Container>
            <Navigation />
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
