import {Navigate} from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import {Home} from "../views/Home";
import {Search} from "../views/Search";
import {Activy} from "../views/Activy";
import {UserAccount} from "../views/profile/user-account/UserAccount";
import {NewPost} from "../views/NewPost";
import {Post} from "../views/profile/post/Post";

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
      path: '/user/post/:postId',
      name: 'Post',
      element: <Post/>,
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
      path: '/user/new',
      name: 'New',
      element: <NewPost/>,
    },
    {
      path: '/user/profile',
      name: 'Profile',
      element: <UserAccount/>,
    },
  ],
}
