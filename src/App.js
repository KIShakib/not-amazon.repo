import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import Orders from './Components/Orders/Orders';
import Shipping from './Components/Shipping/Shipping';
import Shopping from './Components/Shopping-Page/Shopping';
import SignUp from './Components/SignUp/SignUp';
import User from './Components/User/User';
import Layout from './Layout/Layout';
import { productsAndCartLoader } from './Loaders/ProductsAndCartLoader';
import PrivateRoute from './Routes/PrivateRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: "/", element: <Layout></Layout>,
      children: [
        {
          path: "/", element: <Shopping></Shopping>,
          loader: () => fetch("http://localhost:5000/products")
        },
        {
          path: "/home", element: <Shopping></Shopping>,
          loader: () => fetch("http://localhost:5000/products")
        },
        {
          path: "/orders", element: <Orders></Orders>,
          loader: () => productsAndCartLoader()
        },
        {
          path: "/inventory", element: <PrivateRoute><Inventory></Inventory></PrivateRoute>
        },
        {
          path: "/shipping", element: <PrivateRoute><Shipping></Shipping></PrivateRoute>
        },
        {
          path: "/login", element: <Login></Login>
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>
        },
        {
          path: "/user", element: <PrivateRoute><User></User></PrivateRoute>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
