import {Navigate} from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import {Home} from "../views/Home";
import {Search} from "../views/Search";
import {Activy} from "../views/Activy";
import {UserAccount} from "../views/profile/user-account/UserAccount";

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
    {
      path: '/user/search',
      name: 'Search',
      element: <Search/>,
    },
    {
      path: '/user/activy',
      name: 'Activy',
      element: <Activy/>,
    },
    {
      path: '/user/profile',
      name: 'Profile',
      element: <UserAccount/>,
    },
  ],
}
