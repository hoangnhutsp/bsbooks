import React, {useState} from 'react';
import './BackTop.css';

function BackTop() {

  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  window.addEventListener('scroll', toggleVisible);

  return (
    <div className='BackTopContainer' style={{display: visible ? 'inline' : 'none'}}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
      <div className="BackTopContainer-container">
        <a href="#" id="back-to-top" className="BackTop-backtop show" title="Lên đầu trang">
            <div className="BackTop-border_btt">
                <i className="fas fa-arrow-up"></i>
            </div>
        </a>
      </div>
    </div>
  );
}

export default BackTop;



