import { ApolloProvider } from "@apollo/client";

import PreviewPage from "./pages/PreviewPage/PreviewPage";
import { client } from "./api/base/apolloClient";

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <PreviewPage />
      </div>
    </ApolloProvider>
  );
}

export default App;
