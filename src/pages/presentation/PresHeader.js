import React from "react";
import {Link} from "react-router-dom";
import logo from  "./../../assets/maddle-logo.png"

export const PresHeader = () => {
    return (
        <header>
            <nav className="bg-white pres-header px-4 lg:px-12 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img src={logo} className="mr-3 h-6 sm:h-9"
                             alt="Flowbite Logo"/>
                        <span
                            className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Maddle</span>
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <a href="#"
                           className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">About
                        </a>
                        <button className="text-white font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 login-button">
                            <Link to="/login">Se connecter</Link>
                        </button>
                    </div>
                </div>
            </nav>
            <hr/>
        </header>
    )
}