import './Register.css';
import React, { useState, useEffect } from "react";

function Login() {
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    })
    

    //kiểm tra format email và không được rỗng
    const [checkEmail, setCheckEmail] = useState(
        {
            isInputValid: true,
            errorMessage: ''
        })
    const validateEmail = checkingText => {
        const re = /\S+@\S+\.\S+/;
        if (checkingText == '')
        {
            setCheckEmail({ ...checkEmail, errorMessage: 'Vui lòng điền email', isInputValid: false })
        }
        else {
            if (!re.test(checkingText))
                setCheckEmail({ ...checkEmail, errorMessage: 'Vui lòng nhập đúng định dạng Email', isInputValid: false })
            else setCheckEmail({ ...setCheckEmail, errorMessage: '', isInputValid: true })
        }
    }


    //check password ko rỗng
    const [checkPassWord, setCheckPassWord] = useState({
        isInputValid: true,
        errorMessage: ''
    })
    const validatePassWord = checkingText => {
        if (checkingText == '')
            setCheckPassWord({ ...checkPassWord, errorMessage: 'Vui lòng nhập password', isInputValid: false })
        else setCheckPassWord({ ...checkPassWord, errorMessage: '', isInputValid: true })
    }
    const click = () => {
        if (!checkEmail.isInputValid || !checkPassWord.isInputValid)
            setLoginData({...loginData, email:'', password:''})
    }
    return (
        <div className='containner-register'>
            <div className='login-signup-register'>
                <div className='col-sm-6-register'>
                    <div className='article-register'>
                        <h3 className='text-center-register'>ĐĂNG NHẬP</h3>
                        <form className='signup-register' onClick='return false'>
                            <div className='form-group-register'>
                                <input type='email'
                                    className='form-control-register'
                                    placeholder='Địa chỉ Email'
                                    onChange={(e) => {
                                            setLoginData({ ...loginData, email: e.target.value })
                                    }}
                                    onBlur={(e) => { validateEmail(e.target.value) }}
                                    required></input>
                            </div>
                            {(checkEmail.isInputValid) ? null :
                                <div>{checkEmail.errorMessage}</div>
                            }

                            <div className='form-group-register'>
                                <input type='password'
                                    className='form-control-register'
                                    placeholder='Mật khẩu'
                                    onChange={(e) => {
                                        if (checkPassWord.isInputValid)
                                            setLoginData({ ...loginData, password: e.target.value })
                                    }}
                                    onBlur={(e) => { validatePassWord(e.target.value) }}></input>
                            </div>
                            {(checkPassWord.isInputValid) ? null :
                                <div>{checkPassWord.errorMessage}</div>
                            }

                            <div className='form-group-register'>
                                <button type='submit' className='button-submit-register' onClick={click}>Đăng Nhập</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            /** test loginData*/
            <div className = 'login-signup-register'>
                <div>{loginData.email}</div>
                <div>{loginData.password}</div>
            </div>
        </div>
    )
}
export default Login