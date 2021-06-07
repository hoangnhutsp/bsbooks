import './Register.css';
import React, { useState, useEffect } from "react";
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

import {
    validatePhoneNumber,
    validateName,
    validateEmail,
    validateAddress,
    validatePassWord,
    validateConfPassWord,
} from './CheckInfo'

import { useDispatch } from 'react-redux'
import {
    useHistory,
} from 'react-router-dom'
import {
    userSignup,
    userLoginGoogle,
    userLoginFacebook,
} from './../../redux/actions/user'

function Register() {
    const [currentUser, setCurrentUser] = useState({})
    const history = useHistory();
    const dispatch = useDispatch();
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
        error: '',
        phone: '',
        name: '',
        email: '',
        address: '',
        gender: '',
        birthday: '',
        password: '',
        confirmPassWord: ''
    })

    const setErrRes = err => {
        if (err.status) history.push('/'); else
            setError({ ...error, error: err.message });
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(registerData);
        let wr = 0;
        for (let x in error) {
            wr = wr || error[x] !== ''
        }
        if (!wr) {
            dispatch(userSignup(registerData, setErrRes))
        }
    }
    const responseFacebook = (res) => {
        let accessToken = res.accessToken;
        let userID = res.userID;
        dispatch(userLoginFacebook({ accessToken, userID }, setErrRes))
    }
    const responseSuccessGoogle = (res) => {
        let tokenId = res.tokenId
        dispatch(userLoginGoogle(tokenId, setErrRes))
    }

    const responseErrorGoogle = (res) => {
        console.log(res);
    }



    return (
        <div className='containner-register'>
            <div className='login-signup-register'>
                <div className='col-sm-6-register'>
                    <div className='article-register'>
                        <h3 className='text-center-register'>ĐĂNG KÍ</h3>
                        {(error.error === '') ? null :
                            <div>{error.error}</div>
                        }
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
                                    value={registerData.name}
                                    required></input>
                            </div>
                            {(error.name == '') ? null :
                                <div className='error-text-register'>{error.name}</div>
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
                                    value={registerData.email}
                                    required></input>
                            </div>
                            {(error.email == '') ? null :
                                <div className='error-text-register'>{error.email}</div>
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
                                    value={registerData.phone}

                                    required></input>
                            </div>
                            {(error.phone == '') ? null :
                                <div className='error-text-register'>{error.phone}</div>
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
                                    value={registerData.address}

                                    required></input>
                            </div>
                            {(error.address == '') ? null :
                                <div className='error-text-register'>{error.address}</div>
                            }

                            <div className='form-group-register'>
                                <input type='date'
                                    className='form-control-register'
                                    placeholder='Ngày sinh'
                                    onChange={(e) => {
                                        setRegisterData({ ...registerData, birthday: e.target.value })
                                    }}
                                    value={registerData.birthday}

                                    required></input>
                            </div>

                            <div className='form-group-register'>
                                <input type='password'
                                    className='form-control-register'
                                    placeholder='Mật khẩu'
                                    onChange={(e) => {
                                        setRegisterData({ ...registerData, password: e.target.value })
                                    }}
                                    value={registerData.password}

                                    onBlur={(e) => {
                                        let err = validatePassWord(e.target.value);
                                        setError({ ...error, password: err })
                                        if (registerData.confirmPassWord !== '') {
                                            err = validateConfPassWord(registerData.confirmPassWord, e.target.value);
                                            setError({ ...error, password: err })
                                        }
                                    }}>

                                </input>
                            </div>
                            {(error.password == '') ? null :
                                <div className='error-text-register'>{error.password}</div>
                            }


                            <div className='form-group-register'>
                                <input type='password'
                                    className='form-control-register'
                                    placeholder='Nhập lại mật khẩu'
                                    onChange={(e) => {
                                        setRegisterData({ ...registerData, confirmPassWord: e.target.value })
                                    }}
                                    value={registerData.confirmPassWord}

                                    onBlur={(e) => {
                                        let err = validateConfPassWord(e.target.value, registerData.password);
                                        if (err !== '') setError({ ...error, confirmPassWord: err }); else {
                                            setError({ ...error, confirmPassWord: '' })
                                            setError({ ...error, password: '' })

                                        }
                                    }}>
                                </input>
                            </div>
                            {(error.confirmPassWord == '') ? null :
                                <div className='error-text-register'>{error.confirmPassWord}</div>
                            }

                            <div className='form-group-register'>
                                <input name='gioitinh'
                                    type='radio' value='male'
                                    checked={registerData.gender === 'male'}
                                    onChange={(e) => {
                                        setRegisterData({ ...registerData, gender: e.target.value })
                                    }} />Nam
                            <input name='gioitinh'
                                    type='radio'
                                    value='female'
                                    checked={registerData.gender === 'female'}
                                    onChange={(e) => {
                                        setRegisterData({ ...registerData, gender: e.target.value })
                                    }} />Nữ
                        </div>
                            {(error.gender == '') ? null :
                                <div className='error-text-register'>{error.gender}</div>
                            }

                            <div className='form-group-register'>
                                <button type='submit' className='button-submit-sigup'>ĐĂNG KÝ</button>
                                <div className='login-facebook'>
                            <FacebookLogin
                                appId="340793020896447"
                                autoLoad={false}
                                callback={responseFacebook}
                                size="medium "
                                icon="fa-facebook"
                                textButton="Đăng ký với FaceBoook" />
                        </div>
                        <div className='sigup-google'>
                            <GoogleLogin
                                className='login-google'
                                clientId="551410903005-ev094ec2i9f5j9p2sqmaqv65ic81eg68.apps.googleusercontent.com"
                                buttonText="ĐĂNG KÝ VỚI GOOGLE"
                                cssClass="btnGoogle"

                                onSuccess={responseSuccessGoogle}
                                onFailure={responseErrorGoogle}
                                cookiePolicy={'single_host_origin'}
                            />
                        </div>
                            </div>
                        </form>
                        

                        
                    </div>
                </div>
               
            </div>
        </div>
    )
};
export default Register;