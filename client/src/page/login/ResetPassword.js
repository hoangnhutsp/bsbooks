import './Register.css';
import React, { useState, useEffect } from "react";
import { Link, useParams, useLocation, useHistory } from 'react-router-dom'

import { validatePassWord, validateConfPassWord } from './CheckInfo'
import * as apiUser from './../../api'

function ResetPass() {
    const history = useHistory();
    const { token } = useParams();

    const [resetPass, setResetPass] = useState({
        password: '',
        confirmPassword: '',
    })

    const [error, setError] = useState({
        error: '',
        password: '',
        confirmPassword: ''
    })


    const submitHandler = e => {
        e.preventDefault();
        if (error.error===''&&error.password===''&&error.confirmPassword===''){
            console.log('RESET PASSWORD');
            apiUser.resetPassword({token, password: resetPass.password})
            .then(res => res.data)
            .then(data => {
                if (data.status){
                    // Thong bao
                    history.push('/login')
                }
            })
            .catch(err => {
                console.log(err);
            })
        }
    }

    return (
        <div className='containner-register'>
            <div className='login-signup-register'>
                <div className='col-sm-6-register'>
                    <div className='article-register'>
                        <h3 className='text-center-register'>CẬP NHẬT MẬT KHẨU MỚI</h3>

                        <form className='signup-register' onSubmit={submitHandler}>
                        <div className='form-group-register'>
                                <input type='password'
                                    className='form-control-register'
                                    placeholder='Mật khẩu'
                                    onChange={(e) => {
                                        setResetPass({ ...resetPass, password: e.target.value })
                                    }}
                                    onBlur={(e) => {
                                        let err = validatePassWord(e.target.value);
                                        setError({ ...error, password: err })
                                    }}>
                                </input>
                            </div>
                            {(error.password == '') ? null :
                                <div className = 'error-text-register'>{error.password}</div>
                            }


                            <div className='form-group-register'>
                                <input type='password'
                                    className='form-control-register'
                                    placeholder='Nhập lại mật khẩu'
                                    onChange={(e) => {
                                        setResetPass({ ...resetPass, confirmPassWord: e.target.value })
                                        if (e.target.value.length>=resetPass.password.length){
                                            let err = validateConfPassWord(e.target.value, resetPass.password);
                                            setError({ ...error, confirmPassword: err })    
                                        }
                                    }}
                                    onBlur={(e) => {
                                        let err = validateConfPassWord(e.target.value, resetPass.password);
                                        setError({ ...error, confirmPassword: err })
                                    }}>
                                </input>
                            </div>
                            {(error.confirmPassword == '') ? null :
                                <div className = 'error-text-register'>{error.confirmPassword}</div>
                            }

                            <div className='form-group-register'>
                                <button type='submit' className='button-submit-resetpass'>CẬP NHẬT MẬT KHẨU</button>
                            </div>


                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default ResetPass