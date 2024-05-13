import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import './index.css';
import { Outlet } from 'react-router-dom';
import Nav from './components/landing/nav';
import { TooltipProvider } from '@/components/ui/tooltip';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <TooltipProvider>
        <Nav />
        <Outlet />
      </TooltipProvider>
    </ApolloProvider>
  );
}

export default App;
