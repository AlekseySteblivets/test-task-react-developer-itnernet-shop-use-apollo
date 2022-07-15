import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";

import PreviewPage from "./pages/PreviewPage/PreviewPage";
import { client } from "./api/base/apolloClient";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <PreviewPage />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
