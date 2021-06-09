import Reac, { useState, useEffect } from 'react'
import Item from './Item.js'
import { getProductLists } from '../../../api/product/product_list.js'

const ControlProduct = () => {
    const [allProduct, setAllProduct] = useState([])
    useEffect(async () => {
        const data = await getProductLists('')
        console.log(data['product']);
        setAllProduct(data.product)
    }, [])

    return (
        <div>
            {allProduct.map(item => {
                return <Item item={item} ></Item>
            })}
        </div>
    )
}
export default ControlProduct;