import React, { useState, useRef, ChangeEvent } from 'react';
import styled from 'styled-components';
import fileupload from '../../assets/fileupload.svg';
import upload_icon from '../../assets/uploadButton.svg';

const UploadIcon = styled.img`
  vertical-align: middle;
  margin-right: 8px;
`;

const Preview = (props) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const imgRef = useRef<HTMLInputElement>(null);

  const onChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const file = e.target.files && e.target.files[0];

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
    }
  };

  const onClickFileBtn = () => {
    if (imgRef.current) {
      imgRef.current.click();
    }
  };

  return (
    <ImageUploadWrapper>
      <ImageBox>
        <StyledImage src={imageUrl || fileupload} alt='Uploaded' />
      </ImageBox>
      <input
        type='file'
        ref={imgRef}
        onChange={onChangeImage}
        style={{ display: 'none' }}
      />
      <Wrapper>
        <RecommendText>추천 사이즈 240 x 240 JPG, PNG 최대 2MB</RecommendText>
        <UploadButton onClick={onClickFileBtn}>
          <UploadIcon src={upload_icon} alt='Upload Icon' />
        </UploadButton>
      </Wrapper>
    </ImageUploadWrapper>
  );
};

export default Preview;

const ImageUploadWrapper = styled.div`
  text-align: left;
  display: flex;
  flex-direction: row;
  margin-top: 0px;
`;

const StyledImage = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 40px;
  margin-top: 40px;
`;

const Wrapper = styled.div`
  margin-top: 25px;
`;

const RecommendText = styled.div`
  color: rgba(0, 0, 0, 0.5);
  width: 128px;
  font-family: 'GmarketSansMedium';
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 14.2px;
`;

const UploadButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const ImageBox = styled.div`
  border-radius: 10px;
  background: rgba(233, 233, 233, 0.45);
  width: 100px;
  height: 100px;
  margin-left: 36px;
  margin-top: 10px;
`;
