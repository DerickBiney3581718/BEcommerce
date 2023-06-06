import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LandingPage from './pages/LandingPage';
import CartPage from './pages/CartPage';
import ExplorePage from './pages/ExplorePage';
import OrdersPage from './pages/OrdersPage';
import ShowCatPage from './pages/ShowCatPage';
import ProductPage from './pages/ProductPage';
import QueuePage from './pages/QueuePage';
import { AllOnBoard, fetchCategoriesData } from './loaders'
import RecipePage from './pages/RecipePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{ index: true, element: <LandingPage />, loader: fetchCategoriesData },
    { path: '/cart', element: <CartPage /> },
    { path: '/explore', element: <ExplorePage />, loader: AllOnBoard },
    { path: '/orders', element: <OrdersPage /> },
    { path: '/show-all', element: <ShowCatPage /> },
    { path: '/recipe/:id', element: <RecipePage /> },
    { path: '/queue', element: <QueuePage /> },
    { path: '/product/:id', element: <ProductPage/>, loader: fetchCategoriesData }]
  }])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
