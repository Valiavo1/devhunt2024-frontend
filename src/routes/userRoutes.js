import {Navigate} from "react-router-dom";
import UserLayout from "../layouts/UserLayout";

export const userRoutes = {
  path: '/user',
  name: 'UserSide',
  element: <UserLayout/>,
  children: [
    {
      path: '/user',
      name: 'Home',
      element: <Navigate to="/user/home"/>,
    },
    {
      path: '/user/home',
      name: 'Home',
      element: <Home/>,
    },
  ],
}
