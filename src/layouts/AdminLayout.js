import React from 'react'
import {AppContent, AppFooter, AppHeader, AppSidebar} from '../../components'
import {Navigate} from 'react-router-dom'

const AdminLayout = () => {
  if (!localStorage.getItem('ADMIN_ACCESS')) return <Navigate to="/"/>

  return (
    <div>
        <h1>SIDEBAR</h1>
      <AppSidebar/>
        <div className="wrapper d-flex flex-column min-vh-100 bg-light">
            <h1>HEADER</h1>
            <AppHeader/>
            <div className="body flex-grow-1 px-3">
                <h1>CONTENT</h1>
                <AppContent/>
            </div>
            <h1>FOOTER</h1>
            <AppFooter/>
        </div>
    </div>
  );
};

export default AdminLayout;
