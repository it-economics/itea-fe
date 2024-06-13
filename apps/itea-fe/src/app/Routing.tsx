import { lazy } from 'react';
import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { SearchAppBar } from './components/AppFrame';
const ProductDetails = lazy(() => import('./components/ProductDetails'));
const Gallery = lazy(() => import('./components/Gallery'));
const ShoppingCart = lazy(() => import('./components/Cart/ShoppingCart'));

// TODO add 404 page
// TODO add errorElement
// TODO crate a route object for single point of truth

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <SearchAppBar />
        <Outlet />
      </>
    ),
    children: [
      {
        path: '/',
        element: <Navigate to="/gallery" />,
        errorElement: <div>Error</div>,
      },
      {
        path: 'gallery',
        element: <Gallery />,
      },
      {
        path: 'product/details/:id',
        element: <ProductDetails/>,
      },
      {
        path: 'shopping-cart',
        element: <ShoppingCart />,
      },
      {
        path: '*',
        element: <span>404 Not Found</span>,
      },
    ],
  },
]);

export const Routing = () => <RouterProvider router={router} />;
