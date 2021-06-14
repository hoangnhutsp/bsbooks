import '../../login/Register.css';
import React, { useState, useEffect } from "react";
import generator from 'generate-password';

import {
    validatePhoneNumber,
    validateName,
    validateEmail,
} from '../../login/CheckInfo'

import {
    useHistory,
} from 'react-router-dom'
//api add admin
import * as apiAdmin from '../../../api/admin'

import './AddAdminForm.css'

function AddAdmin() {
    const newPass = generator.generate({
        length: 8,
        lowercase: true,
        uppercase: true, 
        numbers: true
    })
    const history = useHistory();
    const [displayPass, setDisplayPass] = useState(0) 
    const [passwordInForm, setPasswordInForm] = useState('')
    const [registerData, setRegisterData] = useState({
        error: '',
        phone: '0905749010',
        name: 'NHUTNHUT',
        email: 'adddmiin@gmail.com',
        gender: 'male',
        birthday: '2000-04-04',
        password: newPass,
        role: 'ADMIN',
    })

    const [error, setError] = useState({
        error: '',
        phone: '',
        name: '',
        email: '',
        gender: '',
        birthday: '',
        password: '',
    })


    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(registerData);
        await apiAdmin.addAdmin(registerData)
        .then(res => res.data)
        .then(data => {
            console.log(data);
            if (data.status) history.push('/admin/users');
            else {
                setError({...error, error: data.message})
            }
        })
        .catch(err => console.log(err))
    }


    return (
        <div className="container-register-admin-add">

      
        <div className='containner-register'>
            <div className='login-signup-register'>
                <div className='col-sm-6-register-add-admin'>
                    <div className='article-register'>
                        <h3 className='text-center-register'>THÊM ADMIN</h3>
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
                                    value={passwordInForm}
                                    onFocus = {() => setDisplayPass(1)}
                                    onBlur = {() => {
                                        setPasswordInForm(registerData.password)
                                        setDisplayPass(0)}}>

                                </input>
                            </div>
                            {(displayPass == 0) ? null :
                                <p className='error-text-register'>password: {registerData.password}</p>
                            }
                       
                            {(error.gender == '') ? null :
                                <div className='error-text-register'>{error.gender}</div>
                            }

                            <div className='form-group-register'>
                                <input name='gioitinh'
                                    type='radio' value='male'
                                    checked={registerData.gender === 'male'}
                                    className='gender-user'
                                    onChange={(e) => {
                                        setRegisterData({ ...registerData, gender: e.target.value })
                                    }} />Nam
                                <input name='gioitinh'
                                    type='radio'
                                    value='female'
                                    checked={registerData.gender === 'female'}
                                    className='gender-user'
                                    onChange={(e) => {
                                        setRegisterData({ ...registerData, gender: e.target.value })
                                    }} />Nữ
                            </div>
                            {(error.gender == '') ? null :
                                <div className='error-text-register'>{error.gender}</div>
                            }

                            <div className='form-group-register'>
                                <button type='submit' className='button-submit-sigup'>THÊM MỚI</button>
                            </div>
                        </form>

                    </div>
                </div>

            </div>
        </div>
        </div>
    )
};
export default AddAdmin;