import React from 'react';
import './BackTop.css';

function BackTop() {
  return (
    <div className='BackTopContainer'>
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



