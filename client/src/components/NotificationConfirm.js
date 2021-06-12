import React, { forwardRef, useEffect, useState } from 'react';
import './NotificationConfirm.css';



function NotificationConfirm() {
    const data ={"title": "Xóa sản phẩm khỏi giỏ hàng"}
    return (
        <div className='NotificationConfirmContainer'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
            <div className="fancybox-overlay fancybox-overlay-fixed" id="FormCommentContainer-div1">
                <div className="fancybox-warp fancybox-desktop fancybox-type-inline fancybox-opened" tabIndex="-1" id="FormCommentContainer-div2">
                    
                    <div className="fancybox-skin" id="FormCommentContainer-div3">
                        
                        <div className="fancybox-outer">
                            <div className="fancybox-inner" id="FormCommentContainer-div4">
                                <div className="bizweb-product-reviews-form" id="bpr-form_17182526">
                                    <h2>{data.title}</h2>
                                    <div className="NotificationConfirmContainer-gach-chan-thong-bao-h2"></div>
                                    <div className="NotificationConfirmContainer-notifi-item">
                                        <img className="NotificationConfirmContainer-notifi-item-img" alt="img" src="./assets/891012.png" />
                                        <div className="NotificationConfirmContainer-text">
                                            <p>Bạn có muốn thực hiện tao tác trên?</p>
                                        </div>
                                    </div>
                                    <div className="NotificationConfirmContainer-join-yes-no">
                                        <div className="NotificationConfirmContainer-join-yes">
                                            <input type="button" value="Đồng ý"></input>
                                        </div>
                                        <div className="NotificationConfirmContainer-join-no">
                                            <input type="button" value="Không đồng ý"></input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotificationConfirm;



