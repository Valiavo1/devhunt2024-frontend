import React, {useEffect} from "react";
import {Outlet} from "react-router-dom";
import {useAuthContext} from "../contexts/AuthContext";
import axios from "axios";
import {CHECK_TOKEN_ENDPOINT, SERVER_URL} from "../../config";

const DefaultLayout = () => {
  const {logout} = useAuthContext ();

  useEffect (() => {
    const cLimit = localStorage.getItem ('c_limit');

    if ( cLimit ) {
      const currentTime = new Date ().getTime ();
      const timeDifference = new Date (cLimit).getTime () - currentTime;
      console.log (timeDifference);
      setTimeout (logout, timeDifference > 0 ? timeDifference : 0);
    }

    axios
      .get (SERVER_URL + CHECK_TOKEN_ENDPOINT + `/${localStorage.getItem ('USER_AUTHENTICATE')}`)
      .then ()
      .catch ((error) => {
        logout ()
      })
  }, [])

  return (
    <div className="home-page">
      <Outlet/>
    </div>
  );
}

export default DefaultLayout;
