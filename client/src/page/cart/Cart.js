import React, { useState, useEffect } from 'react';
import './Cart.css';
import {formatCash} from './functionCart.js'

import {
    addToCart,
    updateCart,
} from '../../redux/actions/cart';

import { 
    useDispatch,
    useSelector, 
} from 'react-redux';
import {
    useHistory,
} from 'react-router-dom'

import imgEmptyCart from '../../assets/bag-empty.svg'
import Breadcrumb from '../../components/Breadcrumb'
function Cart() {
    const dispatch = useDispatch();
    const history = useHistory();
    const cartStore = useSelector(state => state.cart);
    const userStore = useSelector(state => state.user);
    const [isLogged, setIsLogged] = useState(0)
    const [productCart, setProductCart] = useState();
    const [sumPrice, setSumPrice] = useState(0)

    useEffect(() => {
        setProductCart(cartStore);
    }, [cartStore])
    useEffect(() => {
        setIsLogged(userStore.isLogged);
    }, [userStore])

    const adjustQuantityProductCart = (_id, val) => {        
        let newCart = productCart.items;
        newCart.map(item => {
            if (item._id === _id) {
                item.quantity += val;
            }
        })
        setProductCart({...productCart, items: newCart});
    }

    const removeProductCart = (_id) => {
        let newItems = productCart.items.filter(item => item._id != _id);
        setProductCart({...productCart, items: newItems, count: productCart.count-1})
    }

    const addjustCheckbox = _id => {
        let newItems = productCart.items;
        newItems.map(item => {
            if (item._id === _id) {
                item.checked = !item.checked;
            }
        })
        setProductCart({...productCart, items: newItems});
    }

    useEffect(() => {
        if (productCart){
            let sum = 0;
            productCart.items.forEach(element => {
                sum += element.price * element.quantity * element.checked;
            });
            setSumPrice(sum);
        }
        dispatch(updateCart(productCart));
    }, [productCart])

    const buttonCheckout = () => {
        if (isLogged) history.push('/checkout'); else {
            alert("Ban chua dang nhap ...")
        }
    }

    function CartIsEmpty() {
        return (
            <div className="cart-is-empty">
                <img alt="icon" className="cart-is-empty-icon" src={imgEmptyCart} />
                <p className="cart-is-empty-content">Kh??ng c?? s???n ph???m n??o trong gi??? h??ng.</p>
                <a href="/" className="cart-is-empty-content-a">Quay l???i trang ch???</a>
            </div>
        )
    }
    
    
    const Item = ({item, idx}) => {
        return (
            <div className="cart-item" key={idx}>
                <div className='form'>
                    <div className="cart-product">
                        <div className="cart-image">
                            <img className="cart-image" src={item.image}></img>
                        </div>
                        <div className="cart-product-infor">
                            <p className="cart-product-name">{item.name}</p>
                            <p className="cart-price-sm">x {item.quantity}</p>
                            {/*<p className="cart-price-sm">{item.price}</p>*/}
                        </div>
                    </div>
                    <div className="cart-quantity-md">
                        <div className="cart-quantity-controls">
                            <button
                                onClick={() => adjustQuantityProductCart(item._id, -1)}
                                disabled={(item.quantity === 1) ? true : false}>-</button>

                            <input type="number" value={item.quantity} readOnly />

                            <button
                                onClick={() => adjustQuantityProductCart(item._id, 1)}

                            >+</button>
                        </div>
                    </div>
                    <div className="cart-unit-price">
                        <h4>{formatCash(String(item.price))}<span>??</span></h4>
                    </div>
                    <div className="cart-product-join">
                        <input
                            type='checkbox'
                            defaultChecked={item.checked}                           
                            onClick={() => addjustCheckbox(item._id)}
                        />
                    </div>
                    <div className="cart-product-remove">
                        <button
                            onClick={() => removeProductCart(item._id)}
                        >x</button>
                    </div>
                    <div className="cart-controls-sm">
                        <div className="remove">
                            <button>x</button>
                        </div>
                        <div className="cart-quantity-controls-sm">
                            <button
                                disabled={(item.quantity === 1) ? true : false}>-</button>
                            <input type="number" value={item.quantity} readOnly />
                            <button >+</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const dataBreadcrump = [
        {
            name: 'Trang ch???',
            path: '/'
        }
    ]

    return (
        <div>
            <Breadcrumb breadcrumb={dataBreadcrump} title={'Gi??? h??ng'}/>
        {(productCart&&productCart.count) ? (
            <div className='CartContainer'>
                <div className="product-cart">
                    <h4 className="page-banner-sm">Gi??? h??ng</h4>
                    <div className="wrapper">
                        <div className="cart-collection">
                            <div className="cart-header">
                                <p>S???n Ph???m</p>
                                <p>S??? L?????ng</p>
                                <p>S??? Ti???n</p>
                                <p>Ch???n</p>
                                <p>X??a</p>
                            </div>
                            {
                            productCart.items.map((item, idx) => {
                                return (
                                    <Item item={item} idx={idx}></Item>
                                )
                            })}
                        </div>
                        <div className="cart-total-holder">
                            <div className="cart-total">
                                <p>T???ng c???ng</p>
                                <p>{formatCash(String(sumPrice))}<span>??</span></p>
                            </div>
                            <div className="cart-action-button">
                                <a href="/">Ti???p t???c mua s???m</a>
                                <button className="btn-main" onClick={() => buttonCheckout()}>Thanh to??n gi??? h??ng</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ): <CartIsEmpty />}

        </div>

    )
}

export default Cart;