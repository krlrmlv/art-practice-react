import './App.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import ArticlePage from './pages/Articles';
import PortalPage from './pages/Portal/Portal';
import IndexPage from './pages/Index/Index';
import MediaQueriesPage from './pages/MediaQueries/Index';
import { HelmetProvider } from 'react-helmet-async';
import ArticleItemPage from './pages/ArticleItem';
import NotFound from './pages/404';


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
    path: "/articles/:articleId",
    element: <ArticleItemPage />,
  },
  {
    path: "/portal",
    element: <PortalPage />,
  },
  {
    path: "/media-queries",
    element: <MediaQueriesPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </div>
  );
}

export default App;
