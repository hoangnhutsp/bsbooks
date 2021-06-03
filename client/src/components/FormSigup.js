import './FormSignup.css';
import React, { useState, useEffect } from "react";

function FormError(props) {
    return (
      <div className="form-warning">
          <div>hell</div>
          {props.errorMessage}
      </div>
    )
  }


function RegisterForm() {
    const [checkPhoneNumber, setCheckPhoneNumber] = useState(
            {
                phoneNumber: '',
                isInputValid: true,
                errorMessage: ''
            }
    )

    const validatePhoneNumber = checkingText => {
            let phoneNumber = checkPhoneNumber;
            const regexp = /^\d{10}$/; 
            const re = /^[0-9\b]+$/;
            //check not null
            if (checkingText === '')
            {
                phoneNumber.phoneNumber = '';
                phoneNumber.errorMessage = 'Vui lòng điền số điện thoại';
                phoneNumber.isInputValid = false;
                setCheckPhoneNumber(phoneNumber);
                console.log(checkPhoneNumber.errorMessage)
            }
            else
            {
                if (!re.test(checkingText))
                    setCheckPhoneNumber({ ...checkPhoneNumber, errorMessage: 'Số điện thoại không hợp lệ'})
                else
                {
                    if (regexp.exec(checkingText) === null)
                        setCheckPhoneNumber({ ...checkPhoneNumber, errorMessage: 'Số điện thoại phải có 10 chữ số'})
                    else setCheckPhoneNumber({ ...checkPhoneNumber, errorMessage: ''})
                }
            }
            console.log(checkPhoneNumber.isInputValid);
            console.log(checkPhoneNumber);
    }
    
    return (
        <div className='containner'>
            <div className='login-signup'>
                <div className='col-sm-6'>
                    <div className='article'>
                        <h3 className='text-center'>ĐĂNG KÍ</h3>
                        <form className='signup'>
                            <div className='form-group'>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Họ và tên'
                                    name="fullname"></input>
                            </div>
                            <div className='form-group'>
                                <input type='email' className='form-control' placeholder='Địa chỉ Email'></input>
                            </div>
                            <div className='form-group'>
                                <input 
                                type='text' 
                                className='form-control' 
                                placeholder='Số điện thoại'
                                onChange={(e) => setCheckPhoneNumber({ ...checkPhoneNumber, phoneNumber: e.target.value })}
                                onBlur = {(e) => validatePhoneNumber(e.target.value)}></input>
                            </div>
                            { (checkPhoneNumber.isInputValid) ? <div>hello</div>:
                            <div>True</div>
                            }
                            <div className='form-group'>
                                <input type='text' className='form-control' placeholder='Địa chỉ'></input>
                            </div>
                            <div className='form-group'>
                                <input type='text' className='form-control' placeholder='Ngày sinh'></input>
                            </div>
                            <div className='form-group'>
                                <input type='password' className='form-control' placeholder='Mật khẩu'></input>
                            </div>
                            <div className='form-group'>
                                <input type='password' className='form-control' placeholder='Nhập lại mật khẩu'></input>
                            </div>
                            <div className='form-group'>
                                <input name='gioitinh' type='radio' value='Nam' />Nam
                            <input name='gioitinh' type='radio' value='Nu' />Nữ
                        </div>
                            <div className='form-group'>
                                <button type='submit' className='button-submit'>Đăng kí</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
};
export default RegisterForm