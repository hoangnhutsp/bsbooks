import './Register.css';
import React, { useState, useEffect } from "react";
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

import { validatePassWord, validateEmail } from './CheckInfo'
import { useDispatch } from 'react-redux';

import {
    Link, useHistory,
} from 'react-router-dom'

import {
    userLogin,
    userLoginGoogle,
    userLoginFacebook
} from './../../redux/actions/user'


function Login() {
    let history = useHistory();
    const [currentUser, setCurrentUser] = useState({})

    const dispatch = useDispatch();

    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    })

    const [error, setError] = useState({
        error: '',
        email: '',
        password: '',
    })


    const setErrRes = err => {
        console.log(err);
        if (err.status) history.push('/'); else
            setError({ ...error, error: err.message });
    }
    const submitHandler = (e) => {
        let err = ''
        e.preventDefault();
        dispatch(userLogin(loginData, setErrRes))
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
                        <h3 className='text-center-register'>ĐĂNG NHẬP</h3>

                        {(error.error === '') ? null :
                            <div>{error.error}</div>
                        }

                        <div className='class-include-facebook-google-login'>
                            <div className='login-google'>
                                <FacebookLogin
                                    appId="340793020896447"
                                    autoLoad={false}
                                    callback={responseFacebook}
                                    cssClass='facebook-login-button'
                                    icon="fa-facebook"
                                    textButton="FACEBOOK" />
                            </div>
                            <div className='login-google'>
                                <GoogleLogin
                                    className='google-login-button'
                                    clientId="551410903005-ev094ec2i9f5j9p2sqmaqv65ic81eg68.apps.googleusercontent.com"
                                    buttonText="GOOGLE"
                                    onSuccess={responseSuccessGoogle}
                                    onFailure={responseErrorGoogle}
                                    cookiePolicy={'single_host_origin'}
                                    icon={false}
                                />
                            </div>
                        </div>
                        <form className='signup-register' onSubmit={submitHandler}>
                            <div className='form-group-register'>
                                <input type='email'
                                    className='form-control-register'
                                    placeholder='Địa chỉ Email'
                                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                                    onBlur={
                                        (e) => {
                                            let err = validateEmail(e.target.value);
                                            setError({ ...error, email: err })
                                        }
                                    }
                                    value={loginData.email}
                                    required
                                />
                            </div>


                            {(error.email == '') ? null :
                                <div className='error-text-register'>{error.email}</div>
                            }

                            <div className='form-group-register'>
                                <input type='password'
                                    className='form-control-register'
                                    placeholder='Mật khẩu'
                                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                                    onBlur={
                                        (e) => {
                                            let err = validatePassWord(e.target.value);
                                            setError({ ...error, password: err });
                                            console.log(err);
                                        }
                                    }
                                    value={loginData.password}

                                    required
                                />
                            </div>

                            {(error.password == '') ? null :
                                <div className='error-text-register'>{error.password}</div>
                            }

                            <div className='form-group-register'>
                                <button type='submit' className='button-submit-register'>ĐĂNG NHẬP</button>
                            </div>
                        </form>
                        <div className='class-for-go-to-forgot-or-signup'>
                            <div className='class-go-to-fogot-password'>
                                <Link to='/forgot-password'>
                                    <div>Quên mật khẩu</div>
                                </Link>
                            </div>
                            <div className='class-go-to-register-because-not-have-account'>
                                <div>Bạn chưa có tài khoản?</div>
                                <Link to='/signup'>
                                    <div className='go-to-login-form'>Đăng ký </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Login