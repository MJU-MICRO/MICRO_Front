import { useEffect, useRef } from 'react';
import fullpage from 'fullpage.js';
import firstImage from '../assets/mainScreen/001.png';
import secondImage from '../assets/mainScreen/002.png';
import thirdImage from '../assets/mainScreen/003.png';
import forthImage from '../assets/mainScreen/004.png';
import fifthImage from '../assets/mainScreen/005.png';
import './Home.css';
import { useLocation } from 'react-router-dom';

function Home() {
  const fullpageContainerRef = useRef(null);
  const fullpageInstanceRef = useRef<fullpage.Instance | null>(null);

  useEffect(() => {
    console.log('Initializing FullPage.js');

    if (!fullpageInstanceRef.current) {
      fullpageInstanceRef.current = new fullpage('#fullpage', {
        sectionsColor: [],
        navigation: true,
        loopHorizontal: false
      });
    }

    return () => {
      console.log('Destroying FullPage.js instance');
      if (fullpageInstanceRef.current) {
        fullpageInstanceRef.current.destroy('all');
        fullpageInstanceRef.current = null;
      }
    };
  }, []);
  return (
    <div
      id='fullpage'
      className='fullpage-container'
      ref={fullpageContainerRef}>
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
