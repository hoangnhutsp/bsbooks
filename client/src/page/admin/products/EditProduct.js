import React, { useState, useEffect } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import { getProductDetails } from '../../../api/product/product_details'
import axios from 'axios'
// Custom component

import './EditProduct.css'
function EditProduct() {
    const { id } = useParams();
    const [data, setData] = useState() // Data product detals
    const [count, setCount] = useState(1) // count
    const [shouldFullPara, setShouldFullPara] = useState(false) // is readmore needed
    const history = useHistory();
    //biến tạm để cập nhật specifications
    const [temp, setTemp] = useState([]);
    //biến tạm lấy những giá trị update còn lại
    const [currentAvatar, setCurrentAvatar] = useState('')

    //lấy đúng giá trị của các trường trong attributes
    const getdata = (data) => {
        let result = {
            compani: '',
            publicDate: '',
            size: '',
            typeCover: '',
            SKU: '',
            publicCompani: '',
            numberPage: '',
        }
        data.map((item, idx) => {
            if (item.name == "Công ty phát hành")
                result.compani = item.value;
            if (item.name == "Ngày xuất bản")
                result.publicDate = item.value;
            if (item.name == "Kích thước")
                result.size = item.value;
            if (item.name == "Loại bìa")
                result.typeCover = item.value;
            if (item.name == "Số trang")
                result.numberPage = item.value;
            if (item.name == "SKU")
                result.SKU = item.value;
            if (item.name == "Nhà xuất bản")
                result.publicCompani = item.value
        })
        console.log(result)
        return result
    }

    useEffect(async () => {
        if (!id) {
            history.push('/')
            return
        }
        const {data} = await getProductDetails(id);
        const data1 = data
        console.log('Đã load data')
        setData(data1)
        let data2 = getdata(data1.specifications[0].attributes)
        setTemp(data2)
        setCurrentAvatar(data1.images[0])
    }, [])

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

    //cập nhật lại giá trị specification
    const UpdateProduct = () => {
        let specification = [{
            name: "Thông tin chung",
            attributes: [temp]
        }];
        setData({ ...data, specifications: specification })
    }

    useEffect(() => {
        console.log(data);
    }, [data])

    return data ? (
        <div className='product'>
            < div className='container' >
                <h3 className='title-update-product'>{data.name}</h3>
                <div className='col-12'>
                    <div className="infor-control-product">
                        <div className="form-group-text-page-admin">
                            <p className="text-name-page-admin">Tác giả</p>
                            <input
                                type="text"
                                name="price"
                                id="price"
                                value={data.author_name}
                                className="input-edit-product"
                                onChange={e => setData({ ...data, author_name: e.author_name })}
                            />
                        </div>

                        <div className="form-group-text-page-admin">
                            <p className="text-name-page-admin">Tên </p>
                            <input
                                type="text"
                                name="price"
                                id="price"
                                className="input-edit-product"
                                value={data.name}
                                onChange={e => setData({ ...data, name: e.target.value })}
                            />
                        </div>

                        <div className="form-group-text-page-admin">
                            <p className="text-name-page-admin">Giá gốc</p>
                            <input
                                type="text"
                                name="price"
                                id="price"
                                className="input-edit-product"
                                value={(data.price)}
                                onChange={e => setData({ ...data, price: e.target.value })}
                            />
                        </div>

                        <div className="form-group-text-page-admin">
                            <p className="text-name-page-admin">Số tiền giảm</p>
                            <input
                                type="text"
                                name="price"
                                id="price"
                                className="input-edit-product"
                                value={(data.discount)}
                                onChange={e => setData({ ...data, discount: e.target.value })}
                            />
                        </div>

                        <div className="form-group-text-page-admin">
                            <p className="text-name-page-admin">Phần trăm giảm giá </p>
                            <input
                                type="text"
                                name="price"
                                id="price"
                                className="input-edit-product"
                                value={data.discount_rate}
                                onChange={e => setData({ ...data, discount_rate: e.target.value })}
                            />
                        </div>

                    </div>
                </div>
                <br></br>
                <div className="col-12">
                    <div className="container-image-product-upload">
                        <img className='edit-image-product' alt="product-image" id="product-image-current" src={currentAvatar}></img>
                    </div>
                    <div className='button-upload-image-product'>
                        <input type="file" id="upload-image" name="upload-image" onChange={uploadImage} />
                        <label htmlFor="upload-image">Chọn Ảnh</label>
                    </div>
                </div>
                <div className="col-12">
                    <br></br>
                    <p className="big-text bold">Thông tin chung:</p>
                    <div className="form-group-text-page-admin">
                        <p className="text-name-page-admin">Công ty phát hành</p>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="input-edit-product"
                            value={temp.compani}
                            onChange={e => setTemp({ ...temp, compani: e.target.value })}
                        />
                    </div>

                    <div className="form-group-text-page-admin">
                        <p className="text-name-page-admin">Ngày xuất bản</p>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="input-edit-product"
                            value={temp.publicDate}
                            onChange={e => setTemp({ ...temp, publicDate: e.target.value })}
                        />
                    </div>

                    <div className="form-group-text-page-admin">
                        <p className="text-name-page-admin">Loại bìa</p>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="input-edit-product"
                            value={temp.typeCover}
                            onChange={e => setTemp({ ...temp, typeCover: e.target.value })}
                        />
                    </div>

                    <div className="form-group-text-page-admin">
                        <p className="text-name-page-admin">SKU</p>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="input-edit-product"
                            value={temp.SKU}
                            onChange={e => setTemp({ ...temp, SKU: e.target.value })}
                        />
                    </div>

                    <div className="form-group-text-page-admin">
                        <p className="text-name-page-admin">Nhà xuất bản</p>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="input-edit-product"
                            value={temp.publicCompani}
                            onChange={e => setTemp({ ...temp, publicCompani: e.target.value })}
                        />
                    </div>

                    <div className="form-group-text-page-admin">
                        <p className="text-name-page-admin">Số trang</p>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="input-edit-product"
                            value={temp.numberPage}
                            onChange={e => setTemp({ ...temp, numberPage: e.target.value })}
                        />
                    </div>

                    <div className="form-group-text-page-admin">
                        <p className="text-name-page-admin">Kích thước</p>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="input-edit-product"
                            value={temp.size}
                            onChange={e => setTemp({ ...temp, size: e.target.value })}
                        />
                    </div>
                </div>
                <div className="col-12">
                    <br></br>
                    <p className="big-text bold">Mô tả:</p>
                    <div className={shouldFullPara ? "" : "less"} dangerouslySetInnerHTML={{ __html: data.description }} />
                    <p className="readmore hover" onClick={() => setShouldFullPara(!shouldFullPara)}>{!shouldFullPara ? "Đọc thêm" : "Thu gọn"}</p>
                </div>
                <button className="button-update-product" onClick={() => UpdateProduct()}>Cập nhật</button>
            </div >

        </div>
    ) : null
}

// Number.prototype.format = function (n, x, s, c) {
//     var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
//         num = this.toFixed(Math.max(0, ~~n));

//     return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ',')) + 'đ';
// };

export default EditProduct