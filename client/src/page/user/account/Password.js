import React from 'react'
import { useState } from 'react'
import './Password.css'
function Password() {


    const [password, setPassword] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    })
    const [error, setError] = useState({
        error: 'aasdasd',
        currentPassword: 'aaaa',
        newPassword: 'Loi',
        confirmPassword: 'Loi',
    });

    const setErrorResponse = err => {
        if (err.status) {
            console.log(err.message);
        }
    }
    const submitHanler = e => {
        e.preventDefault();

        console.log(password);

    }
    return (
        <div className="container-user-password">
            <div className="user-title">
                <h1>Doi mat khau</h1>
                <p>Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác </p>
            </div>
            <hr />
            {(error.error)&&<div className="error-error">{error.error}</div>}                

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
                                onChange={(e) => setPassword({ ...password, currentPassword: e.target.value })}
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
                                onChange={(e) => setPassword({ ...password, newPassword: e.target.value })}
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
                                onChange={(e) => setPassword({ ...password, confirmPassword: e.target.value })}
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
