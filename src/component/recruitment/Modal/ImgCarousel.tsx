import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { RecruitmentImageProps } from './RecruitmentImageProps';
import img from '../../../assets/image_2.svg';

const ImgCarousel = ({ selectedRecruitmentId }) => {
  const imageSamples: RecruitmentImageProps[] = [
    {
      id: 'image1',
      recruitmentId: 'recruit1',
      recruitmentImageUrl: [
        'image-url-1-1.jpg',
        'image-url-1-2.jpg',
        'image-url-1-3.jpg'
      ],
      captions: ['Caption 1-1', 'Caption 1-2', 'Caption 1-3']
    },
    {
      id: 'image2',
      recruitmentId: 'recruit2',
      recruitmentImageUrl: ['image-url-2-1.jpg', 'image-url-2-2.jpg'],
      captions: ['Caption 2-1', 'Caption 2-2']
    },
    {
      id: 'image3',
      recruitmentId: 'recruit3',
      recruitmentImageUrl: ['image-url-3-1.jpg'],
      captions: ['Caption 3-1']
    },
    {
      id: 'image4',
      recruitmentId: 'recruit4',
      recruitmentImageUrl: ['image-url-4-1.jpg', 'image-url-4-2.jpg'],
      captions: ['Caption 4-1', 'Caption 4-2']
    },
    {
      id: 'image5',
      recruitmentId: 'recruit5',
      recruitmentImageUrl: [
        'image-url-5-1.jpg',
        'image-url-5-2.jpg',
        'image-url-5-3.jpg'
      ],
      captions: ['Caption 5-1', 'Caption 5-2', 'Caption 5-3']
    },
    {
      id: 'image6',
      recruitmentId: 'recruit6',
      recruitmentImageUrl: ['image-url-6-1.jpg'],
      captions: ['Caption 6-1']
    }
  ];
  const selectedImage = imageSamples.find(
    (image) => image.recruitmentId === selectedRecruitmentId
  );

  if (!selectedImage) {
    return null; // Handle the case when no matching image is found
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [centerIndex, setCenterIndex] = useState(0);

  const settings = {
    centerMode: true,
    centerPadding: '0',
    slidesToShow: Math.min(selectedImage.recruitmentImageUrl.length, 3),
    slidesToScroll: 1,
    focusOnSelect: true,
    beforeChange: (current, next) => {
      setCenterIndex(next);
    }
  };

  return (
    <CarouselWrapper>
      <CustomSlider {...settings}>
        {selectedImage.recruitmentImageUrl.map((imageUrl, index) => (
          <CarouselItem
            key={index}
            className={centerIndex === index ? 'centered' : ''}>
            <ImageWrapper className={centerIndex === index ? 'centered' : ''}>
              <Image src={img} alt={`Image ${index}`} />
            </ImageWrapper>
            {centerIndex === index && (
              <Caption>{selectedImage.captions[index]}</Caption>
            )}
          </CarouselItem>
        ))}
      </CustomSlider>
    </CarouselWrapper>
  );
};

const CarouselWrapper = styled.div`
  align-items: center;
  justify-content: center;
`;

const CustomSlider = styled(Slider)`
  .slick-slide {
    transition: transform 0.3s ease-in-out;
  }

  .slick-center {
    transform: scale(1.3); /* Adjust the scale factor as needed */
    filter: blur(0);
    z-index: 1;
  }
  width: 900px;
`;

const CarouselItem = styled.div<{ className?: string }>`
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  opacity: ${(props) =>
    props.className && props.className.includes('centered') ? 1 : 0.5};
  border-radius: 10px;

  &:focus {
    outline: none;
  }
`;

const ImageWrapper = styled.div`
  width: 250px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img<{ className?: string }>`
  border-radius: 10px;
`;

const Caption = styled.div<{ show?: boolean }>`
  text-align: center;
`;

export default ImgCarousel;
