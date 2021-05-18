import React, { useState, useEffect } from "react";
import { Button, Form } from "react-form-elements";
import FileBase from 'react-file-base64';

function EditProfile() {


  const [Image, setImage] = useState({ avatar: '' });
  const [infUser, setInfUser] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    address: '',
    gender: '',
    birthday: ''
  });

  const [loginUser, setLoginUser] = useState({
    email: '',
    password: '',
  });





  const onSubmitHandler = () => {
    const data = Image
    fetch(
      `http://localhost:5000/user/updateavatar/60a3cf6613eb114e1c03462b`,
      {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    )
      .then((result) => {
        console.log("File Sent Successful");
        console.log(JSON.stringify(data))
      })
      .catch((err) => {
        console.log(err.message);
      });
  }




  const onSubmitHandler1 = () => {
    fetch(
      `http://localhost:5000/user/register`,
      {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify(infUser),
      }
    )
      .then(resp => resp.json())
      .then(data => {
        if (data.token !== 'undefined' && localStorage == null)
          localStorage.setItem("token", data.token)
      })
  }

  const onSubmitHandler2 = () => {
    fetch(
      `http://localhost:5000/user/login`,
      {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify(loginUser),
      }
    )
      .then(resp => resp.json())
      .then(data => {
        console.log(data.token);
        console.log(!localStorage.getItem('token'));
        if (data.token !== 'undefined' && !localStorage.getItem('token'))
          localStorage.setItem("token", data.token)
      })
  }

  const onSubmitHandler3 = () => {
    fetch(
      `http://localhost:5000/user/60a3ce5413eb114e1c03462a`,
      {
        method: "GET",
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
          'Authorization': `Bearer ${localStorage.token}`,
        },
      }
    )
      .then(resp => console.log(resp.json()));
  }

  const onSubmitHandler4 = () => {
    localStorage.removeItem('token')
  }


  return (
    <div>
      <Form onSubmit={onSubmitHandler} name="edit profile form">
        <div ><FileBase type="file" multiple={false} onDone={({ base64 }) => setImage({ ...Image, avatar: base64 })} /></div>
        <Button type="submit" className="profile-order-button">
          Save Changes
         </Button>
      </Form>

      <Form onSubmit={onSubmitHandler1} name="edit profile form">
        <input name="name" variant="outlined" label="Name" fullWidth value={infUser.name} onChange={(e) => setInfUser({ ...infUser, name: e.target.value })}></input>
        <input name="phone" variant="outlined" label="Phone" fullWidth value={infUser.phone} onChange={(e) => setInfUser({ ...infUser, phone: e.target.value })} />
        <input name="email" variant="outlined" label="Email" fullWidth value={infUser.email} onChange={(e) => setInfUser({ ...infUser, email: e.target.value })} />
        <input name="password" variant="outlined" label="Password" fullWidth value={infUser.password} onChange={(e) => setInfUser({ ...infUser, password: e.target.value })} />
        <input name="address" variant="outlined" label="Address" fullWidth value={infUser.address} onChange={(e) => setInfUser({ ...infUser, address: e.target.value })} />
        <input name="gender" variant="outlined" label="Gender" fullWidth value={infUser.gender} onChange={(e) => setInfUser({ ...infUser, gender: e.target.value })} />
        <input name="birthday" variant="outlined" label="Birthday" fullWidth value={infUser.birthday} onChange={(e) => setInfUser({ ...infUser, birthday: e.target.value })} />
        <Button type="submit" className="profile-order-button">
          Đăng kí
         </Button>
      </Form>
      <Form onSubmit={onSubmitHandler2} name="edit profile form">
        <input name="email" variant="outlined" label="Email" fullWidth value={loginUser.email} onChange={(e) => setLoginUser({ ...loginUser, email: e.target.value })} />
        <input name="password" variant="outlined" label="Password" fullWidth value={loginUser.password} onChange={(e) => setLoginUser({ ...loginUser, password: e.target.value })} />
        <Button type="submit" className="profile-order-button">
          Đăng Nhập
         </Button>
      </Form>

      <button onClick={onSubmitHandler3}>Profile</button>

      <button onClick={onSubmitHandler4}>Logout</button>
    </div>

  )
};

export default EditProfile;





