import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { getCategoryLists } from '../../../api/other/category_list'
import './AddProduct.css'
import * as apiProduct from './../../../api/product'
const AddProduct = () => {
    //Lấy danh mục 
    const [category, setCatelogy] = useState([])

    useEffect(async () => {
        const data = await getCategoryLists()
        //console.log(data);
        let arr = [];
        data.map((item) => {
            if (item.id_path.length > 6) {
                arr.push(item)
            }
        })
        setCatelogy(arr)
    }, [])



    const [newProduct, setNewProduct] = useState({
        id_category: '',
        name: '',
        price: 0,
        thumbnail_url: 'http://localhost:5000/default/images/product_default.png',
        author_name: '',
    })

    //Lấy Product-detail được thêm
    const [newProductDetail, setNewProductDetail] = useState({
        description: '',
        specifications: [{
            name: "Thông tin chung",
            attributes: [
                {
                    name: "Công ty phát hành",
                    value: '',
                },
                {
                    name: "Ngày xuất bản",
                    value: ''
                },
                {
                    name: "Loại bìa",
                    value: ''
                },
                {
                    name: "SKU",
                    value: ''
                },
                {
                    name: "Nhà xuất bản",
                    value: ''
                },
                {
                    name: "Số trang",
                    value: ''
                },
                {
                    name: 'Kích thước',
                    value: ''
                }
            ]
        }],
        images: ['http://localhost:5000/upload/images/00000_base_url.png',
        ],
    })
    //cập nhật product-detail khi product thay đổi

    const [image, setImage] = useState(newProduct.thumbnail_url)
    //cập nhật danh sách hình ảnh khi thêm hình

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
                        setImage(path);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            })
            .catch(err => {
                console.log(err);
            });

    }

    //biến tạm để cập nhật specifications
    const [specification, setSpecification] = useState(newProductDetail.specifications[0]);

    useEffect(() => {
        setNewProductDetail({ ...newProductDetail, specifications: specification })
    }, [specification])


    //Show các thông tin 
    const [showOtherInf, setShowOtherInf] = useState(false);
    const [baseInf, setBaseInf] = useState(false);
    const [generalInf, setGeneralInf] = useState(false);


    const submitHandler = async () => {
        console.log('submit');
        await apiProduct.createProduct({newProduct, newProductDetail, image})
        .then(res => res.data)
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        })
    }
    return (
        <div className='product'>
            <div className='container'>
                <div className='col-12'>
                    {/* Nếu khung chưa hình và nút chọn hình bị to thì vào chỉnh file AddProduct.css, sửa heigh của class contrain-image-and-button-new-product */}
                    <div className='contrain-image-and-button-new-product'>
                        <div className='main-img-view'>
                            <img alt='product' className="main-img" src={image} />
                            <br></br>
                            <div className='button-upload-image-product'>
                                <input type="file" id="upload-image" name="upload-image" onChange={uploadImage} />
                                <label htmlFor="upload-image">Chọn Ảnh</label>
                            </div>
                        </div>
                    </div>

                </div>
                <br></br>
                <div className='container-information-new-product'>
                    <div className='col-12'>
                        <div className="form-group-text-page-admin">
                            <h4 onClick={() => setBaseInf(!baseInf)}>THÔNG TIN CƠ BẢN VỀ SÁCH:</h4>
                        </div>
                        {/* thông tin cơ bản về sách */}
                        {(!baseInf) ? null :
                            <div>
                                <div className="form-group-text-page-admin">
                                    <p className="text-name-add-new-product">Tên </p>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="input-add-new-product"
                                        value={newProduct.name}
                                        onChange={e => setNewProduct({ ...newProduct, name: e.target.value })}
                                    />
                                </div>

                                <div className="form-group-text-page-admin">
                                    <p className="text-name-add-new-product">Tác giả</p>
                                    <input
                                        type="text"
                                        name="author"
                                        id="author"
                                        value={newProduct.author_name}
                                        className="input-add-new-product"
                                        onChange={e => setNewProduct({ ...newProduct, author_name: e.target.value })}
                                    />
                                </div>

                                <div className="form-group-text-page-admin">
                                    <p className="text-name-add-new-product">Giá gốc</p>
                                    <input
                                        type="text"
                                        name="price"
                                        id="price"
                                        className="input-add-new-product"
                                        value={(newProduct.price)}
                                        onChange={e => setNewProduct({ ...newProduct, price: e.target.value })}
                                    />
                                </div>
                            </div>}
                    </div>
                    {/* Kết thúc khung hiện */}
                    <br></br>
                    <div className='col-12'>
                        <h4 onClick={() => setShowOtherInf(!showOtherInf)}>THÔNG TIN KHÁC</h4>
                        {/* khung hiện thông tin khác */}
                        {(!showOtherInf) ? null :
                            <div>
                                <div className="infor-control-product">

                                    <div className="form-group-text-page-admin">
                                        <p className="text-name-add-new-product">Danh mục</p>
                                        <select
                                            name="category"
                                            id="category"
                                            className="input-add-new-product"
                                            value={newProduct.id_category}
                                            onChange={e => setNewProduct({ ...newProduct, id_category: e.target.value })}
                                        >
                                            <option value=''>N/A</option>
                                            {category.map(item => {
                                                return <option value={item.id}>{item.name}</option>
                                            })}
                                        </select>
                                    </div>

                                </div>
                            </div>}
                        {/* kết thúc khung hiện */}
                    </div>
                    <br></br>
                    <div className='col-12'>
                        <h4 onClick={() => setGeneralInf(!generalInf)}>THÔNG TIN CHUNG</h4>
                        {(!generalInf) ? null :
                            <div>
                                {specification && specification.attributes.map((key, idx) => {
                                    return (<div className="form-group-text-page-admin">
                                        <p className="text-name-add-new-product">{key.name}</p>
                                        <input
                                            type="text"
                                            name="attribute_value_1"
                                            id="attribute_value_1"
                                            className="input-add-new-product"
                                            value={key.value}
                                            onChange={(e) => {
                                                let att = specification.attributes;
                                                att[idx].value = e.target.value;
                                                console.log(att);
                                                setSpecification({...specification, attributes: att});
                                            }}
                                        />
                                    </div>)
                                })}
                             
                            </div>}
                    </div>
                    <br></br>
                    <div className='col-12'>
                        <h4>MÔ TẢ CHI TIẾT</h4>
                        <br></br>
                        <textarea
                            type="text"
                            name="description"
                            id="description"
                            className="textarea-description-new-product "
                            value={newProductDetail.description}
                            onChange={e => setNewProductDetail({ ...newProductDetail, description: e.target.value })}
                        />
                    </div>
                </div>
                <button className="button-update-product" onClick={(e) => submitHandler()}>Thêm Sách</button>
            </div>

        </div>
    )

}
export default AddProduct;