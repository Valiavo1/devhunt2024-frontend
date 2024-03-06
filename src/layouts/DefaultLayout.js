import React, {useEffect} from "react";
import {Outlet} from "react-router-dom";
import axios from "axios";
import {SERVER_URL} from "../utils/URL";
import {useAuthStore} from "../store/AuthStore";

const DefaultLayout = () => {
    const {setUser} = useAuthStore()

  return (
    <div className="home-page">
      <Outlet/>
    </div>
  );
}

export default DefaultLayout;
