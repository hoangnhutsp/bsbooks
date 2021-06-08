import './Register.css';
import React, { useState, useEffect } from "react";

import { validatePassWord, validateConfPassWord } from './CheckInfo'


function ResetPass() {
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
        console.log(resetPass);
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
                                    }}
                                    onBlur={(e) => {
                                        let err = validateConfPassWord(e.target.value);
                                        setError({ ...error, confirmPassWord: err })
                                    }}>
                                </input>
                            </div>
                            {(error.confirmPassWord == '') ? null :
                                <div className = 'error-text-register'>{error.confirmPassWord}</div>
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