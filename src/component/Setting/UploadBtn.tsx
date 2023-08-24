import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import uploadBtnImg from '../../assets/upload.svg';

interface UploadBtnProps {
  defaultProfileImg: string;
  onImageUpload: (imageFile: File) => void;
  division: string;
}

const UploadBtn = ({
  defaultProfileImg,
  onImageUpload,
  division
}: UploadBtnProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState('');

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      onImageUpload(selectedFile);
      const imageUrl = URL.createObjectURL(selectedFile); // Get the URL of the selected image
      setUploadedImageUrl(imageUrl); // Update the state with the image URL
    }
  };

  const setImgDefaultHandler = () => {
    setUploadedImageUrl('');
  };

  return (
    <Wrapper>
      <ProfileImg
        src={uploadedImageUrl || defaultProfileImg}
        division={division}
        alt='img'
        onClick={setImgDefaultHandler}
      />
      <div>
        <input
          type='file'
          accept='image/*'
          ref={inputRef}
          style={{ display: 'none' }}
          onChange={handleFileUpload}
        />
        <Button onClick={() => inputRef.current?.click()}>
          <UploadBtnImg src={uploadBtnImg} alt='uploadBtnImg' />
          업로드
        </Button>
      </div>
    </Wrapper>
  );
};

export default UploadBtn;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
`;

const ProfileImg = styled.img<{ division: string }>`
  width: ${(props) => (props.division === 'user' ? '5rem' : '5.46331rem')};
  height: ${(props) => (props.division === 'user' ? '5rem' : '5.5rem')};
  border-radius: ${(props) => (props.division === 'user' ? '50%' : '0.625rem')};
  object-fit: cover;
  margin-right: 1.25rem;
  &:hover {
    opacity: 0.5;
    background-color: black;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
`;
const Button = styled.button`
  cursor: pointer;
  width: 5.5rem;
  height: 2.0625rem;
  border-radius: 0.625rem;
  border: 1px solid #dbdbdf;
  background: #fff;
  color: rgba(0, 0, 0, 0.7);
  font-family: Gmarket Sans TTF;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
`;

const UploadBtnImg = styled.img`
  width: 1.25rem;
  height: 1.25rem;
  margin-left: 0.21rem;
  margin-right: 0.21rem;
`;
