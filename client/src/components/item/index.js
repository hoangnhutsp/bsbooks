import './styles.css'
import Rate from '../rate'
import { Link, useHistory } from 'react-router-dom'

//cắt tên
export const trimProductName = prodName => {
    if (typeof prodName == 'string') {
        //let words = prodName.split(' ');
        if (prodName.length > 23) {
            return prodName.slice(0, 23).concat('...')
        }
        return prodName;
    }
};

const Item = (props) => {
    const history = useHistory()
    const { data } = props
    if (!data) return null
    return (
        <div onClick={() => {
            history.push(`/product-details/${data._id}`)
            window.location.reload()
        }}>
         
        <div className='class-product-detail-for-unline-link-tag'>
            <Link to={`/product-details/${data._id}`}>
                <div className="item hover" >
                    <img className="thumnail" src={data.thumbnail_url}></img>
                    <div></div>
                    <Rate></Rate>
                    <p className="item-name">{trimProductName(data.name)}</p>
                    {(data.discount_rate === 0) ?
                        (<div>
                            <div className="class-for-text-discount-rate"><br /> </div>
                            <p className='class-name-price-in-item'>{(data.price).format(0, 3)}</p>
                        </div>
                        ) : <div>
                            <p className="class-for-text-discount-rate">Giảm <span className="class-for-text-discount-rate">{data.discount_rate}%</span></p>
                            <p className='class-name-price-in-item'>{(data.price).format(0, 3)} <span className="line-through bold discount-price-item-display">{(data.price + data.discount).format(0, 3)}</span></p>
                        </div>}
                </div>

            </Link>
        </div>
    </div>
    )
}

export default Item