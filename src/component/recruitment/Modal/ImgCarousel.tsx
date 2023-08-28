import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img from '../../../assets/image_2.svg';
interface CarouselItemProps {
  marginLeft: string;
}
const ImgCarousel = ({ selectedRecruitment }) => {
  const [imageDatalist, setImageDatalist] = useState<string[]>([]);
  const [captionlist, setCaptionlist] = useState<string[]>([]);
  useEffect(() => {
    setImageDatalist(selectedRecruitment.recruitmentImageUrl);
    setCaptionlist(selectedRecruitment.captions);
  }, []);
  const getMarginLeft = () => {
    if (imageDatalist.length === 1) {
      return '283px';
    }
    return '83px';
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [centerIndex, setCenterIndex] = useState(0);

  const settings = {
    centerMode: true,
    centerPadding: '0',
    slidesToShow: Math.min(2.4, imageDatalist.length), // 중앙에 표시할 슬라이드 개수 조절
    slidesToScroll: 1,
    slidesToTouch: true,
    focusOnSelect: true,
    initialSlide: 0
  };

  return (
    <CarouselWrapper>
      <CustomSlider {...settings}>
        {imageDatalist.map((imageUrl, index) => (
          <CarouselItem
            key={index}
            className={centerIndex === index ? 'centered' : ''}
            marginLeft={getMarginLeft()}>
            <ImageWrapper className={centerIndex === index ? 'centered' : ''}>
              <Image src={img} alt={`Image ${index}`} />
              <Caption>{captionlist[index]}</Caption>
            </ImageWrapper>
          </CarouselItem>
        ))}
      </CustomSlider>
    </CarouselWrapper>
  );
};

const CarouselWrapper = styled.div`
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  max-width: 100%; /* 추가: 최대 가로 너비 설정 */
  overflow: hidden;
`;

const CustomSlider = styled(Slider)`
  .slick-slide {
    transition: transform 0.3s ease-in-out;
  }

  .slick-center {
    transform: scale(1.1);
    filter: blur(0);
    z-index: 1;
  }

  .centered {
    opacity: 1 !important;
  }
  width: 100%;
  height: 100%;
`;

const CarouselItem = styled.div<CarouselItemProps>`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-radius: 10px;
  margin-left: ${(props) => props.marginLeft};
  &:focus {
    outline: none;
  }
`;

const ImageWrapper = styled.div`
  width: 250px;
  height: 335px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 50px;
`;

const Image = styled.img`
  border-radius: 10px;
`;

const Caption = styled.div`
  text-align: center;
  font-size: 13px;
  font-style: normal;
  font-family: 'GmarketSansLight';
  margin-top: 9px;
`;

export default ImgCarousel;
