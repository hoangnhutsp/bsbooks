import React, { forwardRef } from 'react';
import './ShowComment.css';


function ShowComment() {

    const data ={
        "name" : "Nguyễn Ngọc Quí",
        "avatar" : "./assets/0000_base_url.png",
        "content": "Sách rất là hay luôn nha, đây là hàng chuẩn chất lượng về cả nội dung lẫn hình thức, nên mọi người hãy cứ yên tâm mà mua nhé. Bên cạnh đó còn giao hàng rất là nhanh và phục vụ chăm sóc khách rất chu đáo. Sẽ mua ủng hộ tiếp!"
    }
  return (
    <div className='ShowCommentContainer'>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
      <div className="Container-itwfbd-0 jFkAwY">
          <div className="style__StyledCustomrReviews-sc-103p4dk-0 jUzqeQ customer-reviews">
              <div className="customer-reviews__heading">
                  ĐÁNH GIÁ - NHẬN XÉT TỪ KHÁCH HÀNG
              </div>
              <div className="customer-reviews__inner">
                  <div></div>
                  <div className="style__StyledComment-sc-103p4dk-5 hMjYZK review-comment">
                      <div className="review-comment__user">
                          <div className="review-comment__user-inner">
                              <div className="review-comment__user-avatar">
                                  <div className="Avatar__StyledAvatar-sc-17zdyc1-0 gDQSLG" id="IDAvatar__StyledAvatar-sc-17zdyc1-0 gDQSLG">
                                      <img alt="Ngoc Qui" src={data.avatar} />
                                  </div>
                              </div>
                              <div>
                                <div className="review-comment__user-name">
                                    {data.name}
                                </div>
                              </div>
                          </div>
                      </div>
                      <div className="flex-grow-review-comment__rating-title">
                          <div className="review-comment__rating-title">
                              <div className="Stars__StyledStars-sc-15olgy-0 dYhelp review-comment__rating">
                                  <span>
                                    <i class="fas fa-star"></i>
                                  </span>
                                  <span>
                                    <i class="fas fa-star"></i>
                                  </span>
                                  <span>
                                    <i class="fas fa-star"></i>
                                  </span>
                                  <span>
                                    <i class="fas fa-star"></i>
                                  </span>
                                  <span>
                                    <i class="fas fa-star"></i>
                                  </span>
                                  <div id="div-fas-fa-star">
                                    <span>
                                        <i class="fas fa-star"></i>
                                    </span>
                                    <span>
                                        <i class="fas fa-star"></i>
                                    </span>
                                    <span>
                                        <i class="fas fa-star"></i>
                                    </span>
                                    <span>
                                        <i class="fas fa-star"></i>
                                    </span>
                                    <span>
                                        <i class="fas fa-star"></i>
                                    </span>
                                  </div>
                              </div>
                              <p className="review-comment__title">Tình trạng đánh giá</p>
                          </div>
                          <div className="review-comment__content">
                              {data.content}
                          </div>
                          <span className="review-comment__thank">
                              <i class="far fa-thumbs-up"></i>
                              <span className="span-review-comment__thank">Hữu ích</span>
                          </span>
                          <span className="review-comment__reply">
                              Gửi trả lời
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



