import React from 'react';
import { useState, useEffect } from 'react'
import '../../../page/user/account/Profile.css';
import { Link, useParams, useHistory } from 'react-router-dom'
import { getUserDetail } from '../../../api/other/user_detail.js'



//import { userUpdateInfo } from './../../../redux/actions/user'
function ViewUser() {
    const { id } = useParams();

    const [profile, setProfile] = useState({
        name: "Trang Hoang Nhut",
        phone: "0905749010",
        email: "a@gmail.com",
        gender: "female",
        birthday: "2015-04-24",
        avatar: "http://localhost:5000/default/images/default-avatar-profile.jpg"
    })

    const convertIOSDateToYMD = date => {
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let dt = date.getDate();

        if (dt < 10) {
            dt = '0' + dt;
        }
        if (month < 10) {
            month = '0' + month;
        }
        let yymmdd = year + '-' + month + '-' + dt;
        return yymmdd;
    }
    useEffect(async() => {
        //let infoUser = userStore.infoUser;
        const infoUser = await getUserDetail(id)
        console.log(infoUser)

        if (infoUser) {
            infoUser.birthday = convertIOSDateToYMD(new Date(infoUser.birthday))      
            setCurrentAvatar(infoUser.avatar);      
            setProfile(infoUser)
        }

    }, [])
    const [currentAvatar, setCurrentAvatar] = useState(profile.avatar)

    const submitHanler = e => {
        e.preventDefault();
        profile.avatar = currentAvatar;
        console.log(profile);
    }

    return (
        <div className="container-user-profile">
            <div className="user-title">
                <h1>Hồ Sơ Cá nhân của {profile.name}</h1>
                <p>Quản lý thông tin hồ sơ để bảo mật tài khoản </p>
            </div>
            <hr />

            <form onSubmit={submitHanler} className="form-display-user-profile">
                <div className="form-user-profile">
                    <div className="container-info-user-profile">
                        <table id="table-info-user-profile">
                            <tbody>

                                <tr className="form-group-text">
                                    <td>Email đăng nhập</td>
                                    <td>
                                        <p>{profile.email}</p>
                                    </td>
                                </tr>
                                <tr className="form-group-text">
                                    <td>Họ và tên</td>
                                    <td>
                                        <p>{profile.name}</p>
                                    </td>
                                </tr>
                                <tr className="form-group-text">
                                    <td>Số điện thoại</td>
                                    <td>
                                        <p>{profile.phone}</p>
                                    </td>
                                </tr>

                                <tr className="form-group-radio">
                                    <td>Gioi tinh</td>
                                    <td>
                                        <p>{(profile.gender === 'male')? 'Nam':(profile.gender === 'female')? 'Nữ': 'Khác'}</p>
                                    </td>
                                </tr>
                                <tr className="form-group-text">
                                    <td>Ngày sinh</td>
                                    <td>
                                        <p>{profile.birthday}</p>
                                    </td>
                                </tr>
                            </tbody>

                        </table>
                    </div>

                    <div className="container-avatar-user-profile">
                        <div className="avatar-user-profile">

                            <div>
                                <img alt="profile-avatar" id="profile-avatar-current" src={currentAvatar}></img>
                            </div>
                            <p>Ảnh đại diện</p>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default ViewUser
