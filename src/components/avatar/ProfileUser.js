import React, {useEffect, useRef, useState} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../icon/Icon';
import {EditPhoto} from '../icon/IconeFile';

const ProfileUser = ({
                       children,
                       className,
                       src: initialSrc,
                       icon,
                       editable,
                       changeProfile,
                       ...rest
                     }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [imageFile, setImageFile] = useState('')
  const fileInputRef = useRef(null);

  const handleHover = () => {
    setIsHovered( !isHovered);
  };

  const handleClick = () => {
    if ( editable ) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    setImageFile(file)
    if ( file ) {
      const imageURL = URL.createObjectURL(file);
      setSelectedImage(imageURL);
      setIsHovered(false);
    }
  };

  const handleFileInputBlur = () => {
    setIsHovered(false);
  };

  const iconStyle = {
    color: 'white',
    opacity: '.9',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
  };

  const containerStyle = {
    position: 'relative',
    display: 'inline-block',
    color: 'black',
    cursor: editable ? 'pointer' : 'auto',
  };

  const buttonStyles = {
    backgroundColor: 'transparent',
    borderRadius: '8px',
    borderStyle: 'none',
    boxSizing: 'border-box',
    color: '#3438c9',
    cursor: 'pointer',
    display: 'inline-block',
    fontFamily: '"Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: '16px',
    fontWeight: '600',
    height: '40px',
    lineHeight: '20px',
    listStyle: 'none',
    margin: '0',
    outline: 'none',
    padding: '10px 16px',
    textAlign: 'center',
    textDecoration: 'none',
    transition: 'color 100ms',
    verticalAlign: 'baseline',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    touchAction: 'manipulation',
    position: 'absolute',
    bottom: '-45px',
    left: '50%',
    transform: 'translateX(-50%)',
    ':hover': {
      color: '#ffffff',
    },
  };

  const ProfilePhoto = {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    objectFit: 'cover',
    boxShadow: 'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px',
    opacity: editable ? (isHovered ? 0.5 : 1) : 1,
    position: 'relative',
  }

  useEffect(() => {
    window.addEventListener('focus', handleFileInputBlur);
    return () => {
      window.removeEventListener('focus', handleFileInputBlur);
    };
  }, []);

  const ButtonChangeClick = () => {
    changeProfile(imageFile)
    setSelectedImage('')
  }

  return (
    <div
      className={classNames(className)}
      {...rest}
      onMouseEnter={handleHover}
      onMouseLeave={() => setIsHovered(false)}
      style={containerStyle}
    >
      <img onClick={handleClick} src={selectedImage ? selectedImage : initialSrc}
           style={ProfilePhoto} alt="Profile"/>

      {editable && isHovered && (
        <div style={iconStyle} onClick={handleClick}>
          <Icon icon={icon || EditPhoto}/>
        </div>
      )}

      {editable && (
        <>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            onBlur={handleFileInputBlur}
            style={{display: 'none'}}
            ref={fileInputRef}
          />
          {selectedImage && (
            <>
              <button onClick={ButtonChangeClick} style={buttonStyles} role="button">Changer</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

ProfileUser.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  src: PropTypes.string,
  icon: PropTypes.string,
  editable: PropTypes.bool,
  changeProfile: PropTypes.func,
};

export default ProfileUser;
