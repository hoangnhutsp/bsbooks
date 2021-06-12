import './Register.css';
import React, { useState, useEffect } from "react";

import {
    validateEmail,
} from './CheckInfo'

import * as apiUser from '../../api';
function ForgotPassword() {
    const [email, setEmail] = useState('')

    const [error, setError] = useState({
        email: '',
    })

    const submitHandler = async (e) => {
        e.preventDefault();
        await apiUser.forgotFassword({email})
        .then(res => res.data)
        .then(data => {
            console.log(data);
        })
        .catch(err => console.log(err))
        // post forgot-password
    }

    return (<div className='containner-register'>
        <div className='login-signup-register'>
            <div className='col-sm-6-register'>
                <div className='article-register'>
                    <h3 className='text-center-register'>QUÊN MẬT KHẨU</h3>
                    <form className='signup-register' onSubmit={submitHandler}>
                        <div className='form-group-register'>
                            <input type='email'
                                className='form-control-register'
                                placeholder='Địa chỉ Email'
                                onChange={(e) => setEmail(e.target.value)}
                                onBlur={
                                    (e) => {
                                        let err = validateEmail(e.target.value);
                                        setError({ ...error, email: err })
                                    }
                                }
                                value={email}
                                required
                            />
                        </div>


                        {(error.email == '') ? null :
                            <div className='error-text-register'>{error.email}</div>
                        }

                        <div className='form-group-register'>
                            <button type='submit' className='button-submit-register'>QUÊN MẬT KHẨU</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    )
}

export default ForgotPassword