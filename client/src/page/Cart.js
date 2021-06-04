import React, { useState, useEffect } from 'react';
import './Cart.css';

function Cart() {
    const data = [{
        "id": 1,
        "image": "./assets/0000_base_url.png",
        "fullName": "Sách hay",
        "price": 40,
        "count": 1
    },
    {
        "id": 2,
        "image": "./assets/0000_base_url.png",
        "fullName": "Sách vui",
        "price": 45,
        "count": 5
    },
    {
        "id": 3,
        "image": "./assets/0000_base_url.png",
        "fullName": "Sách nhộn",
        "price": 50,
        "count": 1
    }]

    const [productCart, setProductCart] = useState(
        {
            _id: 'ahsjscnc',
            idProduct: '',
            count: 0
        }
    );
    //button tăng giảm
    const setCount = (item) => {
        console.log(item.count + 1);
        setProductCart({ ...productCart, idProduct: item.id, count: item.count + 1})
        console.log(productCart);
    }

    const subCount = (item) =>{
        if(item.count > 1) {
            setProductCart({ ...productCart, idProduct: item.id, count: item.count - 1})
        }
    }
    //định dạng tiền
    function formatCash(str) {
        return str.split('').reverse().reduce((prev, next, index) => {
            return ((index % 3) ? next : (next + ',')) + prev
        })
   }

   //thêm vào danh sách sản phẩm được chọn trong giỏ hàng
   const [listPurchase, setListPurchase] = useState([])

   const updatePurchaseList = eventItem => {
      if (!listPurchase.some(item => item.id === eventItem.id))
      setListPurchase(l => l.concat(eventItem));
      else setListPurchase(l => Array(...l.filter(i => i.id !== eventItem.id)));
      console.log(listPurchase);
    }
    //tong tien
    const [sum, setSum] = useState(0)
    useEffect(() => {
       let temp = 0;
       listPurchase.map((item,key) =>{
           temp = temp + item.price*item.count})
        setSum(temp);
        console.log(temp);
      }, [listPurchase]);
    //remove
    const [remove, setRemove] = useState([])
    const removeProduct = (item) =>{
        let temp = item;
        setRemove (temp);
        console.log(remove)
    }

    return (
      <div className='CartContainer'>
        <div className="product-cart">
            <div>{productCart.count}</div>
        <h4 className="page-banner-sm">Cart</h4>
            <div className="wrapper">
                <div className="cart-collection">
                    <div className="cart-header">
                        <p>Sản Phẩm</p>
                        <p>Số Lượng</p>
                        <p>Số Tiền</p>
                        <p>Chọn</p>
                        <p>Xóa</p>
                    </div>
                    {data.map((item,idx) =>(
                        <div className="cart-item">
                            <form action="">
                                <div className="cart-product">
                                    <div className="cart-image">
                                        <img className="cart-image" src={item.image}></img>
                                    </div>
                                    <div className="cart-product-infor">
                                        <p className="cart-product-name">{item.fullName}</p>
                                        <p className="cart-price-sm">{item.price}</p>
                                        <small>x {item.count}</small>
                                    </div>
                                </div>
                                <div className="cart-quantity-md">
                                    <div className="cart-quantity-controls">
                                        <button onClick = {() => subCount(item)}
                                        disabled={(item.count===1)?true: false}>-</button>
                                        <input type="number" value={item.count} readOnly />
                                        <button onClick = {() => setCount(item)}>+</button>
                                    </div>
                                </div>
                                <div className="cart-unit-price">
                                    <h4>{formatCash(String(item.price*item.count))}</h4>
                                </div>
                                <div className="cart-product-join">
                                    <input
                                        type='checkbox'
                                        onChange = {()=>updatePurchaseList(item)}
                                    />
                                </div>
                                <div className="cart-product-remove">
                                    <button onClick={()=>removeProduct(item)}>x</button>
                                </div>
                                <div className="cart-controls-sm">
                                    <div className="remove">
                                        <button>x</button>
                                    </div>
                                    <div className="cart-quantity-controls-sm">
                                        <button onClick = {() => subCount(item)}
                                        disabled={(item.count===1)?true: false}>-</button>
                                        <input type="number" value={item.count} readOnly />
                                        <button onClick = {() => setCount(item)}>+</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    ))}
                </div>
                <div>{remove.id}</div>
                <div className="cart-total-holder">
                    <div className="cart-total">
                        <p>Tổng cộng</p>
                        <p>{sum}</p>
                    </div>
                    <div className="cart-action-button">
                        <a href="">Tiếp tục mua sắm</a>
                        <a href="" className="btn-main">Chi tiết đơn hàng</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }

  
  
  export default Cart;