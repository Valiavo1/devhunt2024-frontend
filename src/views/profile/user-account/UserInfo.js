import React from "react";
import { useAuthStore } from "../../../store/AuthStore";
import { MEDIA_URL } from "../../../utils/URL";

export const UserInfo = () => {
    const { user } = useAuthStore();
    const userAvatarSrc = `${MEDIA_URL}${localStorage.getItem('img_user')}`;
    const defaultAvatarSrc = '/default.jpg'

    return (
        <>
            <div className="flex flex-wrap text-center md:text-left mx-auto text-white w-full justify-between items-center">
                <div className="order-2 md:order-1 w-full md:w-auto">
                    <h1 className="text-2xl mb-2 font-bold mt-5">{user?.lastname ? user.lastname : 'ANDRIANTSOA'}</h1>
                    <h2 className="text-xl mb-2 font-bold">{user?.firstname ? user.firstname : 'Valiavo Haja Ny Aina'}</h2>
                    <h3 className="text-sm email-profile mb-5">{user?.email ? user.email : 'valiavoandriantsoa30@gmail.com'}</h3>
                    <h4 className="text-sm email-profile">39 followers</h4>
                </div>
                <div className="flex w-full md:w-auto flex-col order-1 md:order-2 space-y-3 justify-center items-center">
                    <img
                        src={userAvatarSrc}
                        alt="user avatar"
                        onError={(e) => {
                            e.target.src = defaultAvatarSrc;
                        }}
                        className="user-avatar"
                    />
                    <p className="text-xs text-center w-auto px-2 bg-role rounded-2xl py-1">{user?.role[0] ? user.role[0] : 'Default'}</p>
                </div>
                <div className="w-full order-3">
                    <div className="w-full rounded edit-profile">Modifier le profil</div>
                </div>
            </div>
        </>
    );
};
