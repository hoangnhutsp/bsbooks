import React from 'react'
import { useState } from 'react'
import './Password.css'

import * as api from './../../../api';

const checkInfoPassword = password => {
    return '';
}
function Password() {

    const [password, setPassword] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    })

    const [error, setError] = useState({
        error: '',
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    });

    const setErrorResponse = res => {
        console.log(res);
        if (res.status) {
            for (let key in password) password[key] = '';
        } else {
            setError({...error, error: res.message})
        }
    }
    const checkError = () => {
        for (let err in error) {
            if (err != 'error' && error[err] !== '') return 1;
        }
        return 0;
    }
    const submitHanler = async e => {
        e.preventDefault();

        if (password.newPassword !== password.confirmPassword)
            setError({...error, confirmPassword: 'Mau khau khong trung khop'})
        else{
            if (!checkError()) {
                api.changePassword({
                    currentPassword: password.currentPassword,
                    newPassword: password.newPassword,
                }, setErrorResponse)
            }
    
        }
    }
    return (
        <div className="container-user-password">
            <div className="user-title">
                <h1>Doi mat khau</h1>
                <p>Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác </p>
            </div>
            <hr />
            {error.error&&<div className="container-error-error">{error.error}</div>}

            <form onSubmit={submitHanler}>
                <table id="table-change-password">
                    <tr className="form-group-text">
                        <td>Mat khau hien tai</td>
                        <td>
                            <input
                                type="password"
                                name="current-password"
                                id="current-password"
                                value={password.currentPassword}
                                onChange={(e) => {
                                    setPassword({ ...password, currentPassword: e.target.value })
                                    let err = checkInfoPassword(e.target.value);
                                    setError({...error,currentPassword: err})
                                }}
                                required
                          
                            />
                            {(error.currentPassword) && <div className="error-text-change-password">{error.currentPassword}</div>}
                        </td>
                    </tr>
                    <tr className="form-group-text">
                        <td className="lable-table-password">Mat khau moi</td>
                        <td>
                            <input
                                type="password"
                                name="new-password"
                                id="new-password"
                                value={password.newPassword}
                                onChange={(e) => {
                                    setPassword({ ...password, newPassword: e.target.value })
                                    let err = checkInfoPassword(e.target.value);
                                    setError({...error,newPassword: err})
                                    if (e.target.value===password.currentPassword)
                                        setError({...error, newPassword: 'Mat khau moi trung voi mat khau hien tai'})
                                }}
                                required
                            />
                            {(error.newPassword) && <div className="error-text-change-password">{error.newPassword}</div>}

                        </td>
                    </tr>
                    <tr className="form-group-text">
                        <td className="lable-table-password">Xac nhan lai mat khau</td>
                        <td>
                            <input
                                type="password"
                                name="confirm-password"
                                id="confirm-password"
                                value={password.confirmPassword}
                                onChange={(e) => {
                                    setPassword({ ...password, confirmPassword: e.target.value })
                                    let err = checkInfoPassword(e.target.value);
                                    setError({...error,confirmPassword: err})
                                    if(e.target.value!==password.newPassword
                                     &&e.target.value.length>=password.newPassword.length)
                                        setError({...error, confirmPassword: 'Mau khau khong trung khop'})
                                }}
                                required
                            />
                            {(error.confirmPassword) && <div className="error-text-change-password">{error.confirmPassword}</div>}

                        </td>
                    </tr>
                </table>

                <div className="btn-submit-re-pass">
                    <button type="submit" id="submit-change-password">Xac nhan</button>
                    <p>Quen mat khau?</p>
                </div>

            </form>

        </div>
    )
}

export default Password
