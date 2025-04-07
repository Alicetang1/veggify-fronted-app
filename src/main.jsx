import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/Home';
import ErrorPage from './components/header/ErrorPage';
import CategoryPage from './pages/category/CategoryPage';
import Search from './pages/Search';
import SingleProduct from './pages/products/SingleProduct';
import Recipes from './pages/products/Recipes';
import Resources from './pages/resources/Resources';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path: "/categories/:category",
        element:<CategoryPage />
      },
      {
        path:"/search",
        element:<Search />
      },
      {
        path:"/items/:id",
        element:<SingleProduct />,
        loader:({params})=>fetch(`https://veggify-recipe-app-backend.vercel.app/api/items/${params.id}`)
      },
      {
        path:"/recipes",
        element:<Recipes/>
      },
      {
        path:"/resources",
        element:<Resources/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      }
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
)
