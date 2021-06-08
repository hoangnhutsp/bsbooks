import React, { forwardRef } from 'react';
import './FormComment.css';

function FormComment() {
  return (
    <div className='FormCommentContainer'>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
      <div className="fancybox-overlay fancybox-overlay-fixed" id="FormCommentContainer-div1">
          <div className="fancybox-warp fancybox-desktop fancybox-type-inline fancybox-opened" tabIndex="-1" id="FormCommentContainer-div2">
              <div className="fancybox-skin" id="FormCommentContainer-div3">
                  <div className="fancybox-outer">
                      <div className="fancybox-inner" id="FormCommentContainer-div4">
                          <div className="bizweb-product-reviews-form" id="bpr-form_17182526">
                              <form className="FormCommentContainer-form" method="post" id="bizweb-product-reviews-frm" name="bizweb-product-reviews-frm">
                                  <input type="hidden" name="productId" id="review_product_id" value="17182526"/>
                                  <h4>Đánh giá sản phẩm</h4>
                                  <fieldset className="bpr-form-rating">
                                      <div id="dvRating">
                                          <i data-alt="1" title="Rất tệ" class="fas fa-star"></i>
                                          <i data-alt="2" title="Không hài lòng" class="fas fa-star"></i>
                                          <i data-alt="3" title="Bình thường" class="fas fa-star"></i>
                                          <i data-alt="4" title="Hài lòng" class="fas fa-star"></i>
                                          <i data-alt="5" title="Rất hài lòng" class="fas fa-star"></i>
                                      </div>
                                      <input type="hidden" name="rating" id="review_rate" value="0"/>
                                      <span className="bpr-form-message-error"></span>
                                  </fieldset>
                                  <fieldset className="bpr-form-contact">
                                      <div className="bpr-form-contact-name require">
                                          <input type="text" maxLength="128"  id="review_author" name="author" placeholder="Nhập tên của bạn" />
                                          <span className="bpr-form-message-error"></span>
                                      </div>
                                      <div className="bpr-form-contact-email require">
                                          <input type="text" maxLength="128"  id="review_email" name="email" placeholder="ngocqui@gmail.com" />
                                          <span className="bpr-form-message-error"></span>
                                      </div>
                                  </fieldset>
                                  <fieldset className="bpr-form-review">
                                      <div className="bpr-form-review-titile require">
                                          <input type="text" maxLength="512"  id="review_titile" name="titile" placeholder="Tiêu đề" />
                                          <span className="bpr-form-message-error"></span>
                                      </div>
                                      <div className="bpr-form-review-body require">
                                          <textarea type="text" maxLength="1500"  id="review_body" name="body" rows="5" placeholder="Nội dung" />
                                          <span className="bpr-form-message-error"></span>
                                      </div>
                                  </fieldset>
                                  <fieldset className="bpr-form-review-error">
                                      <p className="error"></p>
                                  </fieldset>
                                  <fieldset className="bpr-form-actions">
                                      <input type="button" className="bpr-button-submit" value ="Gửi" />
                                  </fieldset>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}

export default FormComment;



