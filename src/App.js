import { ApolloProvider } from "@apollo/client";

import PreviewPage from "./pages/PreviewPage/PreviewPage";
import { client } from "./api/base/apolloClient";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div>
          <PreviewPage />
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
