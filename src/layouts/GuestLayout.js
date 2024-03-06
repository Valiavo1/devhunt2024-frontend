import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'

const GuestLayout = () => {
  if ( localStorage.getItem ('USER_ACCESS') && !localStorage.getItem ('ADMIN_ACCESS') ) return <Navigate
    to="/user"/>
  if ( localStorage.getItem ('ADMIN_ACCESS') && localStorage.getItem ('USER_ACCESS') ) return <Navigate
    to="/admin"/>

  return (
    <>
      <Outlet/>
    </>
  )
}

export default GuestLayout
