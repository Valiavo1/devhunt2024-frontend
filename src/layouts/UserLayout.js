import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'
import {UserNavbar} from "../components/sidebar/UserNavbar";

const UserLayout = () => {
  if ( !localStorage.getItem ('USER_ACCESS') ) return <Navigate to="/"/>

  return (
      <div className="bg-[#0B1215] h-screen overflow-hidden">
          <UserNavbar/>
          <div className="wrapper d-flex flex-column min-vh-100 bg-light">
              <div className="body px-3 w-1/3 mx-auto">
                  <Outlet/>
              </div>
          </div>
      </div>
  )
}

export default UserLayout
