import './Register.css';
import React, { useState, useEffect } from "react";
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

import { validatePassWord, validateEmail } from './CheckInfo'
import { useDispatch } from 'react-redux';

import {
    useHistory,
} from 'react-router-dom'

import {userLogin, userLoginGoogle} from './../../redux/actions/user'


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
        if (err === '') history.push('/'); else
        setError({...error, error: err});
    }
    const submitHandler = (e) => {
        let err = ''
        e.preventDefault();
        dispatch(userLogin(loginData, setErrRes))
    }

    //đăng nhập bằng FB
    const responseFacebook = (res) => {
        const data = {
            accessToken: res.accessToken,
            userID: res.userID
        }
        console.log('data login facebook');
        console.log(data);
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
    //Đăng nhập với Google 
    const responseSuccessGoogle = (res) => {
        let tokenId = res.tokenId
        dispatch(userLoginGoogle(tokenId ,setErrRes))
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

                        {(error.error==='') ? null :
                                <div>{error.error}</div>
                        }

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
                                <div className = 'error-text-register'>{error.email}</div>
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
                                <div className = 'error-text-register'>{error.password}</div>
                            }

                            <div className='form-group-register'>
                                <button type='submit' className='button-submit-register'>ĐĂNG NHẬP</button>
                            </div>


                        </form>
                        <div className='login-facebook'>
                            <FacebookLogin
                                appId="964337381003622"
                                autoLoad={false}
                                callback={responseFacebook}
                                icon="fa-iconfacebook"
                                size="medium "
                                textButton="Đăng nhập với FaceBoook" />

                        </div>
                        <div className='login-google'>
                            <GoogleLogin
                                className = 'login-google'
                                clientId="551410903005-ev094ec2i9f5j9p2sqmaqv65ic81eg68.apps.googleusercontent.com"
                                buttonText="ĐĂNG NHẬP VỚI GOOGLE"
                                onSuccess={responseSuccessGoogle}
                                onFailure={responseErrorGoogle}
                                cookiePolicy={'single_host_origin'}
                            />
                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}
export default Login