import './Register.css';
import React from "react";
import { 
    useState, 
} from 'react'

import { 
    useDispatch 
} from 'react-redux';
import {
    useHistory,
} from 'react-router-dom'

import {userLogin} from './../../redux/actions/user'

import {validatePassWord, validateEmail} from './CheckInfo'

import * as api from './../../api'
function Login() {
    let history = useHistory();

    const dispatch = useDispatch();

    const [loginData, setLoginData] = useState({
        email: 'hoangnhut@gmail.com',
        password: 'Nhutsp240420',
    })

    const [error, setError] = useState({
        error: '',
        email: '',
        password: '',
    })


    const submitHandler = (e) => {
        
        e.preventDefault();
        dispatch(userLogin(loginData))
        
    }


    return (
        <div className='containner-register'>
            <div className='login-signup-register'>
                <div className='col-sm-6-register'>
                    <div className='article-register'>
                        <h3 className='text-center-register'>ĐĂNG NHẬP</h3>
                        <form className='signup-register' onSubmit={submitHandler}>
                            <div className='form-group-register'>
                                <input type='email'
                                    className='form-control-register'
                                    placeholder='Địa chỉ Email'
                                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                                    onBlur={
                                        (e) => { 
                                            let err = validateEmail(e.target.value);
                                            setError({...error, email: err})
                                        }
                                    }
                                    value={loginData.email}
                                    required
                                />
                            </div>


                            {(error.email==='') ? null :
                                <div>{error.email}</div>
                            }

                            <div className='form-group-register'>
                                <input type='password'
                                    className='form-control-register'
                                    placeholder='Mật khẩu'
                                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                                    onBlur={
                                        (e) => {
                                            let err = validatePassWord(e.target.value);
                                            setError({...error, password: err});
                                            console.log(err);
                                        }
                                    }
                                    value={loginData.password}

                                    required
                                />
                            </div>

                            {(error.password==='') ? null :
                                <div>{error.password}</div>
                            }

                            <div className='form-group-register'>
                                <button type='submit' className='button-submit-register'>Đăng Nhập</button>
                            </div>


                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Login