import {Navigate} from "react-router-dom";
import React from "react";
import {adminRoutes} from "./adminRoutes";
import {userRoutes} from "./userRoutes";
import DefaultLayout from "../layouts/DefaultLayout";

export const defaultRoutes = {
  path: '/',
  name: 'Default',
  element: <DefaultLayout/>,
  children: [
    {
      path: '/',
      name: 'AdminSide',
      element: <Navigate to="/admin"/>
    },
    adminRoutes,
    {
      path: '/',
      name: 'UserSide',
      element: <Navigate to="/user"/>
    },
    userRoutes,
  ]
}
