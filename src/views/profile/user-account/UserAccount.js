import React, { useState } from 'react';
import {UserPost} from "./UserPost";
import {UserInscription} from "./UserInscription";
import {UserLike} from "./UserLike";
import {UserInfo} from "./UserInfo";

export const UserAccount = () => {
    const [activeTab, setActiveTab] = useState('post');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <div>
                <UserInfo/>
            </div>

            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
                <ul className="flex flex-wrap -mb-px w-full">
                    <li className="flex-1 me-3">
                        <div
                            onClick={() => handleTabClick('post')}
                            className={`inline-block p-4 rounded-t-lg ${activeTab === 'post' ? 'border-[#87B016] text-[#87B016] border-b-2' : ''} w-full dark:hover:text-gray-300  hover:border-gray-300`}>
                            Post
                        </div>
                    </li>
                    <li className="flex-1 me-3">
                        <div
                            onClick={() => handleTabClick('inscription')}
                            className={`inline-block p-4 rounded-t-lg ${activeTab === 'inscription' ? 'border-[#87B016] text-[#87B016] border-b-2' : ''} w-full dark:hover:text-gray-300  hover:border-gray-300`}>
                            Inscription
                        </div>
                    </li>
                    <li className="flex-1 me-3">
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
        </>
    );
};
