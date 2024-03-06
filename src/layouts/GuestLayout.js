import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'

const GuestLayout = () => {
  if ( localStorage.getItem ('CUSTOMER_ACCESS') && !localStorage.getItem ('ADMIN_ACCESS') ) return <Navigate
    to="/customer"/>
  if ( localStorage.getItem ('ADMIN_ACCESS') && localStorage.getItem ('CUSTOMER_ACCESS') ) return <Navigate
    to="/admin"/>

  return (
    <>
      <Outlet/>
    </>
  )
}

export default GuestLayout
