import axios from 'axios'




export const responseSuccessGoogle = (res) => {
    console.log('GOOGLE');
    console.log(res);
    fetch(
        `http://localhost:5000/user/login-google`,
        {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify({tokenId: res.tokenId}),
        }
    )
        .then(resp => {
            console.log("Google login success", resp)
        })
}