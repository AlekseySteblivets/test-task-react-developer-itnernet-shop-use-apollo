import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';

import { client } from './api/base/apolloClient';

import PreviewPage from './pages/PreviewPage/PreviewPage';

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
