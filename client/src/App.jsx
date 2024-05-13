import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import './index.css';
import { Outlet } from 'react-router-dom';
import PageHandler from './components/PageHandler';
import { TooltipProvider } from '@/components/ui/tooltip';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <TooltipProvider>
        <PageHandler />
        <Outlet />
      </TooltipProvider>
    </ApolloProvider>
  );
}

export default App;
