import React from 'react'
import './PageNotFound.css';

function PageNotFound() {
    return (
    <div className='PageNotFoundContainer'>
        <div className="PageNotFoundContainer-Container">
            <img className="PageNotFoundContainer-Container-img" src="./assets/404.svg"></img>
            <div className="PageNotFoundContainer-Container-wrapper">
                <h1>Không Tìm Thấy Trang</h1>
                <p className="PageNotFoundContainer-Container-message">
                    Trang này hiện đang không tìm thấy. Bạn có thể quay lại trang chủ hoặc liên hệ với chúng tôi!
                </p>
                <a href="/" className="PageNotFoundContainer-Container-btn">Đi đến trang chủ</a>
            </div>
        </div>
    </div>
    )
}

export default PageNotFound
