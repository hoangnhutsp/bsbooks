import './styles.css'
import Rate from '../rate'
import { Link } from 'react-router-dom'
const Item = (props) => {
    const { data } = props
    if (!data) return null
    return (
        <Link to={`/product-details/${data._id}`}>
            <div className="item hover" >
                <img className="thumnail" src={data.thumbnail_url}></img>
                <Rate></Rate>
                <p className="item-name">{data.name}</p>
                <p>{data.price.format(0, 3)} <span className="line-through bold sml-text">{data.discount.format(0, 3)}</span></p>
                <p className="sml-text bold">{data.discount_rate}%</p>
            </div>

        </Link>

    )
}

export default Item