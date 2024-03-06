import React from "react";
import Icon from "../../components/icon/Icon";
import {RDIicon, Laptop, CorpsAdmin, CorpsEnseignant,Company,Club} from "../../components/icon/IconeFile";

export const PresAbout = () => {
    return (
        <>
            <div className="flex flex-wrap mx-auto max-w-screen-lg mt-40 justify-around text-white">
                <div className="w-full md:w-5/12 p-5 rounded-lg pres-content">
                    <div className="pres-icon flex items-center justify-center">
                        <Icon icon={RDIicon} className="text-[#0B1215]"/>
                    </div>
                    <div className="mt-2">
                        <p className="font-bold">Partenaire immobilier : </p> <br/>
                        <p className="text-s leading-7">Spécialisée dans le secteur de l'hébergement, proposant aux étudiants novices la possibilité de disposer d'un logement tout au long de leur parcours académique à l'ENI.</p>
                    </div>
                </div>
                <div className="w-full md:w-5/12 mt-20 md:mt-0 p-5 rounded-lg pres-content">
                    <div className="pres-icon flex items-center justify-center">
                        <Icon icon={Laptop} className="text-[#0B1215]"/>
                    </div>
                    <div className="mt-2">
                        <p className="font-bold">Partenaire matériel :</p> <br/>
                        <p className="text-s leading-7">Spécialisée dans le domaine des équipements, offrant aux étudiants, en particulier aux novices, la possibilité d'acquérir les matériels nécessaires tout au long de leurs études afin de faciliter les dépenses et d'éliminer les soucis liés à l'approvisionnement en matériel.
                        </p>
                    </div>
                </div>

            </div>

            <div className="flex flex-wrap mx-auto max-w-screen-lg mt-20 justify-around text-white">
                <div className="w-full md:w-5/12 p-5 rounded-lg pres-content">
                    <div className="pres-icon flex items-center justify-center">
                        <Icon icon={Club} className="text-[#0B1215]"/>
                    </div>
                    <div className="mt-2">
                        <p className="font-bold">Club : </p> <br/>
                        <p className="text-s leading-7">
                            Structures associatives ou organisationnelles au sein de l'ENI, visant à rassembler les étudiants autour d'intérêts communs ou d'activités spécifiques, favorisant ainsi l'échange, le partage d'expériences et le développement personnel et professionnel des membres.</p>
                    </div>
                </div>
                <div className="w-full md:w-5/12 mt-20 md:mt-0 p-10 rounded-lg pres-content">
                    <div className="pres-icon flex items-center justify-center">
                        <Icon icon={CorpsAdmin} className="text-[#0B1215]"/>
                    </div>
                    <div className="mt-2">
                        <p className="font-bold">Corps administratif : </p> <br/>
                        <p className="text-s leading-7">
                            L'ensemble des personnels qui assurent la gestion et le fonctionnement administratif de l'ENI, incluant notamment les responsables des ressources humaines, de la comptabilité, de la logistique, ainsi que les secrétaires et les assistants administratifs.</p>
                    </div>
                </div>
                <div className="flex flex-wrap mx-auto max-w-screen-lg mt-20 justify-around text-white">
                    <div className="w-full md:w-5/12 p-10 rounded-lg pres-content">
                        <div className="pres-icon flex items-center justify-center">
                            <Icon icon={CorpsEnseignant} className="text-[#0B1215]"/>
                        </div>
                        <div className="mt-2">
                            <p className="font-bold">Corps enseignant :  </p>
                            <br/>
                            <p className="text-s leading-7">
                                Désigne l'ensemble des enseignants et des professeurs qui interviennent dans l'enseignement au sein de l'ENI. Cette équipe comprend une variété de membres, y compris les professeurs permanents, les chargés de cours, les assistants pédagogiques et les chercheurs. Leur mission est de dispenser des cours de qualité, de partager leur expertise et de soutenir les étudiants dans leur apprentissage.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-5/12 mt-20 md:mt-0 p-10 rounded-lg pres-content">
                        <div className="pres-icon flex items-center justify-center">
                            <Icon icon={Company} className="text-[#0B1215]"/>
                        </div>
                        <div className="mt-2">
                            <p className="font-bold">Entreprise : </p> <br/>
                            <p className="text-s leading-7">
                                Au sein de l'ENI, les entreprises peuvent jouer un rôle crucial en tant que partenaires académiques ou industriels, offrant ainsi des opportunités de stage, de collaboration en recherche, ou de projet professionnel aux étudiants, contribuant ainsi à leur formation et à leur insertion professionnelle.                            </p>
                        </div>
                    </div>
                    {/* Ajoutez le reste des éléments ici */}
                </div>
            </div>
        </>
    )
}