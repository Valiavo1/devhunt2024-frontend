import React from 'react'
import {Navigate} from 'react-router-dom'
import ContentCustomer from '../cloudewi-customer/components/ContentCustomer'
import FooterCustomer from '../cloudewi-customer/components/FooterCustomer'
import HeaderCustomer from '../cloudewi-customer/components/HeaderCustomer'
import SidebarCustomer from '../cloudewi-customer/components/SidebarCustomer'

const UserLayout = () => {
  if ( !localStorage.getItem ('CUSTOMER_ACCESS') ) return <Navigate to="/"/>

  return (
      <div>
          <h1>SIDEBAR</h1>
          <SidebarCustomer/>
          <div className="wrapper d-flex flex-column min-vh-100 bg-light">
              <h1>HEADER</h1>
              <HeaderCustomer/>
              <div className="body flex-grow-1 px-3">
                  <h1>CONTENT</h1>
                  <ContentCustomer/>
              </div>
              <h1>FOOTER</h1>
              <FooterCustomer/>
          </div>
      </div>
  )
}

export default UserLayout
