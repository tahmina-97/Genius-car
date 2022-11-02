import { createBrowserRouter } from "react-router-dom";
import LoginLayout from "../layouts/LoginLayout/LoginLayout";
import Main from "../layouts/Main/Main";
import ErrorElement from "../Pages/ErrorElement/ErrorElement";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorElement></ErrorElement>,
        element: <Main></Main>, children: [
            {
                path: '/', element: <Home></Home>
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