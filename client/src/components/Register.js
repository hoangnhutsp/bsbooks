import './Register.css';
import React, { useState, useEffect } from "react";

function Register() {
    const [registerData, setRegisterData] = useState(
        {
            phone: '',
            name: '',
            email: '',
            address: '',
            gender: '',
            birthday: '',
            password: '',
            confirmPassWord: ''

        }
    )
    //Số điện thoại ko chứa chữ cái, không để trống và phải gồm 10 số
    const [checkPhoneNumber, setCheckPhoneNumber] = useState(
        {
            isInputValid: true,
            errorMessage: ''
        }
    )

    const validatePhoneNumber = checkingText => {
        console.log(checkingText)
        const regexp = /^\d{10}$/;
        const re = /^[0-9\b]+$/;
        //check not null
        if (checkingText == '') {
            setCheckPhoneNumber({ ...checkPhoneNumber, errorMessage: 'Vui lòng nhập số điện thoại', isInputValid: false })
        }
        else {
            if (!re.test(checkingText)) {
                setCheckPhoneNumber({ ...checkPhoneNumber, errorMessage: 'Số điện thoại phải là số', isInputValid: false })
            }
            else {
                if (regexp.exec(checkingText) === null)
                    setCheckPhoneNumber({ ...checkPhoneNumber, errorMessage: 'Số điện thoại phải 10 kí tự', isInputValid: false })
                else setCheckPhoneNumber({ ...checkPhoneNumber, errorMessage: '', isInputValid: true })
            }
        }
    }
    //Tên không được để trống và không chứa số
    const [checkName, setCheckName] = useState({
        isInputValid: true,
        errorMessage: ''
    })
    const validateName = checkingText => {
        const re = /^[a-zA-Z]+$/;
        if (checkingText == '') {
            setCheckName({ ...checkName, errorMessage: 'Vui lòng nhập đầy đủ Họ tên', isInputValid: false })
        }
        else {
            if (!re.test(checkingText))
                setCheckName({ ...checkName, errorMessage: 'Tên chỉ được chứa chữ cái', isInputValid: false })
            else setCheckName({ ...checkName, errorMessage: '', isInputValid: true })
        }
    }
    //kiểm tra format email và không được rỗng
    const [checkEmail, setCheckEmail] = useState(
        {
            isInputValid: true,
            errorMessage: ''
        })
    const validateEmail = checkingText => {
        const re = /\S+@\S+\.\S+/;
        if (checkingText == '')
            setCheckEmail({ ...checkEmail, errorMessage: 'Vui lòng điền email', isInputValid: false })
        else {
            if (!re.test(checkingText))
                setCheckEmail({ ...checkEmail, errorMessage: 'Vui lòng nhập đúng định dạng Email', isInputValid: false })
            else setCheckEmail({ ...setCheckEmail, errorMessage: '', isInputValid: true })
        }
    }
    //check địa chỉ ko được rỗng
    const [checkAddress, setCheckAddress] = useState({
        isInputValid: true,
        errorMessage: ''
    })
    const validateAddress = checkingText => {
        if (checkingText == '')
            setCheckAddress({ ...checkAddress, errorMessage: 'Vui lòng nhập địa chỉ', isInputValid: false })
        else setCheckAddress({ ...checkAddress, errorMessage: '', isInputValid: true })
    }

    //check password ko được rỗng
    const [checkPassWord, setCheckPassWord] = useState({
        isInputValid: true,
        errorMessage: ''
    })
    const validatePassWord = checkingText => {
        if (checkingText == '')
            setCheckPassWord({ ...checkPassWord, errorMessage: 'Vui lòng nhập password', isInputValid: false })
        else setCheckPassWord({ ...checkPassWord, errorMessage: '', isInputValid: true })
    }

    //check confirmPass
    const [checkConfPassWord, setCheckConfPassWord] = useState({
        isInputValid: true,
        errorMessage: ''
    })
    const validateConfPassWord = checkingText => {
        if (checkingText == '' && registerData.password != '')
            setCheckConfPassWord({ ...checkConfPassWord, errorMessage: 'Vui lòng nhập lại password', isInputValid: false })
        else {
            if (checkingText !== registerData.password)
                setCheckConfPassWord({ ...checkConfPassWord, errorMessage: 'Sai password', isInputValid: false })
            else setCheckConfPassWord({ ...checkConfPassWord, errorMessage: '', isInputValid: true })
        }
    }
    //check giới tính
    const [checkGender, setCheckGender] = useState({
        isInputValid: true,
        errorMessage: ''
    })

    //submit
    const Signup = () => {
        if (!checkEmail.isInputValid || !checkPassWord.isInputValid || !checkPhoneNumber.isInputValid ||
            !checkName.isInputValid || !checkConfPassWord.isInputValid || !checkGender.isInputValid || !checkAddress.isInputValid)
            setRegisterData({
                ...registerData,
                phone: '',
                name: '',
                email: '',
                address: '',
                gender: '',
                birthday: '',
                password: '',
                confirmPassWord: ''
            })
        if (registerData.gender == '' || registerData.name == '' || registerData.password == ''|| registerData.phone=='' ||
            registerData.confirmPassWord=='' || registerData.email=='' || registerData.birthday=='' || registerData.address=='') {
            setRegisterData({ ...registerData,
                phone: '',
                name: '',
                email: '',
                address: '',
                gender: '',
                birthday: '',
                password: '',
                confirmPassWord: '' })
        }
        // if (registerData.confirmPassWord == '' && registerData.password != '')
        //     setCheckConfPassWord({ ...checkConfPassWord, errorMessage: 'Vui lòng nhập lại mật khẩu', isInputValid: false })
        // else {
        //     if (registerData.gender == '')
        //         setCheckGender({ ...checkGender, errorMessage: 'Vui lòng chọn giới tính', isInputValid: false })
        //     else console.log(registerData);
        // }
    }


    return (
        <div className='containner-register'>
            <div className='login-signup-register'>
                <div className='col-sm-6-register'>
                    <div className='article-register'>
                        <h3 className='text-center-register'>ĐĂNG KÍ</h3>
                        <form className='signup-register'>
                            <div className='form-group-register'>
                                <input
                                    type='text'
                                    className='form-control-register'
                                    placeholder='Họ và tên'
                                    onChange={(e) => {
                                        setRegisterData({ ...registerData, name: e.target.value })
                                    }}
                                    onBlur={(e) => { validateName(e.target.value) }}
                                    required></input>
                            </div>
                            {(checkName.isInputValid) ? null :
                                <div>{checkName.errorMessage}</div>
                            }

                            <div className='form-group-register'>
                                <input type='email'
                                    className='form-control-register'
                                    placeholder='Địa chỉ Email'
                                    onChange={(e) => {
                                        
                                        setRegisterData({ ...registerData, email: e.target.value })
                                    }}
                                    onBlur={(e) => { validateEmail(e.target.value) }}
                                    required></input>
                            </div>
                            {(checkEmail.isInputValid) ? null :
                                <div>{checkEmail.errorMessage}</div>
                            }

                            <div className='form-group-register'>
                                <input
                                    type='text'
                                    className='form-control-register'
                                    placeholder='Số điện thoại'
                                    onChange={(e) => {
                                        setRegisterData({ ...registerData, phone: e.target.value })
                                    }}
                                    onBlur={(e) => { validatePhoneNumber(e.target.value) }}
                                    required></input>
                            </div>
                            {(checkPhoneNumber.isInputValid) ? null :
                                <div>{checkPhoneNumber.errorMessage}</div>
                            }

                            <div className='form-group-register'>
                                <input type='text'
                                    className='form-control-register'
                                    placeholder='Địa chỉ'
                                    onChange={(e) => {
                                        setRegisterData({ ...registerData, address: e.target.value })
                                    }}
                                    onBlur={(e) => { validateAddress(e.target.value) }}
                                    required></input>
                            </div>
                            {(checkAddress.isInputValid) ? null :
                                <div>{checkAddress.errorMessage}</div>
                            }

                            <div className='form-group-register'>
                                <input type='date'
                                    className='form-control-register'
                                    placeholder='Ngày sinh'
                                    onChange={(e) => {
                                        setRegisterData({ ...registerData, birthday: e.target.value })
                                    }}
                                    required></input>
                            </div>

                            <div className='form-group-register'>
                                <input type='password'
                                    className='form-control-register'
                                    placeholder='Mật khẩu'
                                    onChange={(e) => {
                                        setRegisterData({ ...registerData, password: e.target.value })
                                    }}
                                    onBlur={(e) => { validatePassWord(e.target.value) }}></input>
                            </div>
                            {(checkPassWord.isInputValid) ? null :
                                <div>{checkPassWord.errorMessage}</div>
                            }

                            <div className='form-group-register'>
                                <input type='password'
                                    className='form-control-register'
                                    placeholder='Nhập lại mật khẩu'
                                    onChange={(e) => {
                                        setRegisterData({ ...registerData, confirmPassWord: e.target.value })
                                    }}
                                    onBlur={(e) => { validateConfPassWord(e.target.value) }}></input>
                            </div>
                            {(checkConfPassWord.isInputValid) ? null :
                                <div>{checkConfPassWord.errorMessage}</div>
                            }

                            <div className='form-group-register'>
                                <input name='gioitinh'
                                    type='radio' value='Nam'
                                    onChange={(e) => {
                                        setRegisterData({ ...registerData, gender: e.target.value })
                                    }} />Nam
                            <input name='gioitinh'
                                    type='radio'
                                    value='Nu'
                                    onChange={(e) => {
                                        setRegisterData({ ...registerData, gender: e.target.value })
                                    }} />Nữ
                        </div>
                            {(checkGender.isInputValid) ? null :
                                <div>{checkGender.errorMessage}</div>
                            }

                            <div className='form-group-register'>
                                <button type='submit' className='button-submit-register' onClick={Signup}>Đăng kí</button>
                            </div>
                        </form>
                    </div>
                    <button onClick={Signup}>thử data</button>
                </div>
            </div>
            /** test registerData*/
            <div className='login-signup-register'>
                <div>{registerData.name}</div>
                <div>{registerData.phone}</div>
                <div>{registerData.email}</div>
                <div>{registerData.address}</div>
                <div>{registerData.birthday}</div>
                <div>{registerData.password}</div>
                <div>{registerData.confirmPassWord}</div>
                <div>{registerData.gender}</div>
            </div>
        </div>
    )
};
export default Register;