import './App.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import ArticlePage from './pages/Articles';
import PortalPage from './pages/Portal/Portal';
import IndexPage from './pages/Index/Index';
import MediaQueriesPage from './pages/MediaQueries/Index';

const router = createHashRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "/articles",
    element: <ArticlePage />,
  },
  {
    path: "/portal",
    element: <PortalPage />,
  },
  {
    path: "/media-queries",
    element: <MediaQueriesPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
