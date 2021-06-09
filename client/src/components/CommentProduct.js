import React from 'react';
import './CommentProduct.css';

function CommentProduct() {
  return (
    <div className='CommentProductContainer'>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
      <div className="titile-comment">
          <h2>ĐÁNH GIÁ</h2>
      </div>
      <div className="underline-comment"></div>

      <div className="tab-content-current">
          <div className="comment-product">
              <div className="details-comment-product">
                  <div>
                      <div className="titile-details-comment-product">
                          <h4 className="h4-titile-details-comment-product">Đánh giá sản phẩm</h4>
                      </div>
                      <div className="join-button">
                          <span className="join-button-comment-product">
                              <input className="input-join-button-comment-product" type="button" value="Viết đánh giá" />
                          </span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}

export default CommentProduct;



