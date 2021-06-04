import './Register.css';
import React, { useState, useEffect } from "react";
import FacebookLogin from 'react-facebook-login';

import {
    validatePhoneNumber,
    validateName,
    validateEmail,
    validateAddress,
    validatePassWord,
    validateConfPassWord,

} from './CheckInfo'

function Register() {
    const [currentUser, setCurrentUser] = useState({})
    const [registerData, setRegisterData] = useState({
        phone: '',
        name: '',
        email: '',
        address: '',
        gender: '',
        birthday: '',
        password: '',
        confirmPassWord: ''
    })

    const [error, setError] = useState({
        phone: '',
        name: '',
        email: '',
        address: '',
        gender: '',
        birthday: '',
        password: '',
        confirmPassWord: ''
    })

    const submitHandler = (e) => {
        e.preventDefault();

        console.log(registerData);
    }
    const responseFacebook = (res) => {
        console.log(res);
        const data = {
            accessToken: res.accessToken,
            userID: res.userID
        }
        fetch(
            `http://localhost:5000/user/login-facebook`,
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(data),
            }
        )
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
                setCurrentUser(data)
            })
    }


    return (
        <div className='containner-register'>
            <div className='login-signup-register'>
                <div className='col-sm-6-register'>
                    <div className='article-register'>
                        <h3 className='text-center-register'>ĐĂNG KÍ</h3>
                        <form className='signup-register' onSubmit={submitHandler}>
                            <div className='form-group-register'>
                                <input
                                    type='text'
                                    className='form-control-register'
                                    placeholder='Họ và tên'
                                    onChange={(e) => {
                                        setRegisterData({ ...registerData, name: e.target.value })
                                    }}
                                    onBlur={(e) => {
                                        let err = validateName(e.target.value);
                                        setError({ ...error, name: err });
                                    }}
                                    required></input>
                            </div>
                            {(error.name == '') ? null :
                                <div>{error.name}</div>
                            }

                            <div className='form-group-register'>
                                <input type='email'
                                    className='form-control-register'
                                    placeholder='Địa chỉ Email'
                                    onChange={(e) => {
                                        setRegisterData({ ...registerData, email: e.target.value })
                                    }}
                                    onBlur={(e) => {
                                        let err = validateEmail(e.target.value);
                                        setError({ ...error, email: err });
                                    }}
                                    required></input>
                            </div>
                            {(error.email == '') ? null :
                                <div>{error.email}</div>
                            }
                            <div className='form-group-register'>
                                <input
                                    type='text'
                                    className='form-control-register'
                                    placeholder='Số điện thoại'
                                    onChange={(e) => {
                                        setRegisterData({ ...registerData, phone: e.target.value })
                                    }}
                                    onBlur={(e) => {
                                        let err = validatePhoneNumber(e.target.value);
                                        setError({ ...error, phone: err })
                                    }}
                                    required></input>
                            </div>
                            {(error.phone == '') ? null :
                                <div>{error.phone}</div>
                            }
                            <div className='form-group-register'>
                                <input type='text'
                                    className='form-control-register'
                                    placeholder='Địa chỉ'
                                    onChange={(e) => {
                                        setRegisterData({ ...registerData, address: e.target.value })
                                    }}
                                    onBlur={(e) => {
                                        let err = validateAddress(e.target.value);
                                        setError({ ...error, address: err })
                                    }}
                                    required></input>
                            </div>
                            {(error.address == '') ? null :
                                <div>{error.address}</div>
                            }

                            <div className='form-group-register'>
                                <input type='date'
                                    className='form-control-register'
                                    placeholder='Ngày sinh'
                                    onChange={(e) => {
                                        setRegisterData({ ...registerData, birthday: e.target.value })
                                    }}
                                    required></input>
                            </div>

                            <div className='form-group-register'>
                                <input type='password'
                                    className='form-control-register'
                                    placeholder='Mật khẩu'
                                    onChange={(e) => {
                                        setRegisterData({ ...registerData, password: e.target.value })
                                    }}
                                    onBlur={(e) => {
                                        let err = validatePassWord(e.target.value);
                                        setError({ ...error, password: err })
                                    }}>
                                </input>
                            </div>
                            {(error.password == '') ? null :
                                <div>{error.password}</div>
                            }


                            <div className='form-group-register'>
                                <input type='password'
                                    className='form-control-register'
                                    placeholder='Nhập lại mật khẩu'
                                    onChange={(e) => {
                                        setRegisterData({ ...registerData, confirmPassWord: e.target.value })
                                    }}
                                    onBlur={(e) => {
                                        let err = validateConfPassWord(e.target.value);
                                        setError({ ...error, confirmPassWord: err })
                                    }}>
                                </input>
                            </div>
                            {(error.confirmPassWord == '') ? null :
                                <div>{error.confirmPassWord}</div>
                            }



                            <div className='form-group-register'>
                                <input name='gioitinh'
                                    type='radio' value='Nam'
                                    onChange={(e) => {
                                        setRegisterData({ ...registerData, gender: e.target.value })
                                    }} />Nam
                            <input name='gioitinh'
                                    type='radio'
                                    value='Nu'
                                    onChange={(e) => {
                                        setRegisterData({ ...registerData, gender: e.target.value })
                                    }} />Nữ
                        </div>
                            {(error.gender == '') ? null :
                                <div>{error.gender}</div>
                            }

                            <div className='form-group-register'>
                                <button type='submit' className='button-submit-register'>ĐĂNG KÝ</button>
                            </div>
                        </form>
                        <div className='login-facebook'>
                            <FacebookLogin
                                appId="964337381003622"
                                autoLoad={false}
                                callback={responseFacebook}
                                icon="iconfacebook"
                                size = "medium "  
                                textButton = "Đăng nhập với FaceBoook"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Register;