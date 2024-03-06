import AdminLayout from "../layouts/AdminLayout";
import {Navigate} from "react-router-dom";

export const adminRoutes = {
  path: '/admin',
  name: 'AdminSide',
  element: <AdminLayout/>,
  children: [
    {
      path: '/admin',
      name: 'Dashboard',
      element: <Navigate to="/admin/dashboard"/>,
    },
  ],
}
