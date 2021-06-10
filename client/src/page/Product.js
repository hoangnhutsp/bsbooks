import React, { useState, useEffect } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import { getProductDetails } from '../api/product/product_details'
// Custom component
import ImgShowcase from '../components/img_showcase'
import Breadcrumb from '../components/Breadcrumb.js';
import RecentlyView from '../components/product_list/RecentlyView'

import * as apiEvaluate from '../api/evaluate';
import { useDispatch } from 'react-redux';

import { addToCart } from './../redux/actions/cart'
import CommentProduct from '../components/comment/CommentProduct'
import './product.css'
function Product() {
    const { id } = useParams();
    const [data, setData] = useState() // Data product detals
    const [count, setCount] = useState(1) // count
    const [shouldFullPara, setShouldFullPara] = useState(false) // is readmore needed
    const history = useHistory();
    const dispatch = useDispatch();
    const [breadcrumb, setBreadcrumb] = useState()
    const [evaluate, setEvaluate] = useState([])

    useEffect(async () => { // Fetch product details
        if (!id) {
            history.push('/')
            return
        }
        const data = await getProductDetails(id);
        setData(data.data);
        setBreadcrumb(data.breadcrumb);

        const evaluate = await apiEvaluate.getEvaluateToProduct({idProduct: id})
        setEvaluate(evaluate.data)
        window.scrollTo(0, 0)
    }, [])

    const buttonAddToCart = () => {
        console.log(count);
        let info = {};
        info._id = data._id;
        info.name = data.name;
        info.quantity = count;
        info.image = data.thumbnail_url;
        info.price = data.price;
        info.checked = 1;

        dispatch(addToCart(info))
    }
    return data ? (
        <div>
            <div className='product'>
                <Breadcrumb breadcrumb={breadcrumb} title={data.name} />
                < div className='container' >
                    <div className='col-4'>
                        {data.images && <ImgShowcase images={data.images} />}
                    </div>
                    <div className='col-6'>
                        <p>Tác giả: {data.author_name}</p>
                        <p>{data.name}</p>
                        <div className='row price-view'>
                            <p className='big-text bold child'>{(data.price - data.discount).format(0, 3)}</p>
                            <p className='med-text line-through child    '>{data.price.format(0, 3)} </p>
                            <p className='sml-text child'>-{data.discount_rate}%</p>
                        </div>

                        <p className='sml-text'>Bạn hãy <Link><a>NHẬP ĐỊA CHỈ</a></Link> nhận hàng để được dự báo thời gian & chi phí giao hàng một cách chính xác nhất.</p>
                        <p>Số lượng</p>
                        <div className='row'>
                            <div className='square hover' onClick={() => count >= 1 && setCount(count - 1)}>
                                <p>-</p>
                            </div>
                            <div className='square count' >
                                <p>{count}</p>
                            </div>
                            <div className='square hover' onClick={() => count < 10 && setCount(count + 1)}>
                                <p>+</p>
                            </div>
                        </div>
                        <div className='addToCard center hover' onClick={e => buttonAddToCart()}>
                            <p className='white'>Chọn mua</p>
                        </div>

                    </div>
                    <div className="col-12">
                        <br></br>
                        <p className="big-text bold">Thông tin chung:</p>
                        {data.specifications[0].attributes.map(item => {
                            return (
                                <div>
                                    <p>{item.name} : {item.value}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className="col-12">
                        <br></br>
                        <p className="big-text bold">Mô tả:</p>
                        <div className={shouldFullPara ? "" : "less"} dangerouslySetInnerHTML={{ __html: data.description }} />
                        <p className="readmore hover" onClick={() => setShouldFullPara(!shouldFullPara)}>{!shouldFullPara ? "Đọc thêm" : "Thu gọn"}</p>
                    </div>
                </div >
            </div>
            <RecentlyView />
            <div className="container-comment-product-in-pb">
                <CommentProduct data={evaluate} idProduct={id}/>
                
            </div>
        </div>
    ) : null
}

Number.prototype.format = function (n, x, s, c) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
        num = this.toFixed(Math.max(0, ~~n));
        return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ',')) + 'đ';
};

export default Product

