import {Navigate} from "react-router-dom";
import GuestLayout from "../layouts/GuestLayout";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

export const guestRoutes = {
  path: '/',
  name: 'Guest',
  element: <GuestLayout/>,
  children: [
    {
      path: '/',
      name: 'Presentation',
      element: <Navigate to="/presentation"/>,
    },
    {
      path: '/',
      name: 'Presentation',
      element: <Navigate to="/presentation"/>,
    },
    {
      path: '/login',
      name: 'Login Page',
      element: <Login/>,
    },
    {
      path: '/register',
      name: 'Register Page',
      element: <Register/>
    },
  ],
}
