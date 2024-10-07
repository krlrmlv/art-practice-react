import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Index from './pages/Index/Index';
import ArticlePage from './pages/Articles';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/articles",
    element: <ArticlePage />,
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
