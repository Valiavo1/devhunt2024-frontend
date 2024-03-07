import React, { useState, useRef } from "react";
import Icon from "../components/icon/Icon";
import { ajoutPieces, tag, listIcon } from "../components/icon/IconeFile";
import {usePostStore} from "../store/PostStore";

export const NewPost = () => {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [attachments, setAttachments] = useState([]);
  const fileInputRef = useRef(null);

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleAttachmentChange = () => {
    const files = fileInputRef.current.files;
    setAttachments([...attachments, ...files]);
  };

  const handleSubmit = () => {
    addPost(title, content, "novice", attachments)
    console.log(title, content, attachments)

    setContent('');
    setTitle('');
    setAttachments([]);
  };

  const  {addPost} = usePostStore()

  return (
      <div className="w-full mx-auto px-4 py-8 overflow-auto">
        <div className="items-center">
          <h1 className="text-l text-gray-400 font-bold mb-4 items-center">Nouveau post</h1>
        </div>
        <div className="mb-4 w-full border border-gray-300 rounded-lg p-4" style={{ position: "relative" }}>
          <div className="flex w-full items-center">
            <div>
              <div className="mb-2 w-full">
                <h1 className="w-full text-xl font-semibold text-gray-400">Ainasoa</h1>
              </div>
              <div className="w-full">
                <input type={"text"} className={"w-full px-5"} placeholder={"Title"} value={title} onChange={(e) => setTitle(e.target.value)}/>
                <textarea
                    id="content"
                    name="content"
                    rows="10"
                    className="w-full mt-1 block shadow-sm sm:text-sm rounded-md bg-transparent text-gray-500 placeholder-gray-500 placeholder-opacity-50 outline-none"
                    placeholder="Nouveau post"
                    value={content}
                    onChange={handleContentChange}
                ></textarea>
              </div>
              <div className="flex flex-wrap text-white">
                {attachments.map((file, index) => (
                    <div key={index} className="m-2">
                      {file.type.startsWith('image/') ? (
                          <img src={URL.createObjectURL(file)} alt={file.name} className="max-w-[200px] max-h-[200px]"/>
                      ) : (
                          <FileTitle title={file.name}/>
                      )}
                    </div>
                ))}
              </div>
              <div className="mt-4 flex justify-center">
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
  );
};


const FileTitle = ({ title }) => {
  const MAX_TITLE_LENGTH = 12;

  const getShortenedTitle = (title, maxLength) => {
    if (title.length <= maxLength) {
      return title;
    } else {
      return title.substring(0, maxLength) + " ...";
    }
  };

  const getExt = (title) => {
    const fileExtension = title.split('.').pop().toLowerCase();

    switch (fileExtension) {
      case 'ppt':
      case 'pptx':
      case 'pdf':
      case 'xls':
      case 'xlsx':
      case 'doc':
      case 'docx':
        return false;
      default:
        return true;
    }
  };


  const getFileIcon = (title) => {
    const fileExtension = title.split('.').pop().toLowerCase();

    switch (fileExtension) {
      case 'ppt':
      case 'pptx':
        return '/File/PptFile.svg';
      case 'pdf':
        return '/File/PdfFile.svg';
      case 'xls':
      case 'xlsx':
        return '/File/ExcelFile.svg';
      case 'doc':
      case 'docx':
        return '/File/WordFile.svg';
      default:
        return '/File/OtherFile.svg';
    }
  };

  const fileIcon = getFileIcon(title);

  return (
      <div className="file-title">
        <img
            src={process.env.PUBLIC_URL + fileIcon}  // Add PUBLIC_URL to ensure correct path in React app
            alt="file-picture"
        />
        <span className="file-name">{getShortenedTitle(title, MAX_TITLE_LENGTH)}</span>
      </div>
  );
};

export default FileTitle;