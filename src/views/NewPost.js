import React, { useState } from "react";
import logoENI from "../assets/logoEni.png";
import Icon from "../components/icon/Icon";
import { ajoutPieces, gif, tag, listIcon } from "../components/icon/IconeFile";

export const NewPost = () => {
  const [content, setContent] = useState('');
  const [attachments, setAttachments] = useState([]);
  const [gifs, setGifs] = useState([]);
  const [tags, setTags] = useState([]);
  const [types, setTypes] = useState([]);

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };
  const handleGif= (gif) => {
    setGifs([...gifs, gif]);
  };
  const handleTag = (tag) => {
    setTags([...tags, tag]);
  };
  const handleType = (type) => {
    setTypes([...types, type]);
  };
  const handleAttachment = (attachment) => {
    setAttachments([...attachments, attachment]);
  };

  const handleSubmit = () => {
    // Combine le contenu et les pièces jointes pour le post
    const attachmentsContent = attachments.length > 0 ? `\n\nPièces jointes:\n${attachments.join("\n")}` : "";
    const postContent = `${content}${attachmentsContent}`;

    // Logique pour soumettre le nouveau post ici
    console.log('Contenu du post:', postContent);

    // Réinitialiser le champ après la soumission
    setContent('');
    setAttachments([]);
    setTags([]);
    setTypes([]);
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <div className="items-center">
        <h1 className="text-l text-gray-400 font-bold mb-4 items-center">Nouveau post</h1>
      </div>
      <div className="mb-4 border border-gray-300 rounded-lg p-4" style={{ position: "relative" }}>
        <div className="flex items-center">
          <div className="mr-8 mt-1">
            <img src={logoENI} alt="profil" className="h-10" />
          </div>
          <div>
            <div className="mb-2">
              <h1 className="text-xl font-semibold text-gray-400">Ainasoa</h1>
            </div>
            <div>
             <textarea
               id="content"
               name="content"
               rows="6" // Nombre de lignes
               className="mt-1 block w-200 sm:w-full shadow-sm sm:text-sm rounded-md bg-transparent text-gray-500 placeholder-gray-500 placeholder-opacity-50 outline-none"
               placeholder="Nouveau post"
               value={content}
               onChange={handleContentChange}
             ></textarea>

            </div>
            <div className="mt-4 flex justify-center">
              <button className="m-2" onClick={() => {handleAttachment("Piece jointe 1");
                console.log("Bouton Pièce jointe cliqué")}}>
                <Icon icon={ajoutPieces} className="w-6 h-6 text-white" />
              </button>
              <button className="m-2" onClick={() => {handleGif("Gif 1");
              console.log()}}>
                <Icon icon={gif} className="w-6 h-6 text-white" />
              </button>
              <button className="m-2" onClick={() => handleTag("Tag 1")}>
                <Icon icon={tag} className="w-6 h-6 text-white" />
              </button>
              <button className="m-2" onClick={() => handleType("Type 1")}>
                <Icon icon={listIcon} className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-right">
        <button
          type="button"
          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-[#98c71b] hover:bg-[#87B016] border border-transparent rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#87B016] focus-visible:ring-[#87B016]!important"
          onClick={handleSubmit}
        >
          Publier
        </button>
      </div>
    </div>
  )
}
