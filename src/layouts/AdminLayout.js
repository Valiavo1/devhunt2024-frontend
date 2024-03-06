import React from 'react'
import {Navigate} from 'react-router-dom'

const AdminLayout = () => {
  if (!localStorage.getItem('ADMIN_ACCESS')) return <Navigate to="/"/>

  return (
    <div>
        <h1>SIDEBAR</h1>
        <div className="wrapper d-flex flex-column min-vh-100 bg-light">
            <h1>HEADER</h1>
            <div className="body flex-grow-1 px-3">
                <h1>CONTENT</h1>
            </div>
            <h1>FOOTER</h1>
        </div>
    </div>
  );
};

export default AdminLayout;
