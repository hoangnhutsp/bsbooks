import React, { useState, useEffect } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import { getProductDetails } from '../api/product/product_details'
// Custom component
import ImgShowcase from '../components/img_showcase'
import Breadcrumb from '../components/Breadcrumb.js';
import RecentlyView from '../components/product_list/RecentlyView'
import ProductListSame from '../components/product_list/SameProduct'

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
        console.log('data: ',data)
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
                        <div className="product-detail-name-col-6">
                            <p>{data.name}</p>
                        </div>
                        <p><span className="product-detail-name-col-6-span">T??c gi???:</span> {data.author_name}</p>
                        <div className='row price-view'>
                            <p className='big-text bold child'>{(data.price).format(0, 3)}</p>
                            <p className='med-text line-through child'>{(data.discount + data.price).format(0, 3)} </p>
                            <p className='sml-text child'>{data.discount_rate}%</p>
                        </div>

                        <p className='sml-text'>B???n h??y <Link><a>NH???P ?????A CH???</a></Link> nh???n h??ng ????? ???????c d??? b??o th???i gian & chi ph?? giao h??ng m???t c??ch ch??nh x??c nh???t.</p>
                        <p className="product-detail-name-col-6-so-luong">S??? l?????ng</p>
                        <div className='row'>
                            <div className='square hover' onClick={() => count > 1 && setCount(count - 1)}>
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
                            <p className='white'>Ch???n mua</p>
                        </div>

                    </div>
                    <div className="col-12">
                        <br></br>
                        <p className="big-text bold">Th??ng tin chung:</p>
                        {data.specifications[0].attributes&&data.specifications[0].attributes.map(item => {
                            return (
                                <div>
                                    <p>{item.name} : {item.value}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className="col-12">
                        <br></br>
                        <p className="big-text bold">M?? t???:</p>
                        <div className={shouldFullPara ? "" : "less"} dangerouslySetInnerHTML={{ __html: data.description }} />
                        <p className="readmore hover" onClick={() => setShouldFullPara(!shouldFullPara)}>{!shouldFullPara ? "?????c th??m" : "Thu g???n"}</p>
                    </div>
                </div >
            </div>
            <ProductListSame category={data.id_category} currentProductName={data.name}/>
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
        return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ',')) + '??';
};

export default Product

