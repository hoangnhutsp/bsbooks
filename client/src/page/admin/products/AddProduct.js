import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { getCategoryLists } from '../../../api/other/category_list'
import './AddProduct.css'

const AddProduct = () => {
    //Lấy danh mục 
    const [category, setCatelogy] = useState([])

    useEffect(async () => {
        const data = await getCategoryLists()
        //console.log(data);
        let arr = [];
        data.map((item) => {
            console.log('index: ', item.id_path.length)
            if (item.id_path.length > 6) {
                console.log(item.name)
                arr.push(item)
            }
        })
        setCatelogy(arr)
        console.log('arr', arr)
    }, [])
    //Lấy product
    const [newProduct, setNewProduct] = useState({
        id_category: '',
        name: '',
        url_key: '',
        short_description: '',
        price: '',
        thumbnail_url: 'http://localhost:5000/upload/images/00000_base_url.png',
        publisher: '',
        author_name: '',
        index_name: '',
        index_author_name: '',
    })

    //Lấy Product-detail được thêm
    const [newProductDetail, setNewProductDetail] = useState({
        id_category: newProduct.id_category,
        name: newProduct.name,
        url_key: newProduct.url_key,
        short_description: newProduct.short_description,
        price: newProduct.price,
        thumbnail_url: newProduct.thumbnail_url,
        publisher: newProduct.publisher,
        author_name: newProduct.author_name,
        description: '',
        specifications: [{
            name: "Thông tin chung",
            attributes: [
                {
                    name: "Công ty phát hành",
                    value: newProduct.publisher
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
        images: [{
            base_url: 'http://localhost:5000/upload/images/00000_base_url.png',
            thumbnail_url: '',
            small_url: '',
            medium_url: '',
            large_url: ''
        }],
    })

    //cập nhật product-detail khi product thay đổi
    useEffect(() => {
        setNewProductDetail({
            ...newProductDetail,
            name: newProduct.name,
            id_category: newProduct.id_category,
            price: newProduct.price,
            short_description: newProduct.short_description,
            thumbnail_url: newProduct.thumbnail_url,
            publisher: newProduct.publisher,
            author_name: newProduct.author_name,
            url_key: newProduct.url_key,
        })
    }, [newProduct])

    const [image, setImage] = useState(newProductDetail.images[0])
    //cập nhật danh sách hình ảnh khi thêm hình
    useEffect (() => {
        setNewProductDetail({...newProductDetail, images: image})
    }, [image])

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
                        setImage({...image, base_url: path});
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
    const [specification, setSpecification] = useState(newProductDetail.specifications);

    useEffect(() => {
        setNewProductDetail({ ...newProductDetail, specifications: specification })
    }, [specification])


    //Show các thông tin 
    const [showOtherInf, setShowOtherInf] = useState(false);
    const [baseInf, setBaseInf] = useState(false);
    const [generalInf, setGeneralInf] = useState(false);

    return (
        <div className='product'>
            <div className='container'>
                <div className='col-12'>
                    {/* Nếu khung chưa hình và nút chọn hình bị to thì vào chỉnh file AddProduct.css, sửa heigh của class contrain-image-and-button-new-product */}
                    <div className='contrain-image-and-button-new-product'>
                    <div className='main-img-view'>
                        <img alt='product' className="main-img" src={image.base_url} />
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
                                    <p className="text-name-add-new-product">Tên không dấu</p>
                                    <input
                                        type="text"
                                        name="index_name"
                                        id="index_name"
                                        className="input-add-new-product"
                                        value={newProduct.index_name}
                                        onChange={e => setNewProduct({ ...newProduct, index_name: e.target.value })}
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
                                        onChange={e => setNewProduct({ ...newProduct, author_name: e.author_name })}
                                    />
                                </div>

                                <div className="form-group-text-page-admin">
                                    <p className="text-name-add-new-product">Tên tác giả không dấu</p>
                                    <input
                                        type="text"
                                        name="index_authir_name"
                                        id="index_authir_name"
                                        className="input-add-new-product"
                                        value={newProduct.index_author_name}
                                        onChange={e => setNewProduct({ ...newProduct, index_author_name: e.target.value })}
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
                                        <p className="text-name-add-new-product">Url Key</p>
                                        <input
                                            type="text"
                                            name="url_key"
                                            id="url_key"
                                            className="input-add-new-product"
                                            value={newProduct.url_key}
                                            onChange={e => setNewProduct({ ...newProduct, url_key: e.target.value })}
                                        />
                                    </div>

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

                                    <div className="form-group-text-page-admin">
                                        <p className="text-name-add-new-product">Mô tả ngắn</p>
                                        <textarea
                                            type="text"
                                            name="short_description"
                                            id="short_description"
                                            className="textarea-short-description-new-product"
                                            value={newProduct.short_description}
                                            onChange={e => setNewProduct({ ...newProduct, short_description: e.target.value })}
                                        />
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

                                <div className="form-group-text-page-admin">
                                    <p className="text-name-add-new-product">Công ty phát hành</p>
                                    <input
                                        type="text"
                                        name="attribute_value_1"
                                        id="attribute_value_1"
                                        className="input-add-new-product"
                                        // value={temp.compani}
                                        // onChange={e => setTemp({ ...temp, compani: e.target.value })}
                                    />
                                </div>

                                <div className="form-group-text-page-admin">
                                    <p className="text-name-add-new-product">Ngày xuất bản</p>
                                    <input
                                        type="text"
                                        name="attribute_value_2"
                                        id="attribute_value_2"
                                        className="input-add-new-product"
                                        // value={temp.publicDate}
                                        // onChange={e => setTemp({ ...temp, publicDate: e.target.value })}
                                    />
                                </div>

                                <div className="form-group-text-page-admin">
                                    <p className="text-name-add-new-product">Loại bìa</p>
                                    <input
                                        type="text"
                                        name="attribute_value_3"
                                        id="attribute_value_3"
                                        className="input-add-new-product"
                                        //value={temp.typeCover}
                                        //onChange={e => setTemp({ ...temp, typeCover: e.target.value })}
                                    />
                                </div>

                                <div className="form-group-text-page-admin">
                                    <p className="text-name-add-new-product">SKU</p>
                                    <input
                                        type="text"
                                        name="attribute_value_4"
                                        id="attribute_value_4"
                                        className="input-add-new-product"
                                        // value={temp.SKU}
                                        // onChange={e => setTemp({ ...temp, SKU: e.target.value })}
                                    />
                                </div>

                                <div className="form-group-text-page-admin">
                                    <p className="text-name-add-new-product">Nhà xuất bản</p>
                                    <input
                                        type="text"
                                        name="attribute_value_5"
                                        id="attribute_value_5"
                                        className="input-add-new-product"
                                        // value={temp.publicCompani}
                                        // onChange={e => setTemp({ ...temp, publicCompani: e.target.value })}
                                    />
                                </div>

                                <div className="form-group-text-page-admin">
                                    <p className="text-name-add-new-product">Số trang</p>
                                    <input
                                        type="text"
                                        name="attribute_value_6"
                                        id="attribute_value_6"
                                        className="input-add-new-product"
                                        // value={temp.numberPage}
                                        // onChange={e => setTemp({ ...temp, numberPage: e.target.value })}
                                    />
                                </div>

                                <div className="form-group-text-page-admin">
                                    <p className="text-name-add-new-product">Kích thước</p>
                                    <input
                                        type="text"
                                        name="attribute_value_7"
                                        id="attribute_value_7"
                                        className="input-add-new-product"
                                        // value={temp.size}
                                        // onChange={e => setTemp({ ...temp, size: e.target.value })}
                                    />
                                </div>
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
                <button className="button-update-product" >Thêm Sách</button>

                {/* <button onClick = {()=> console.log(newProduct)}>Test New Product</button>
                <button onClick = {()=> console.log(newProductDetail)}>Test New Product Detail</button> */}

            </div>

        </div>
    )

}
export default AddProduct;