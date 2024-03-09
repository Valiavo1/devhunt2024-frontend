import React, {useEffect, useState} from "react";
import Icon from "../components/icon/Icon";
import {
    CommentsFilledIcone,
    CommentsIcone,
    etiquetteIcon,
    LikeFilledIcon,
    LikeIcon,
    searchIcon
} from "../components/icon/IconeFile";
import axios from "axios";
import {MEDIA_URL, PJ_URL, SERVER_URL} from "../utils/URL";
import FileTitle from "./NewPost";
import {Post} from "./profile/post/Post";
import {downloadFile, formatDate, isImageFile} from "./Home";

export const Search = () => {
    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState('')
    const [typeFiltre, setTypeFiltre] = useState('isAll')
    const defaultAvatarSrc = '/default.jpg'
    const [isLiked, setIsLiked] = useState(false);
    const [isComment, setIsComment] = useState(false)
    const [showPost, setShowPost] = useState(false)
    const [selectedPost, setSelectedPost] = useState()

    useEffect(() => {
        axios.get(SERVER_URL + `/filter/${typeFiltre}/${search}`)
            .then(r => {
                setPosts(r.data)
            })
            .catch(e => {
                console.error(e)
                setPosts([])
            })
    }, [search, typeFiltre]);

    const handleCommentClick = (post) => {
        setShowPost(true)
        setSelectedPost(post)
    }
    const handleLikeClick = () => {
        setIsLiked(!isLiked);
    };

    return (
        <>
            <div className="mt-3" onChange={(e) => setTypeFiltre(e.target.value)}>
                <select className="filtre-select">
                    <option value="isAll">Tout</option>
                    <option value="isImmobilier">Immobilier</option>
                    <option value="isEntreprise">Entreprise</option>
                    <option value="isMateriel">Matériel</option>
                    <option value="isElder">Ancien</option>
                    <option value="isClub">Club</option>
                    <option value="isEnseignant">Enseignant</option>
                    <option value="isAdministration">Administration</option>
                    <option value="isNovice">Novice</option>
                </select>
            </div>

            <form className="flex items-center max-w-sm mx-auto mb-5">
                <label htmlFor="simple-search" className="sr-only">Search</label>
                <div className="relative w-full">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <Icon icon={searchIcon}/>
                    </div>
                    <input type="text" id="simple-search"
                           value={search}
                           onChange={(e) => {
                               setSearch(e.target.value)
                           }}
                           className=" border text-gray-200 text-sm rounded-lg  block w-full ps-10 p-2.5 bg-transparent outline-none "
                           placeholder="Rechercher..." required/>
                </div>

            </form>
            {posts && (
                <>
                    <div className="relative w-full">
                        {
                            posts.map((post, index) => (
                                <div key={index}>
                                    <div className="post-card">
                                        <div className="flex items-center top">
                                            <div className="profil-actu">
                                                <img src={MEDIA_URL + post?.user?.path} alt="profil"
                                                     className="profile-home"
                                                     onError={(e) => {
                                                         e.target.src = defaultAvatarSrc;
                                                     }}/>
                                            </div>
                                            <div className="ml-2 designUser w-full">
                                                <div className="w-full flex justify-between">
                                                    <div className="pseudo-user">
                                                        <p className="text-gray-100 font-semibold">{post?.user?.raisonSocial ? post?.user?.raisonSocial : post?.user?.lastname + " " + post?.user?.firstname}</p>
                                                    </div>
                                                    <div className="text-gray-200">
                                                        {formatDate(post?.createdAt.date)}
                                                    </div>
                                                </div>
                                                <div className="flex items-center text-gray-500 etiquette">
                                                    <Icon icon={etiquetteIcon}/>
                                                    <p>{post?.user?.role[0]}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post my-4 ml-10">
                                            <div className="design-post text-gray-400">
                                                <h2 className="text-xl font-bold">{post.title}</h2>
                                                <p>{post.description}</p>
                                            </div>
                                            <div className="my-4 contenu text-white">
                                                {post?.piecesJointe?.map((pj, index) => (
                                                    <div onClick={() => downloadFile(pj.piecesJointe)}>
                                                        <React.Fragment key={index}>
                                                            {isImageFile(pj.piecesJointe) ? (
                                                                <img src={PJ_URL + pj.piecesJointe} alt="contenu"
                                                                     className="pj-picture"/>
                                                            ) : (
                                                                <FileTitle title={pj.piecesJointe}/>
                                                            )}
                                                        </React.Fragment>
                                                    </div>
                                                ))}
                                            </div>

                                        </div>
                                        <div className="reaction">
                                            <button className="like" onClick={handleLikeClick}>
                                                <Icon icon={isLiked ? LikeFilledIcon : LikeIcon}
                                                      className="text-gray-500 mx-5"/>
                                            </button>
                                            <button className="comment" onClick={() => handleCommentClick(post)}>
                                                <Icon icon={isComment ? CommentsFilledIcone : CommentsIcone}
                                                      className="text-gray-500 mx-3"/>
                                            </button>
                                        </div>
                                        <div
                                            className="text-xs text-white opacity-40">{post.comments?.length} Commentaires
                                        </div>
                                        <div className="line-under-navbar mt-4"></div>
                                    </div>
                                </div>
                            ))
                        }
                        {showPost && (
                            <div
                                className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70"
                                onClick={() => setShowPost(false)}
                            >
                                <Post post={selectedPost} setSelectedPost={setSelectedPost} />
                            </div>
                        )}
                    </div>
                </>
            )}
        </>
    )
}