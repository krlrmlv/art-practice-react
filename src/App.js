import './App.css';
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';
import ArticlePage from './pages/Articles';
import PortalPage from './pages/Portal/Portal';
import IndexPage from './pages/Index/Index';
import MediaQueriesPage from './pages/MediaQueries/Index';
import { HelmetProvider } from 'react-helmet-async';
import ArticleItemPage from './pages/ArticleItem';
import NotFound from './pages/404';


const router = createBrowserRouter([
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
], {
  basename: process.env.REACT_APP_PUBLIC_URL
});

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
