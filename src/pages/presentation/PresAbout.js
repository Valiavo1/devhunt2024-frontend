import React from "react";

export const PresAbout = () => {
    return (
        <>
            <div className="grid gap-4 grid-cols-3 grid-rows-3">
                <div className="bg-gray-100 p-4 rounded-lg">
                    <h1 className="text-lg font-bold">01.</h1>
                    <div className="mt-2">
                        <p className="font-bold">Bordereau de versement</p>
                        <p className="text-sm">Un bordereau de versement d’un montant du droit d’inscription au concours, au compte N°21 000 135 638 01, Société Générale Madagasikara (ex BFV-SG) Agence de Fianarantsoa, Code 00340. 75 000Ar pour les candidats nationaux y compris les élèves-officiers et 150 000Ar pour les candidats étrangers.</p>
                    </div>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                    <h1 className="text-lg font-bold">02.</h1>
                    <div className="mt-2">
                        <p className="font-bold">Fiche de renseignement</p>
                        <p className="text-sm">Une fiche de renseignements remplie en bonne et due forme (photo, choix de formation, centre de formation, centre d’examen).</p>
                        <a href="/documents/master/FicheRens.pdf" download="" className="block mt-2 text-blue-500">Télécharger la fiche <svg className="inline-block w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg></a>
                    </div>
                </div>
                {/* Ajoutez le reste des éléments ici */}
            </div>

        </>
    )
}