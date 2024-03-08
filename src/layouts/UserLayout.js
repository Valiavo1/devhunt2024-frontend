import React, {useEffect} from 'react'
import {Navigate, Outlet} from 'react-router-dom'
import {UserNavbar} from "../components/sidebar/UserNavbar";
import axios from "axios";
import {SERVER_URL} from "../utils/URL";
import {useAuthStore} from "../store/AuthStore";

const UserLayout = () => {
  if ( !localStorage.getItem ('USER_ACCESS') ) return <Navigate to="/"/>


  return (
      <div className="bg-[#0B1215] h-auto min-h-screen relative">
          <div className="fixed w-full top-0 z-50">
              <UserNavbar/>
              <div className="w-10/12 mx-auto md:w-1/3 line-under-navbar"></div>
          </div>
          <div className="wrapper d-flex flex-column min-vh-100 bg-light overflow-auto">
              <div className="body px-3 w-10/12 md:w-1/3 mx-auto overflow-auto">
                  <Outlet/>
              </div>
          </div>
      </div>
  )
}

export default UserLayout
