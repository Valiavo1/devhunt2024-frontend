import AdminLayout from "../layouts/AdminLayout";
import {Navigate} from "react-router-dom";
import {Home} from "../views/Home";
import CorpsAdmin from "../pages/Dashboard/CorpsAdmin";
import CorpsEnseignant from "../pages/Dashboard/CorpsEnseignant";
import Entreprise from "../pages/Dashboard/Entreprise";
import Immobilier from "../pages/Dashboard/Immobilier";
import Materiel from "../pages/Dashboard/Matériel";
import Clubs from "../pages/Dashboard/Clubs";
import Etudiants from "../pages/Dashboard/Etudiants";
import Dashboard from "../pages/Dashboard/Dashboard";

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
    {
      path: '/admin/dashboard',
      name: 'Dashboard',
      element: <Dashboard/>,
    },
    {
      path: '/admin/corpsAdmin',
      name: 'CorpsAdmin',
      element: <CorpsAdmin/>,
    },
    {
      path: '/admin/corpsEnseignant',
      name: 'CorpsEnseignant',
      element: <CorpsEnseignant/>,
    },
    {
      path: '/admin/entreprise',
      name: 'Entreprise',
      element: <Entreprise/>,
    },
    {
      path: '/admin/immobilier',
      name: 'Immobilier',
      element: <Immobilier/>,
    },
    {
      path: '/admin/materiel',
      name: 'Materiel',
      element: <Materiel/>,
    },
    {
      path: '/admin/club',
      name: 'Club',
      element: <Clubs/>,
    },
    {
      path: '/admin/club',
      name: 'Club',
      element: <Clubs/>,
    },
    {
      path: '/admin/etudiants',
      name: 'Club',
      element: <Etudiants/>,
    },
  ],
}
