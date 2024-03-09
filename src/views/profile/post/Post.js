import React, {useEffect, useRef, useState} from "react";
import { Link, useParams } from "react-router-dom";
import { MEDIA_URL, PJ_URL, SERVER_URL } from "../../../utils/URL";
import Icon from "../../../components/icon/Icon";
import {
    ajoutPieces,
    CommentsFilledIcone,
    CommentsIcone,
    etiquetteIcon,
    LikeFilledIcon,
    LikeIcon, listIcon, tag
} from "../../../components/icon/IconeFile";
import FileTitle from "../../NewPost";
import axios from "axios";
import {usePostStore} from "../../../store/PostStore";
import {downloadFile} from "../../Home";

export const Post = ({post}) => {
    const fileInputRef = useRef(null);
    const [isLiked, setIsLiked] = useState(false);
    const [isComment, setIsComment] = useState(false)
    const [content, setContent] = useState('');
    const [attachments, setAttachments] = useState([]);

    const defaultAvatarSrc = '/default.jpg';

    const isImageFile = (title) => {
        const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg']; // Add more if needed
        const fileExtension = title.split('.').pop().toLowerCase();
        return imageExtensions.includes(fileExtension);
    };

    const handleCommentClick = () => {
        setIsComment(!isComment);
    }

    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    const handleAttachmentChange = () => {
        const files = fileInputRef.current.files;
        setAttachments([...attachments, ...files]);
    };
    
    const handleSubmit = () => {
        const formData = new FormData();
        formData.append("json_data", JSON.stringify({
            designation : content,
            post_id : post.id,
            user_id: localStorage.getItem('user_id')
        }));

        formData.append("pieceJointes", attachments[0]);

        axios.post(SERVER_URL + `/comment`, formData)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            })
    } 

    return (
        <>
            <div className="post-card w-1/2 post-modal border-2 border-opacity-40 rounded-2xl p-10 bg-[#0B1215]"
                 onClick={(e) => e.stopPropagation()}>
                <div className={"flex justify-around h-full"}>
                    <div className={"w-2/3"}>
                        <div className="flex items-center top">
                            <div className="profil-actu">
                                <img src={MEDIA_URL + post?.user.path} alt="profil" className="profile-home"
                                     onError={(e) => {
                                         e.target.src = defaultAvatarSrc;
                                     }}/>
                            </div>
                            <div className="ml-2 designUser">
                                <div className="pseudo-user">
                                    <p className="text-gray-100 font-semibold">{post?.user.raisonSocial ? post?.user.raisonSocial : post?.user.lastname + " " + post?.user.firstname}</p>
                                </div>
                                <div className="flex items-center text-gray-700 etiquette">
                                    <Icon icon={etiquetteIcon}/>
                                    <p>{post?.user.role[0]}</p>
                                </div>
                            </div>
                        </div>
                        <div className="post my-4 ml-10">
                            <div className="design-post text-gray-400">
                                <h2 className="text-xl font-bold">{post?.title}</h2>
                                <p>{post?.description}</p>
                            </div>
                            <div className="my-4 contenu text-white">
                                {post?.piecesJointe.map((pj, index) => (
                                    <div onClick={() => downloadFile(pj.piecesJointe)} key={index}>
                                        {isImageFile(pj.piecesJointe) ? (
                                            <img src={PJ_URL + pj.piecesJointe} alt="contenu" className="pj-picture"/>
                                        ) : (
                                            <FileTitle title={pj.piecesJointe}/>
                                        )}
                                    </div>
                                ))}
                            </div>

                        </div>
                        <div className="reaction my-4">
                            <button className="like">
                                <Icon icon={isLiked ? LikeFilledIcon : LikeIcon} className="text-gray-500 mx-5"/>
                            </button>
                            <button className="comment">
                                <Icon icon={isComment ? CommentsFilledIcone : CommentsIcone}
                                      className="text-gray-500 mx-3"/>
                            </button>
                        </div>
                        <div className="text-xs text-white opacity-40 ml-5 mt-3">{post?.comments?.length} Commentaires
                        </div>
                    </div>
                    <div className={"line-cloison"}></div>
                    <div className={"w-1/3 comment-in-post overflow-auto"}>
                        {post.comments.map((comment, index) => (

                            )
                        ))}
                        <div className={"comment-post"}>
                            <div>
                                <div className="flex items-center top">
                                    <div className="profil-actu">
                                        <img src={MEDIA_URL + post?.user.path} alt="profil" className="profile-post"
                                             onError={(e) => {
                                                 e.target.src = defaultAvatarSrc;
                                             }}/>
                                    </div>
                                    <div className="ml-2 designUser">
                                        <div className="pseudo-user">
                                            <p className="text-gray-100 text-sm font-semibold">{post?.user.raisonSocial ? post?.user.raisonSocial : post?.user.lastname + " " + post?.user.firstname}</p>
                                        </div>
                                        <div className="flex text-xs items-center text-gray-700 etiquette">
                                            <Icon icon={etiquetteIcon}/>
                                            <p>{post?.user.role[0]}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="post my-4 ml-10">
                                    <div className="design-post text-gray-400">
                                        <p className="text-sm">{post?.description}</p>
                                    </div>
                                    <div className="my-4 contenu text-white">
                                        {post?.piecesJointe?.map((pj, index) => (
                                            <div onClick={() => downloadFile(pj.piecesJointe)} key={index}>
                                                {isImageFile(pj.piecesJointe) ? (
                                                    <img src={PJ_URL + pj.piecesJointe} alt="contenu"
                                                         className="pj-picture"/>
                                                ) : (
                                                    <FileTitle title={pj.piecesJointe}/>
                                                )}
                                            </div>
                                        ))}
                                    </div>

                                </div>
                                <div className="reaction my-4">
                                    <button className="like">
                                        <Icon icon={isLiked ? LikeFilledIcon : LikeIcon}
                                              className="text-gray-500 mx-5"/>
                                    </button>
                                </div>
                                <div
                                    className="text-xs text-white opacity-40 ml-5 mt-3">{post?.comments?.length} Appréciations
                                </div>
                            </div>
                        </div>
                        <div className="line-under-navbar mt-4"></div>
                        <div className="comment-field">
                            <textarea
                                id="content"
                                name="content"
                                rows={Math.min(Math.ceil(content.length / 30) + content.split('\n').length, 5)}
                                className="text-white mb-3 w-full mt-1 block shadow-sm sm:text-sm rounded-md bg-transparent placeholder-gray-500 placeholder-opacity-50 outline-none"
                                placeholder="Nouveau post"
                                value={content}
                                onChange={handleContentChange}
                            />
                            <div className="flex flex-wrap text-white">
                                {attachments.map((file, index) => (
                                    <div key={index} className="m-2">
                                        {file.type.startsWith('image/') ? (
                                            <img src={URL.createObjectURL(file)} alt={file.name}
                                                 className="max-w-[200px] max-h-[200px]"/>
                                        ) : (
                                            <FileTitle title={file.name}/>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <button
                                className="m-2 cursor-pointer"
                                onClick={() => fileInputRef.current.click()}
                            >
                                <Icon icon={ajoutPieces} className="w-6 h-6 text-white"/>
                            </button>
                            <button className="m-2">
                                <Icon icon={tag} className="w-6 h-6 text-white"/>
                            </button>
                            <button className="m-2">
                                <Icon icon={listIcon} className="w-6 h-6 text-white"/>
                            </button>
                            <input
                                type="file"
                                className="hidden"
                                onChange={handleAttachmentChange}
                                ref={fileInputRef}
                                multiple
                                name="attachmentInput"
                            />
                        </div>
                        <div className="flex w-full justify-end">
                            <button
                                type="button"
                                className="mt-3 button-comment"
                                onClick={handleSubmit}
                            >
                                Publier
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
