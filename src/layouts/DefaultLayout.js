import React, {useEffect} from "react";
import {Outlet} from "react-router-dom";
import axios from "axios";
import {SERVER_URL} from "../utils/URL";
import {useAuthStore} from "../store/AuthStore";

const DefaultLayout = () => {
    const {setUser} = useAuthStore()

    useEffect(() => {
        axios.get(SERVER_URL + `/user/${localStorage.getItem('user_id')}`)
            .then(r => {
                setUser(r.data)
                console.log(r.data)
            })
            .catch(e => {
                console.error(e)
            })
    }, []);

  return (
    <div className="home-page">
      <Outlet/>
    </div>
  );
}

export default DefaultLayout;
