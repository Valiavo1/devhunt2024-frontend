import React, {useEffect, useState} from "react";
import logoENI from "../assets/logoEni.png";
import Icon from "../components/icon/Icon";
import {
  CommentsIcone,
  LikeIcon,
  etiquetteIcon,
  LikeFilledIcon,
  CommentsFilledIcone
} from "../components/icon/IconeFile";
import {usePostStore} from "../store/PostStore";
import axios from "axios";
import {MEDIA_URL, PJ_URL, SERVER_URL} from "../utils/URL";
import {Link} from "react-router-dom";
import FileTitle from "./NewPost";
import {Post} from "./profile/post/Post";
export const Home = () => {
  const [showPost, setShowPost] = useState(false)
  const [selectedPost, setSelectedPost] = useState()
  const [isLiked, setIsLiked] = useState(false);
  const [isComment, setIsComment] = useState(false);
  const defaultAvatarSrc = '/default.jpg'
  const handleCommentClick = (post) => {
    setShowPost(true)
    setSelectedPost(post)
  }
  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  const {fetchPost, posts} = usePostStore()

  useEffect(() => {
    fetchPost()
  }, []);
  return (
      <div className="relative w-full">
        {
          posts.map((post, index) => (
              <div key={index}>
                <div className="post-card">
                  <div className="flex items-center top">
                    <div className="profil-actu">
                      <img src={MEDIA_URL + post.user.path} alt="profil" className="profile-home"
                           onError={(e) => {
                             e.target.src = defaultAvatarSrc;
                           }}/>
                    </div>
                    <div className="ml-2 designUser">
                      <div className="pseudo-user">
                        <p className="text-gray-100 font-semibold">{post.user.raisonSocial ? post.user.raisonSocial : post.user.lastname + " " + post.user.firstname}</p>
                      </div>
                      <div className="flex items-center text-gray-500 etiquette">
                        <Icon icon={etiquetteIcon}/>
                        <p>{post.user.role[0]}</p>
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
                                  <img src={PJ_URL + pj.piecesJointe} alt="contenu" className="pj-picture"/>
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
                      <Icon icon={isLiked ? LikeFilledIcon : LikeIcon} className="text-gray-500 mx-5"/>
                    </button>
                    <button className="comment" onClick={() => handleCommentClick(post)}>
                      <Icon icon={isComment ? CommentsFilledIcone : CommentsIcone}
                            className="text-gray-500 mx-3"/>
                    </button>
                  </div>
                  <div className="text-xs text-white opacity-40">{post.comments?.length} Commentaires</div>
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
                <Post post={selectedPost} />
            </div>
        )}
      </div>
  )
}

const isImageFile = (title) => {
  const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg']; // Add more if needed
  const fileExtension = title.split('.').pop().toLowerCase();
  return imageExtensions.includes(fileExtension);
};

export const downloadFile = async (file) => {
  try {
    const response = await axios({
      url: `${SERVER_URL}/download/file/${file}`,
      method: 'GET',
      responseType: 'blob',
    });

    const blob = new Blob([response.data]);
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement('a')
    link.href = url;
    link.setAttribute('download', file)
    link.click()
  } catch (error) {
    console.error('Download error:', error)
  }
}