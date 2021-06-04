export const validateEmail = text => {
    const re = /\S+@\S+\.\S+/;
    if (text === ''){
        return 'Vui lòng điền email'
    }
    else {
        if (!re.test(text)) return 'Vui lòng nhập đúng định dạng Email';
    }

    return '';
}

export const validatePassWord = text => {
    if (text === '')
        return 'Vui lòng nhập password';
    return '';
}


//Số điện thoại ko chứa chữ cái, không để trống và phải gồm 10 số
export const validatePhoneNumber = checkingText => {
    const regexp = /^\d{10}$/;
    const re = /^[0-9\b]+$/;
    //check not null
    if (checkingText === '') {
        return 'Vui lòng nhập số điện thoại';
    }
    else {
        if (!re.test(checkingText)) {
            return 'Số điện thoại phải là số';
        }
        else {
            if (regexp.exec(checkingText) === null)
                return 'Số điện thoại phải 10 kí tự';
        }
    }

    return '';
}


export const validateName = checkingText => {
    const re = /^[a-zA-Z]+$/;
    if (checkingText === '') {
        return 'Vui lòng nhập đầy đủ Họ tên';
    }
    else {
        if (!re.test(checkingText))
            return 'Tên chỉ được chứa chữ cái';
    }

    return '';
}


export const validateAddress = checkingText => {
    if (checkingText === '')
        return 'Vui lòng nhập địa chỉ';
    return '';
}

export const validateConfPassWord = (checkingText, password) => {
    if (checkingText === '' && password !== '')
        return 'Vui lòng nhập lại password';
    else {
        if (checkingText !== password)
            return 'Sai password'
    }

    return '';
}