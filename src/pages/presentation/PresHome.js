import React from "react";
import {Link} from "react-router-dom";
import Icon from "../../components/icon/Icon";
import {DownloadIcon, Maddle, RightArrow} from "../../components/icon/IconeFile";
import team from "../../assets/myteam.png";
import {downloadFile} from "../../views/Home";

export const PresHome = () => {
    return (
        <>
            <div className="flex flex-wrap justify-between mx-auto max-w-screen-lg mt-20">
                <div className="w-full px-3 md:px-0 md:w-8/12 flex flex-col text-white">
                    <div>
                        <h1 className="text-5xl font-bold mb-10 mt-5">Ensemble, nous prospérons</h1>
                        <p className="text-xl leading-relaxed mb-8 md:w-3/4">
                            <span className="green-text">Maddle</span> est une plateforme d'échange conçue pour
                            faciliter les interactions
                            entre les étudiants, les enseignants, les clubs et les partenaires au sein de l'ENI. Son
                            objectif principal est de répondre efficacement aux besoins des étudiants, en particulier
                            ceux qui sont novices.
                        </p>
                    </div>
                    <Link className="z-50" to="/login">
                        <div
                            className="login-primary-button ml-5 text-center w-4/5 md:w-1/3 flex flex-row items-center justify-evenly">
                            Se Connecter
                            <Icon icon={RightArrow}/>
                        </div>
                    </Link>
                    <div className="mt-5 w-full flex ml-8 text-[#87B016] cursor-pointer z-50" onClick={() => downloadFile('presentationENI.pdf')}>
                        <p className="text-[#87B016] mr-2 cursor-pointer">Télécharger la presentation de l'ENI</p>
                        <Icon icon={DownloadIcon}/>
                    </div>
                </div>
                <div className="hidden md:w-4/12 md:block"/>
                <div className="w-full md:w-5/12 md:-mt-80 z-10"/>
                <div className="w-full md:w-7/12 md:-mt-80">
                    <img src={team} alt={"team"} className="w-full"/>
                </div>
            </div>

        </>
    )
}