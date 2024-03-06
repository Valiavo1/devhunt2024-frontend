import React from 'react'
import {createBrowserRouter} from 'react-router-dom'
import {guestRoutes} from "./guestRoutes";
import {defaultRoutes} from "./defaultRoutes";
import Page404 from "../pages/page404/Page404";
import Page500 from "../pages/page500/Page500";

const routes = createBrowserRouter ([
  guestRoutes,
  defaultRoutes,
  {
    path: '*',
    name: 'Page 404',
    element: <Page404/>,
  },
  {
    path: '/500',
    name: 'Page 500',
    element: <Page500/>,
  },
])

export default routes
