import Reac, { useState, useEffect } from 'react'
import Item from './Item.js'
import { getProductLists } from '../../../api/product/product_list.js'
import { Link } from 'react-router-dom'
import iconAdd from './icon/add.png'

const ControlProduct = () => {
    const [allProduct, setAllProduct] = useState([])
    useEffect(async () => {
        const data = await getProductLists('')
        console.log(data['product']);
        setAllProduct(data.product)
    }, [])

    return (
        <div className='product-list-admin-page-contrainner'>
            <div className='class-include-link-tag-new-product'>
            <Link to={`new-product/`}>
                <div className='class-include-add-icon'>
                    <img className="class-icon-add-product" src={iconAdd}></img>
                    <h4 className='class-text-form-product'>Thêm sách</h4>
                </div>
            </Link>
            </div>
            <div className='title-control-product-admin'>
                <h4 className="title-image-for-product">
                    Hình ảnh
                </h4>
                <h4 className="title-name-for-product">Tên Sách</h4>
                <h4 className="title-price-for-product">Giá</h4>
            </div>
            {allProduct.map(item => {
                return <Item item={item} ></Item>
            })}
        </div>
    )
}
export default ControlProduct;