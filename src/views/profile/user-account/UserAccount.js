import React, { useState } from 'react';
import {UserPost} from "./UserPost";
import {UserInscription} from "./UserInscription";
import {UserLike} from "./UserLike";
import {UserInfo} from "./UserInfo";
import {Post} from "../post/Post";
import {useAuthStore} from "../../../store/AuthStore";
import FlashMessage from "../../../components/flashMessage/FlashMessage";

export const UserAccount = () => {
    const [activeTab, setActiveTab] = useState('post');
    const [showModal, setShowModal] = useState(false)
    const { user } = useAuthStore();

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const editProfile = () => {
        setShowModal(true)
    }

    return (
        <>
            <div className="w-full">
                <UserInfo editProfile={editProfile}/>
            </div>

            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
                <ul className="flex flex-wrap -mb-px w-full">
                    <li className="flex-1 me-3 cursor-pointer">
                        <div
                            onClick={() => handleTabClick('post')}
                            className={`inline-block p-4 rounded-t-lg ${activeTab === 'post' ? 'border-[#87B016] text-[#87B016] border-b-2' : ''} w-full dark:hover:text-gray-300  hover:border-gray-300`}>
                            Post
                        </div>
                    </li>
                    <li className="flex-1 me-3 cursor-pointer">
                        <div
                            onClick={() => handleTabClick('inscription')}
                            className={`inline-block p-4 rounded-t-lg ${activeTab === 'inscription' ? 'border-[#87B016] text-[#87B016] border-b-2' : ''} w-full dark:hover:text-gray-300  hover:border-gray-300`}>
                            Inscription
                        </div>
                    </li>
                    <li className="flex-1 me-3 cursor-pointer">
                        <div
                            onClick={() => handleTabClick('like')}
                            className={`inline-block p-4 rounded-t-lg ${activeTab === 'like' ? 'border-[#87B016] text-[#87B016] border-b-2' : ''} w-full dark:hover:text-gray-300  hover:border-gray-300`}>
                            Like
                        </div>
                    </li>
                </ul>
            </div>

            {activeTab === 'post' && (
                <div className="mt-5">
                    <UserPost/>
                </div>
            )}
            {activeTab === 'inscription' && (
                <div className="mt-5">
                    <UserInscription/>
                </div>
            )}
            {activeTab === 'like' && (
                <div className="mt-5">
                    <UserLike/>
                </div>
            )}

            {showModal && (
                <div
                    className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70"
                    onClick={() => setShowModal(false)}
                >
                    <ModalProfile user={user} />
                </div>
            )}
        </>
    );
};


const ModalProfile = ({user}) => {
    const defaultAvatarSrc = '/default.jpg'
    const handleSubmit = () => {

    }

    return (
        <div
            style={{overflow: 'auto'}}
            className="post-card w-1/3 post-modal border-2 text-white border-opacity-40 rounded-2xl p-10 bg-[#0B1215] flex flex-col space-y-5"
            onClick={(e) => e.stopPropagation()}>
            <div className="w-full flex items-center justify-center flex-col space-y-2">
                <img
                    src={user?.path}
                    alt="user avatar"
                    onError={(e) => {
                        e.target.src = defaultAvatarSrc;
                    }}
                    className="user-avatar"
                />
                <p className="text-xs text-center w-auto px-2 bg-role rounded-2xl py-1">{user?.role[0] ? user.role[0] : 'Default'}</p>
            </div>
            <div className="flex text-xs flex-col space-y-1">
                <p>Nom</p>
                <input value={user?.nom} type="text" className="input-edit-profile w-full"/>
            </div>
            <div className="flex text-xs flex-col space-y-1">
                <p>Prénoms</p>
                <input value={user?.prenom} type="text" className="input-edit-profile w-full"/>
            </div>
            <div className="flex text-xs flex-col space-y-1">
                <p>Mot de passe</p>
                <input type="password" placeholder="Mot de passe actuel" className="input-edit-profile w-full"/>
            </div>
            <div className="flex text-xs flex-col space-y-1">
                <p>Nouveau mot de passe</p>
                <input type="password" placeholder="Nouveau mot de passe" className="input-edit-profile w-full"/>
            </div>
            <div className="flex text-xs flex-col space-y-1">
                <p>Répétez le nouveau mot de passe</p>
                <input type="password" placeholder="Répétez le mot de passe" className="input-edit-profile w-full"/>
            </div>
            <div className="flex w-full justify-end">
                <button
                    type="button"
                    className="mt-3 button-comment"
                    onClick={handleSubmit}
                >
                    Editer
                </button>
            </div>
        </div>
    )
}