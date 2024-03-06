import {Navigate} from "react-router-dom";
import GuestLayout from "../layouts/GuestLayout";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Presentation from "../pages/presentation/Presentation";

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
      path: '/presentation',
      name: 'Presentation',
      element: <Presentation/>,
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
