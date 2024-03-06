import React, {useEffect} from "react";
import {Outlet} from "react-router-dom";

const DefaultLayout = () => {

  return (
    <div className="home-page">
      <Outlet/>
    </div>
  );
}

export default DefaultLayout;
