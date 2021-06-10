import React, { useState, useEffect } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import { getProductDetails } from '../../../api/product/product_details'
import axios from 'axios'

import * as apiProduct from './../../../api/product'


import './EditProduct.css'
function EditProduct() {
    const { id } = useParams();
    const [data, setData] = useState() // Data product detals
    const [shouldFullPara, setShouldFullPara] = useState(false) // is readmore needed
    const history = useHistory();

    const [currentAvatar, setCurrentAvatar] = useState('')

    const [specifications, setSpecifications] = useState({})


    useEffect(async () => {
        if (!id) {
            history.push('/')
            return
        }
        const { data } = await getProductDetails(id);
        const data1 = data
        console.log('Đã load data')
        setData(data1)
        setSpecifications(data1.specifications[0])
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
                const igms = { images }
                const url = "http://localhost:5000/upload_image";
                axios.post(url, igms)
                    .then((res) => res.data)
                    .then((imgs) => {
                        console.log(imgs);
                        let path = imgs.path_images[0];
                        setData({...data, thumbnail_url: path});
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
    const UpdateProduct = async () => {
        setData({ ...data, specifications: specifications })
        let newProduct = data;
        newProduct.specifications = [specifications];
        console.log(newProduct);
        await apiProduct.updateProduct(newProduct);

    }


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
                                onChange={e => setData({ ...data, author_name: e.target.value })}
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
                        <img className='edit-image-product' alt="product-image" id="product-image-current" src={data.thumbnail_url}></img>
                    </div>
                    <div className='button-upload-image-product'>
                        <input type="file" id="upload-image" name="upload-image" onChange={uploadImage} />
                        <label htmlFor="upload-image">Chọn Ảnh</label>
                    </div>
                </div>
                <div className="col-12">
                    <br></br>
                  
                            <div>
                                <p className="big-text bold">{specifications.name}</p>
                                {specifications.attributes&&specifications.attributes.map((item, idx) => {
                                    return (
                                        <div className="form-group-text-page-admin">
                                            <p className="text-name-page-admin">{item.name}</p>
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                className="input-edit-product"
                                                value={item.value}
                                                onChange={e => {
                                                    let att = specifications.attributes;
                                                    att[idx].value = e.target.value;
                                                    setSpecifications({...specifications, attributes: att});
                                                }
                                                }
                                            />
                                        </div>
                                    )
                                })}
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