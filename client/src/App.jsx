import './index.css';
import { Outlet } from 'react-router-dom';
import PageHandler from './components/PageHandler';

function App() {
  return (
    <>
      <PageHandler />
      <Outlet />
    </>
  );
}

export default App;
