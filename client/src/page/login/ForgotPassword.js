import './Register.css';
import React, { useState, useEffect } from "react";

import {
    validateEmail,
} from './CheckInfo'

function ForgotPassword() {
    const [forgotpassData, setForgotpassData] = useState({
        email: '',
    })

    const [error, setError] = useState({
        email: '',
    })

    return (<div className='containner-register'>
        <div className='login-signup-register'>
            <div className='col-sm-6-register'>
                <div className='article-register'>
                    <h3 className='text-center-register'>QUÊN MẬT KHẨU</h3>
                    <form className='signup-register'>
                        <div className='form-group-register'>
                            <input type='email'
                                className='form-control-register'
                                placeholder='Địa chỉ Email'
                                onChange={(e) => setForgotpassData({ ...forgotpassData, email: e.target.value })}
                                onBlur={
                                    (e) => {
                                        let err = validateEmail(e.target.value);
                                        setError({ ...error, email: err })
                                    }
                                }
                                value={forgotpassData.email}
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