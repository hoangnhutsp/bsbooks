import React from 'react';
import { useState } from 'react'
import "./Profile.css";
import { useSelector} from 'react-redux'
import axios from 'axios'

function Profile() {

    const stateProfile = useSelector(state => state.user)
    console.log(stateProfile);

    const [profile, setProfile] = useState({
        name: "Trang Hoang Nhut",
        phone: "0905749010",
        email: "hoangnhutsp@gmail.com",
        gender: "male",
        birthday: "2015-04-24",
        avatar: "http://localhost:5000/default/images/default-avatar-profile.jpg"
    })


    const [currentAvatar, setCurrentAvatar] = useState(profile.avatar)

    const getBase64 = file => {
        return new Promise(resolve => {
            let baseURL = "";
            let reader = new FileReader();

            reader.readAsDataURL(file);

            reader.onload = () => {
                baseURL = reader.result;
                resolve(baseURL);
            };
        });
    };

    const uploadImage = e => {
        let file = e.target.files[0];
        getBase64(file)
            .then(result => {
                // upload image to server
                const images = [result];
                const data = { images }
                const url = "http://localhost:5000/upload_image";
                axios.post(url, data)
                    .then((res) => res.data)
                    .then((data) => {
                        let path = data.path_images[0];
                        setCurrentAvatar(path);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            })
            .catch(err => {
                console.log(err);
            });

    }
    const submitHanler = e => {
        e.preventDefault();
        profile.avatar = currentAvatar;
        console.log(profile);
    }

    return (
        <div className="container-user-profile">
            <div className="user-title">
                <h1>Hồ Sơ Của Tôi</h1>
                <p>Quản lý thông tin hồ sơ để bảo mật tài khoản </p>
            </div>
            <hr />

            <form onSubmit={submitHanler} className="form-display-user-profile">
                <div className="form-user-profile">
                    <div className="container-info-user-profile">
                        <table id="table-info-user-profile">
                            <tr className="form-group">
                                <td>Email dang nhap</td>
                                <td>
                                    <p>{profile.email}</p>
                                </td>
                            </tr>
                            <tr className="form-group-text">
                                <td>Ho va ten</td>
                                <td>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={profile.name}
                                        onChange={e => setProfile({ ...profile, name: e.target.value })}
                                    />
                                </td>
                            </tr>
                            <tr className="form-group-text">
                                <td>So dien thoai</td>
                                <td>
                                    <input type="tel" name="phone" id="phone"
                                        pattern="[0-0]{1}[0-9]{9}"
                                        required
                                        value={profile.phone}
                                        placeholder="0905 749 010"
                                        onChange={e => setProfile({ ...profile, phone: e.target.value })}
                                    />
                                </td>
                            </tr>

                            <tr className="form-group-radio">
                                <td>Gioi tinh</td>
                                <td>
                                    <input
                                        name="gender" type="radio" value="male"
                                        defaultChecked={profile.gender === "male"}
                                        onChange={e => setProfile({ ...profile, gender: e.target.value })}
                                    />
                                    <span>Nam</span>

                                    <input
                                        name="gender" type="radio" value="female"
                                        defaultChecked={profile.gender === "female"}
                                        onChange={e => setProfile({ ...profile, gender: e.target.value })}
                                    />
                                    <span>Nu</span>
                                    <input
                                        name="gender" type="radio" value="other"
                                        defaultChecked={profile.gender === "other"}
                                        onChange={e => setProfile({ ...profile, gender: e.target.value })}
                                    />
                                    <span>Khac</span>
                                </td>
                            </tr>
                            <tr className="form-group">
                                <td>Ngay sinh</td>
                                <td>
                                    <input
                                        type="date"
                                        value={profile.birthday}
                                        onChange={e => setProfile({ ...profile, birthday: e.target.value })}
                                    />
                                </td>
                            </tr>
                        </table>
                    </div>

                    <div className="container-avatar-user-profile">
                        <div className="avatar-user-profile">

                            <div>
                                <img alt="profile-avatar"id="profile-avatar-current" src={currentAvatar}></img>
                            </div>
                            <input type="file" id="upload-image" name="upload-image" onChange={uploadImage} />
                            <label for="upload-image">Chon Anh</label>
                        </div>

                    </div>

                </div>
                <button type="submit" id="submit-profile">Luu</button>
            </form>
        </div>

    )
}

export default Profile
