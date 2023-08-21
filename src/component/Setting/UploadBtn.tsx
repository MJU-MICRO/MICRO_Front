import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import uploadBtnImg from '../../assets/upload.svg';

interface UploadBtnProps {
  defaultProfileImg: string;
  onImageUpload: (imageUrl: string) => void;
  division: string;
}

const UploadBtn = ({
  defaultProfileImg,
  onImageUpload,
  division
}: UploadBtnProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState('');

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImageUrl(imageUrl);
      onImageUpload(imageUrl);
    }
  };

  return (
    <Wrapper>
      <ProfileImg
        src={uploadedImageUrl || defaultProfileImg}
        division={division}
        alt='img'
      />
      <div>
        <input
          type='file'
          accept='image/*'
          ref={inputRef}
          style={{ display: 'none' }}
          onChange={handleImageUpload}
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
  width: ${(props) => (props.division === 'user' ? '5rem' : '8.46331rem')};
  height: ${(props) => (props.division === 'user' ? '5rem' : '7.5rem')};
  border-radius: ${(props) => (props.division === 'user' ? '50%' : '0.625rem')};
  object-fit: cover;
  margin-right: 1.25rem;
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
