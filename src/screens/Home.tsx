import React from 'react';
import firstImage from '../assets/mainScreen/001.png';
import secondImage from '../assets/mainScreen/002.png';
import thirdImage from '../assets/mainScreen/003.png';
import forthImage from '../assets/mainScreen/004.png';
import fifthImage from '../assets/mainScreen/005.png';

import './Home.css';

function Home() {
  return (
    <div className='home-container'>
      <div className='image-section'>
        <img src={firstImage} className='full-image' alt='Image 1' />
      </div>
      <div className='image-section'>
        <img src={secondImage} className='full-image' alt='Image 2' />
      </div>
      <div className='image-section'>
        <img src={thirdImage} className='full-image' alt='Image 3' />
      </div>
      <div className='image-section'>
        <img src={forthImage} className='full-image' alt='Image 4' />
      </div>
      <div className='image-section'>
        <img src={fifthImage} className='full-image' alt='Image 5' />
      </div>
    </div>
  );
}

export default Home;
