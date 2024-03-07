import React from "react";
import Icon from "../components/icon/Icon";
import {searchIcon} from "../components/icon/IconeFile";

export const Search = () => {
    return (
        <>

          <form className="flex items-center max-w-sm mx-auto">
            <label htmlFor="simple-search" className="sr-only">Search</label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <Icon icon={searchIcon}/>
              </div>
              <input type="text" id="simple-search"
                     className=" border text-gray-200 text-sm rounded-lg  block w-full ps-10 p-2.5 bg-transparent outline-none "
                     placeholder="Rechercher..." required/>
            </div>

          </form>

        </>
    )
}