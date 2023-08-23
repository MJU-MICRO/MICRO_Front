import React, { useState, useRef, ChangeEvent } from 'react';
import styled from 'styled-components';
import fileupload from '../../../assets/fileupload.svg';
import upload_icon from '../../../assets/uploadButton.svg';

const UploadIcon = styled.img`
  vertical-align: middle;
  margin-right: 8px;
`;
interface StyledFileInputProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function Preview({ onChange }: StyledFileInputProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const imgRef = useRef<HTMLInputElement>(null);

  const onClickFileBtn = () => {
    if (imgRef.current) {
      imgRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      console.log(file);
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
    }
    onChange(event); // 다른 처리를 하시려면 여기에 추가
  };

  return (
    <ImageUploadWrapper>
      <ImageBox>
        <StyledImage
          src={selectedFile ? URL.createObjectURL(selectedFile) : fileupload}
          alt='Uploaded'
        />
      </ImageBox>
      <input
        type='file'
        ref={imgRef}
        onChange={handleFileChange} // 수정된 부분
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
}

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
