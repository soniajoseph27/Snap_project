import React from 'react'
import '../styles/Content.css';
import databiz from '../assets/client-databiz.svg';
import audiophile from '../assets/client-audiophile.svg';
import meet from '../assets/client-meet.svg';
import maker from '../assets/client-maker.svg';
import hero_desktop from '../assets/image-hero-desktop.png';
import hero_mobile from '../assets/image-hero-mobile.png';


const Content = () => {
    return (
      <div className="container">

        <div className="mobile-content">
              <img src={hero_mobile} alt="Logo 1"  className="mobile-image" />
            </div>
            
             <div className='left-content'>
              <h2>Make  remote work</h2>
              <p>
                Get your team in sync, no matter your location.<br></br> Streamline Processes, create team rituals, and<br></br> watch productivity soar.
              </p>
              <div className="button-icons-container">
              <a href="#learn-more" className="btn btn-dark">Learn More</a> 
              </div>
              <div className="icons-container">
              <img src={databiz} alt="Logo 1" className="ms-2" />
              <img src={audiophile} alt="Logo 1" className="ms-2" />
              <img src={meet} alt="Logo 1" className="ms-2" />
              <img src={maker} alt="Logo 1" className="ms-2" />
              
              </div>
             
            </div>
           
          <div className="right-content">
          <img src={hero_desktop} alt="Logo 1"  className="right-image" />
        </div>
        
    </div>
    
       
    );
  };
export default Content;

