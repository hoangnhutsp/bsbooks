import React, { useState, useEffect } from 'react';
import './ShowComment.css';


function ShowComment({comment}) {

    return (
        <div className='ShowCommentContainer'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
            <div className="Container-itwfbd-0 jFkAwY">
                <div className="style__StyledCustomrReviews-sc-103p4dk-0 jUzqeQ customer-reviews">
                    <div className="customer-reviews__inner">
                        <div></div>
                        <div className="style__StyledComment-sc-103p4dk-5 hMjYZK review-comment">
                            <div className="review-comment__user">
                                <div className="review-comment__user-inner">
                                    <div className="review-comment__user-avatar">
                                        <div className="Avatar__StyledAvatar-sc-17zdyc1-0 gDQSLG" id="IDAvatar__StyledAvatar-sc-17zdyc1-0 gDQSLG">
                                            <img alt="Ngoc Qui" src={comment.avatar} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="review-comment__user-name">
                                            {comment.name}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-grow-review-comment__rating-title">
                                <div className="review-comment__rating-title">
                                    <div className="Stars__StyledStars-sc-15olgy-0 dYhelp review-comment__rating">
                                        <span className={comment.star >= 0 ? "yellow" : ""}>
                                            <i class="fas fa-star"></i>
                                        </span>
                                        <span className={comment.star >= 1 ? "yellow" : ""}>
                                            <i class="fas fa-star"></i>
                                        </span>
                                        <span className={comment.star >= 2 ? "yellow" : ""}>
                                            <i class="fas fa-star"></i>
                                        </span>
                                        <span className={comment.star >= 3 ? "yellow" : ""}>
                                            <i class="fas fa-star"></i>
                                        </span>
                                        <span className={comment.star >= 4 ? "yellow" : ""}>
                                            <i class="fas fa-star"></i>
                                        </span>

                                    </div>
                                    <p className="review-comment__title">{comment.title}</p>
                                </div>
                                <div className="review-comment__content">
                                    {comment.comment}
                                </div>
                                <span className="review-comment__thank">
                                    <i class="far fa-thumbs-up"></i>
                                    <span className="span-review-comment__thank">Hữu ích</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowComment;



