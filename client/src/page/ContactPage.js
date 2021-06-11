import React, { forwardRef } from 'react';
import './ContactPage.css';

function ContactPage() {
  return (
    <div className='ContactPageContainer'>
      
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/css/fontawesome.min.css" integrity="undefined" crossorigin="anonymous"/>
      <section className="ContactPageContainer-contact">
            <div className="ContactPageContainer-contact-content">
                <h2>LIÊN HỆ</h2>
            </div>
            <div className="ContactPageContainer-container">
                <div className="ContactPageContainer-contactInfo">
                    <div className="ContactPageContainer-box">
                        <div className="icon"><i class="fa fa-map-marker" aria-hidden="true"></i></div>
                        <div className="ContactPageContainer-box-text">
                            <h3>Địa chỉ</h3>
                            <p>20/90A, tổ 10 khu phố 6, <br/> phường Linh Trung, Thành phố Thủ Đức</p>
                        </div>
                    </div>

                    <div className="ContactPageContainer-box">
                        <div className="icon"><i class="fa fa-phone" aria-hidden="true"></i></div>
                        <div className="ContactPageContainer-box-text">
                            <h3>Số điện thoại</h3>
                            <p>+(028) 999 999 <br/>+(028) 888 999 </p>
                        </div>
                    </div>

                    <div className="ContactPageContainer-box">
                        <div className="icon"><i class="fa fa-envelope" aria-hidden="true"></i></div>
                        <div className="ContactPageContainer-box-text">
                            <h3>Email</h3>
                            <p>Bsbooks@gmail.com <br/>bsbooks@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="ContactPageContainer-contactForm">
                    <form>
                        <h2>Gửi Câu Hỏi</h2>
                        <div className="ContactPageContainer-inputBox">
                            <input className="ContactPageContainer-text" placeholder="Họ và tên" type="text" name="" required="required"/>
                            
                        </div>
                        <div className="ContactPageContainer-inputBox">
                            <input className="ContactPageContainer-text" placeholder="Email" type="text" name="" required="required"/>
                           
                        </div>
                        <div className="ContactPageContainer-inputBox">
                            <textarea className="ContactPageContainer-textarea" placeholder="Nhập nội dung..." required="required"></textarea>
                            
                        </div>
                        <div className="ContactPageContainer-inputBox">
                            <input type="submit" name="" value="Gửi"/>
                        </div>
                    </form>
                </div>
            </div>
      </section>
    </div>
  );
}

export default ContactPage;



