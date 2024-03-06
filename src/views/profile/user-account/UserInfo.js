import React from "react";
import { useAuthStore } from "../../../store/AuthStore";
import { MEDIA_URL } from "../../../utils/URL";

export const UserInfo = () => {
    const { user } = useAuthStore();
    const userAvatarSrc = `${MEDIA_URL}${localStorage.getItem('user_id')}`;
    const defaultAvatarSrc = '/default.jpg'

    return (
        <>
            <div className="flex flex-wrap text-white w-full justify-between items-center">
                <div>
                    <h1 className="text-2xl mb-2 font-bold mt-5">Valiavo</h1>
                    <h3 className="text-sm email-profile mb-5">valiavoandriantsoa30@gmail.com</h3>
                    <h4 className="text-sm email-profile">39 followers</h4>
                </div>
                <div>
                    <img
                        src={userAvatarSrc}
                        alt="user avatar"
                        onError={(e) => {
                            e.target.src = defaultAvatarSrc;
                        }}
                        className="user-avatar"
                    />
                </div>
                <div className="w-full">
                    <div className="w-full rounded edit-profile">Modifier le profil</div>
                </div>
            </div>
        </>
    );
};
