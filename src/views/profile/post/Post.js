import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MEDIA_URL, PJ_URL, SERVER_URL } from "../../../utils/URL";
import Icon from "../../../components/icon/Icon";
import {
    CommentsFilledIcone,
    CommentsIcone,
    etiquetteIcon,
    LikeFilledIcon,
    LikeIcon
} from "../../../components/icon/IconeFile";
import FileTitle from "../../NewPost";
import axios from "axios";
import {usePostStore} from "../../../store/PostStore";

export const Post = () => {
    const [isLiked, setIsLiked] = useState(false);
    const [isComment, setIsComment] = useState(false);
    const { postId } = useParams();
    const [post, setPost] = useState();
    const {posts} = usePostStore()

    useEffect(() => {
        const postprime = posts.find(post => post.id === postId)
        setPost(postprime)
    }, []);

    const defaultAvatarSrc = '/default.jpg';

    const downloadFile = (file) => {
        axios.get(SERVER_URL + `/download/file/${file}`)
            .then(r => {
                window.open(r.data.file_path, "_blank");
                console.log(r)
            })
            .catch(e => {
                console.error(e)
            });
    }

    const isImageFile = (title) => {
        const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg']; // Add more if needed
        const fileExtension = title.split('.').pop().toLowerCase();
        return imageExtensions.includes(fileExtension);
    };

    const handleCommentClick = () => {
        setIsComment(!isComment);
    }

    return (
        <>
            <div className="post-card">
                <div className="flex items-center top">
                    <div className="profil-actu">
                        <img src={MEDIA_URL + post?.user.path} alt="profil" className="profile-home"
                             onError={(e) => {
                                 e.target.src = defaultAvatarSrc;
                             }} />
                    </div>
                    <div className="ml-2 designUser">
                        <div className="pseudo-user">
                            <p className="text-gray-100 font-semibold">{post?.user.raisonSocial ? post?.user.raisonSocial : post?.user.lastname + " " + post?.user.firstname}</p>
                        </div>
                        <div className="flex items-center text-gray-700 etiquette">
                            <Icon icon={etiquetteIcon} />
                            <p>{post?.user.role[0]}</p>
                        </div>
                    </div>
                </div>
                <div className="post my-4 ml-10">
                    <Link to={`/user/post/${post.id}`}>
                        <div className="design-post text-gray-400">
                            <h2 className="text-xl font-bold">{post?.title}</h2>
                            <p>{post?.description}</p>
                        </div>
                    </Link>
                    <div className="my-4 contenu">
                        {post?.piecesJointe.map((pj, index) => (
                            <div onClick={() => downloadFile(pj.piecesJointe)} key={index}>
                                {isImageFile(pj.piecesJointe) ? (
                                    <img src={PJ_URL + pj.piecesJointe} alt="contenu" className="pj-picture" />
                                ) : (
                                    <FileTitle title={pj.piecesJointe} />
                                )}
                            </div>
                        ))}
                    </div>

                </div>
                <div className="reaction">
                    <button className="like">
                        <Icon icon={isLiked ? LikeFilledIcon : LikeIcon} className="text-gray-500 mx-5" />
                    </button>
                    <Link to={`/user/post/${post.id}`}>
                        <button className="comment">
                            <Icon icon={isComment ? CommentsFilledIcone : CommentsIcone}
                                  className="text-gray-500 mx-3" />
                        </button>
                    </Link>
                </div>
                <div className="line-under-navbar mt-4"></div>
                <div className="text-xs text-white opacity-40">{post?.comments?.length} Commentaires</div>
            </div>
        </>
    )
}
