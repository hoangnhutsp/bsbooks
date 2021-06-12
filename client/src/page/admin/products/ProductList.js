import Reac, { useState, useEffect } from 'react'
import Item from './Item.js'
import { getProductLists } from '../../../api/product/product_list.js'
import { Link } from 'react-router-dom'
import iconAdd from './icon/add.png'
import Pagination from './../../../components/Pagination';

const ControlProduct = () => {
    const [page, setPage] = useState(1)
    const [pageMax, setPageMax] = useState(1)

    const [allProduct, setAllProduct] = useState([])
    useEffect(async () => {
        getData();
    }, [])

    useEffect(() => {
        getData();
        window.scrollTo(0, 0)
    }, [page])
    
    const getData = async () => {
        const data = await getProductLists(`?page=${page}`);
        setAllProduct(data.product);
        setPage(data.page)
        setPageMax(data.pageMax)
    }

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

            <div className="pagination-row-flex-end">
                {page&&<Pagination setPage={setPage} page={page} pageMax={pageMax}/>}
            </div>
        </div>
    )
}
export default ControlProduct;