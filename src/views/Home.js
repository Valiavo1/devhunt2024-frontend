import React,{useState} from "react";
import logoENI from "../assets/logoEni.png";
import Icon from "../components/icon/Icon";
import {
  CommentsIcone,
  LikeIcon,
  etiquetteIcon,
  LikeFilledIcon,
  CommentsFilledIcone
} from "../components/icon/IconeFile";
import Filters from "./profile/user-account/Filters";
export const Home = () => {
  const [isLiked, setIsLiked] = useState(false);
const [isComment, setIsComment] = useState(false);
const handleCommentClick = () => {
  setIsComment(!isComment);
}
  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };
    return (
        <>
          <form className="max-w-xs mb-5 relative bg-transparent">
            <select
                    className="border border-gray-600 text-white text-xs rounded-lg inline-block p-2 -mt-10 bg-transparent">
              <option selected style={{background: '#0b1215'}}>Tout</option>
              <option value="entreprise" style={{background: '#0b1215'}}>Entreprise</option>
              <option value="immobilier" style={{background: '#0b1215'}}>Immobilier</option>
              <option value="aîné" style={{background: '#0b1215'}}>Aînés</option>
              <option value="enseignant" style={{background: '#0b1215'}}>Enseignant</option>
              <option value="club" style={{background: '#0b1215'}}>Club</option>
              <option value="cercle d'etude" style={{background: '#0b1215'}}>Cercle d'étude</option>
            </select>
          </form>
          <div className="post-card">
              <div className="flex items-center top">
                <div className="profil-actu">
                  <img src={logoENI} alt="profil" className="w-10 h-10"/>

                </div>
                <div className="ml-8 designUser">
                  <div className="pseudo-user">
                    <p className="text-gray-100 font-semibold">Ainasoa</p>
                  </div>
                  <div className="flex items-center text-gray-700 etiquette">
                    <Icon icon={etiquetteIcon} />
                    <p>Admin</p>
                  </div>
                </div>
              </div>
              <div className="post my-8">
                <div className="design-post text-gray-400">
                  <p>Cours blabla lorem ipsumvjjf, gfjkvkkujcrxjk hvjcfxhjk; xhc,jvfx,,gxgxg</p>
                </div>
                <div className="my-8 contenu">
                  <img src={logoENI} alt="contenu" className="w-80 h-80" />
                </div>
              </div>
              <div className="reaction">
                <button className="like" onClick={handleLikeClick}>
                  <Icon icon={isLiked ? LikeFilledIcon : LikeIcon} className="text-gray-500 mx-5" />
                </button>
                <button className="comment" onClick={handleCommentClick}>
                  <Icon icon={isComment ? CommentsFilledIcone : CommentsIcone} className="text-gray-500 mx-3" />
                </button>
              </div>
              <div className="line-under-navbar mt-4"></div>

            </div>
        </>
    )
}