import React, { forwardRef, useEffect, useState } from 'react';
import './FormComment.css';
function FormComment({setOpenForm}) {


    const [rating, setRating] = useState(-1)
    const [info, setInfo] = useState({})

    const data = [
        "Rất tệ",
        "Không hài lòng",
        "Bình thường",
        "Hài lòng",
        "Rất hài lòng"
    ]

    const submitHanler = e => {
        e.preventDefault();
        console.log(rating);
        console.log(info);

        setOpenForm(1);
    }
    return (
        <div className='FormCommentContainer'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
            <div className="fancybox-overlay fancybox-overlay-fixed" id="FormCommentContainer-div1"
                onClick={(e) => (e.target.id==='FormCommentContainer-div1')&&setOpenForm(0)}
            >
                <div className="fancybox-warp fancybox-desktop fancybox-type-inline fancybox-opened" tabIndex="-1" id="FormCommentContainer-div2">
                    <div className="fancybox-skin" id="FormCommentContainer-div3">
                        <div className="fancybox-outer">
                            <div className="fancybox-inner" id="FormCommentContainer-div4">
                                <div className="bizweb-product-reviews-form" id="bpr-form_17182526">

                                    <form className="FormCommentContainer-form" method="post" id="bizweb-product-reviews-frm" name="bizweb-product-reviews-frm"
                                        onSubmit={submitHanler}
                                    >
                                        <input type="hidden" name="productId" id="review_product_id" value="17182526" />
                                        <div className="icon-close-form-comment"
                                            
                                        >
                                            <i id="icon-close-form-comment-id" class="far fa-times-circle"
                                            onClick={() => setOpenForm(0)}
                                            ></i>
                                        </div>
                                        <h4>Đánh giá sản phẩm</h4>
                                        <fieldset className="bpr-form-rating">
                                            <div id="dvRating" className="dvRating-container">
                                                {
                                                    data.map((item, idx) =>
                                                        <div className={(rating >= idx) ? "selected-rating-vote" : "rating-vote"}
                                                            onClick={() => {
                                                                setRating(idx)
                                                            }}
                                                        >
                                                            <i data-alt={idx} title={item} class="fas fa-star"></i>
                                                        </div>

                                                    )
                                                }
                                                {/* <div className={(rating>=1)?"selected-rating-vote":"rating-vote"}>
                                                    <i data-alt="1" title="Rất tệ" class="fas fa-star"></i>
                                                </div>
                                                <div className={(rating>=2)?"selected-rating-vote":"rating-vote"}>
                                                    <i data-alt="2" title="Không hài lòng" class="fas fa-star"></i>

                                                </div>
                                                <div className={(rating>=3)?"selected-rating-vote":"rating-vote"}>
                                                    <i data-alt="3" title="Bình thường" class="fas fa-star"></i>
                                                </div>
                                                <div className={(rating>=4)?"selected-rating-vote":"rating-vote"}>
                                                    <i data-alt="4" title="Hài lòng" class="fas fa-star"></i>
                                                </div>
                                                <div className={(rating>=5)?"selected-rating-vote":"rating-vote"}>
                                                    <i data-alt="5" title="Rất hài lòng" class="fas fa-star"></i>
                                                </div> */}

                                            </div>
                                            <input type="hidden" name="rating" id="review_rate" value="0"
                                                onClick={e => {
                                                    console.log(e.target.attributes);
                                                }}
                                            />
                                            <span className="bpr-form-message-error"></span>
                                        </fieldset>
                                        <fieldset className="bpr-form-contact">
                                            <div className="bpr-form-contact-name require">
                                                <input type="text" maxLength="128" id="review_author" name="author" placeholder="Nhập tên của bạn"
                                                    value={info.author}
                                                    onChange={(e) => setInfo({ ...info, author: e.target.value })}
                                                />
                                                <span className="bpr-form-message-error"></span>
                                            </div>
                                            <div className="bpr-form-contact-email require">
                                                <input type="text" maxLength="128" id="review_email" name="email" placeholder="ngocqui@gmail.com"
                                                    value={info.email}
                                                    onChange={(e) => setInfo({ ...info, email: e.target.value })}
                                                />
                                                <span className="bpr-form-message-error"></span>
                                            </div>
                                        </fieldset>
                                        <fieldset className="bpr-form-review">
                                            <div className="bpr-form-review-titile require">
                                                <input type="text" maxLength="512" id="review_titile" name="title" placeholder="Tiêu đề" 
                                                value={info.title}
                                                onChange={(e) => setInfo({ ...info, title: e.target.value })}
                                                />
                                                <span className="bpr-form-message-error"></span>
                                            </div>
                                            <div className="bpr-form-review-body require">
                                                <textarea type="text" maxLength="1500" id="review_body" name="body" rows="5" placeholder="Nội dung"
                                                    value={info.body}
                                                    onChange={(e) => setInfo({ ...info, body: e.target.value })}
                                                />
                                                <span className="bpr-form-message-error"></span>
                                            </div>
                                        </fieldset>
                                        <fieldset className="bpr-form-review-error">
                                            <p className="error"></p>
                                        </fieldset>
                                        <fieldset className="bpr-form-actions">
                                            <input type="submit" className="bpr-button-submit" value="Gửi" />
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



