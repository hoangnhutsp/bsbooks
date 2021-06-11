// Điền đúng format eamil
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

//Password phải có 8 kí tự, trong đó có cả chữ và số
export const validatePassWord = text => {
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (text === '')
        return 'Vui lòng nhập password';
    else {
        if (!text.match(re))
            return 'Mật khẩu phải có ít nhất 8 ký tự, trong đó có chứa ít nhất 1 số và 1 chữ cái'
        else return ''
    }
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

//Tên không được chứa số
export const validateName = checkingText => {
    const re = /^[a-z à-ỹ A-Z ]*$/;
    if (checkingText === '') {
        return 'Vui lòng nhập đầy đủ Họ tên';
    }
    else {
        if (!checkingText.match(re))
            return 'Tên không được chưa số';
        else return '';  
    }
}

// Địa chỉ không được để trống
export const validateAddress = checkingText => {
    if (checkingText === '')
        return 'Vui lòng nhập địa chỉ';
    return '';
}

//confirm password phải trùng với password
export const validateConfPassWord = (checkingText, password) => {

    if (checkingText === '' && password !== '')
        return 'Vui lòng nhập lại password';
    else {
        if (checkingText !== password)
            return 'Sai password'
    }

    return '';
}

//Ngày sinh không được quá ngày hiện tại
export const validateDateTime = checkingDate => {
    if(new Date(checkingDate).getTime() >= new Date().getTime())
        return 'Ngày sinh không được vượt quá ngày hiện tại';
    return '';
}

//check trường dữ liệu không được rỗng
export const isEmty = checkingText => {
    if (checkingText === '')
        return 'Vui lòng nhập giá trị'
    return ''
}

//check trường dữ liệu phải là số
//Áp dụng cho price, số trang,phần trăm giảm giá
export const isNumber = checkingNumber => {
    const re = /^[1-9\b]+$/;
    if (!re.test(checkingNumber)) {
        return 'Vui lòng nhập số';
    }
    return ''
}

//check trường Description phải ít nhất 600 kí tự
export const validateDescription = checkingText => {
    const lenth = checkingText.length;
    if (lenth < 600)
        return 'Mô tả phải chứa ít nhất 600 kí tự';
    return ''
}

//check SKU phải 13 kí tự số
export const validateSKU = checkingText => {
    const re = /^[0-9\b]{13}$/;
    if (!re.test(checkingText))
        return 'SKU là một chuỗi 13 kí tự 13 số'
    return ''
}
