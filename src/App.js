import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Index from './pages/Index/Index';
import ArticlePage from './pages/Articles';
import PortalPage from './pages/Portal/Portal';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/articles",
    element: <ArticlePage />,
  },
  {
    path: "/portal",
    element: <PortalPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <Index />
    </div>
  );
}

export default App;
