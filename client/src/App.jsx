import './index.css';
import { Outlet } from 'react-router-dom';
import PageHandler from './components/PageHandler';

import { TooltipProvider } from '@/components/ui/tooltip';

function App() {
  return (
    <>
      <TooltipProvider>
        <PageHandler />
        <Outlet />
      </TooltipProvider>
    </>
  );
}

export default App;
