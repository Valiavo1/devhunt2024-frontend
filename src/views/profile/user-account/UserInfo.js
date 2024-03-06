import React from "react";
import logoEni from "../../../assets/logoEni.png"

export const UserInfo = () => {
    return (
        <>
            <div className="flex flex-row w-full mx-auto text-white justify-between">
                <div className="w-1/2">
                    <h1 className="text-3xl font-bold mb-10 mt-5">Valiavo</h1>
                </div>
                <div className="w-1/2">
                    <img src={logoEni} alt={"user avatar"} className="user-avatar"/>
                </div>
                <div className="w-full">

                </div>
            </div>
        </>
    )
}