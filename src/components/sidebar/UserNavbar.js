import React, {useState} from "react";
import logo from "../../assets/maddle-logo.png";
import {Link, useLocation} from "react-router-dom";
import Icon from "../icon/Icon";
import {
    AddNewIcon,
    HeartFilledIcon,
    HeartIcon,
    HomeFilledIcon,
    HomeIcon, ProfileFilledIcon,
    ProfileIcon,
    SearchIcon,
    LogoutIcon
} from "../icon/IconeFile";
import {useAuthStore} from "../../store/AuthStore";

export const UserNavbar = () => {
    const location = useLocation()
    const {logout} = useAuthStore()

    return (
        <header>
            <nav className="navbar px-4 lg:px-8 py-6 lg:py-6">
                <div className="flex flex-row  justify-around items-center mx-auto max-w-screen-xl">
                    <div className="flex items-center justify-center w-5/12">
                        <Link to="/" className="flex">
                            <img src={logo} className="mr-3 h-6 sm:h-9" alt="Maddle Logo"/>
                            <span
                                className="w-0 md:w-auto opacity-0 md:opacity-100 self-center text-xl font-semibold whitespace-nowrap text-white">Maddle</span>
                        </Link>
                    </div>
                    <div className="flex justify-center items-center lg:flex lg:w-auto" id="mobile-menu-2">
                        <ul className="flex flex-row mt-4 font-medium lg:space-x-16 lg:mt-0 text-white space-x-4">
                            <li>
                                {location.pathname === "/user/home" ? (
                                    <Link to="/user/home">
                                        <Icon icon={HomeFilledIcon}/>
                                    </Link>
                                ) : (
                                    <Link to="/user/home" className="opacity-40">
                                        <Icon icon={HomeIcon}/>
                                    </Link>
                                )
                                }
                            </li>
                            <li>
                                {location.pathname === "/user/search" ? (
                                    <Link to="/user/search">
                                        <Icon icon={SearchIcon}/>
                                    </Link>
                                ) : (
                                    <Link to="/user/search" className="opacity-40">
                                        <Icon icon={SearchIcon}/>
                                    </Link>
                                )
                                }
                            </li>
                            <li>
                                {location.pathname === "/user/new" ? (
                                    <Link to="/user/new">
                                        <Icon icon={AddNewIcon}/>
                                    </Link>
                                ) : (
                                    <Link to="/user/new" className="opacity-40">
                                        <Icon icon={AddNewIcon}/>
                                    </Link>
                                )
                                }
                            </li>
                            <li>
                                {location.pathname === "/user/activy" ? (
                                    <Link to="/user/activy">
                                        <Icon icon={HeartFilledIcon}/>
                                    </Link>
                                ) : (
                                    <Link to="/user/activy" className="opacity-40">
                                        <Icon icon={HeartIcon}/>
                                    </Link>
                                )
                                }
                            </li>
                            <li>
                                {location.pathname === "/user/profile" ? (
                                    <Link to="/user/profile">
                                        <Icon icon={ProfileFilledIcon}/>
                                    </Link>
                                ) : (
                                    <Link to="/user/profile" className="opacity-40">
                                        <Icon icon={ProfileIcon}/>
                                    </Link>
                                )
                                }
                            </li>
                        </ul>
                    </div>
                    <div className="flex justify-center items-center w-5/12">
                        <div className="opacity-40 text-white cursor-pointer hover:opacity-100" onClick={logout}>
                            <Icon icon={LogoutIcon}/>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}