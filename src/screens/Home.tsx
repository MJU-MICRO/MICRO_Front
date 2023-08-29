import { useEffect } from 'react';
import fullpage from 'fullpage.js';
import firstImage from '../assets/mainScreen/001.png';
import secondImage from '../assets/mainScreen/002.png';
import thirdImage from '../assets/mainScreen/003.png';
import forthImage from '../assets/mainScreen/004.png';
import fifthImage from '../assets/mainScreen/005.png';
import './Home.css';

function Home() {
  useEffect(() => {
    new fullpage('#fullpage', {
      sectionsColor: [],
      navigation: true,
      loopHorizontal: false
    });
  }, []);

  return (
    <div id='fullpage' className='fullpage-container'>
      <div className='section'>
        <div className='image-container'>
          <img src={firstImage} alt='Image 1' />
        </div>
      </div>
      <div className='section'>
        <div className='image-container'>
          <img src={secondImage} alt='Image 2' />
        </div>
      </div>
      <div className='section'>
        <div className='image-container'>
          <img src={thirdImage} alt='Image 3' />
        </div>
      </div>
      <div className='section'>
        <div className='image-container'>
          <img src={forthImage} alt='Image 4' />
        </div>
      </div>
      <div className='section'>
        <div className='image-container'>
          <img src={fifthImage} alt='Image 5' />
        </div>
      </div>
    </div>
  );
}

export default Home;
