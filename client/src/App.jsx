import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import './index.css';
import { Outlet } from 'react-router-dom';
import PageHandler from './components/PageHandler';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ThemeProvider } from '@/context/ThemeContext';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <TooltipProvider>
          <PageHandler />
          <Outlet />
        </TooltipProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
