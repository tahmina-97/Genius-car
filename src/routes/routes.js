import { createBrowserRouter } from "react-router-dom";
import LoginLayout from "../layouts/LoginLayout/LoginLayout";
import Main from "../layouts/Main/Main";
import Orders from "../Orders/Orders";
import Checkout from "../Pages/Checkout/Checkout";
import ErrorElement from "../Pages/ErrorElement/ErrorElement";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorElement></ErrorElement>,
        element: <Main></Main>, children: [
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/checkout/:id',
                loader: ({ params }) => fetch(`https://genius-car-server-4.vercel.app/services/${params.id}`),
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
            },
            {
                path: '/orders',
                element: <PrivateRoute><Orders></Orders></PrivateRoute>
            }
        ]
    },

    {
        path: '/login',
        element: <LoginLayout></LoginLayout>,
        children: [
            { path: '/login', element: <Login></Login> },
            { path: '/login/register', element: <Register></Register> },
        ]
    }


]);