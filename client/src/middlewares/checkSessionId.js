import axios from 'axios';

export const checkSessionId = async () => {
    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }


    let cookie = getCookie("sessionId")
    console.log(cookie);

    if (cookie === ""){
        await axios.get('http://localhost:5000/session', {
            withCredentials: true,
            
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
}