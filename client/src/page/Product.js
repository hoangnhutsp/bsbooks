import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProductDetails } from '../api/product/product_details'
// Custom component
import ImgShowcase from '../components/img_showcase'
import './product.css'
function Product() {
    const { id } = useParams();
    const [data, setData] = useState() // Data product detals
    const [count, setCount] = useState(1) // count

    useEffect(async () => { // Fetch product details
        if (!id) {
            // to do
            return
        }
        const data = getProductDetails(id)
        setData(data)
    }, [])

    return data ? (
        <div className='product'>
            < div className='container' >
                <div className='col-4'>
                    {data.images && <ImgShowcase images={data.images} />}
                </div>
                <div className='col-6'>
                    <p>Tác giả: {data.id_author}</p>
                    <p>{data.name}</p>
                    <div className='row price-view'>
                        <p className='big-text bold child'>{data.discount.format(0, 3)}</p>
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
                    <div className='addToCard center hover' > 
                        <p className='white'>Chọn mua</p>
                    </div>
                </div>
            </div >
        </div>
    ) : null
}

Number.prototype.format = function (n, x, s, c) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
        num = this.toFixed(Math.max(0, ~~n));

    return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ',')) + 'đ';
};

export default Product

