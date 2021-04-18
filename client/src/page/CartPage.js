import { useCallback, useEffect, useState } from 'react';
import styles from './CartPage.module.scss';
import axios from 'axios';


const CartItemsRenderer = (cartItems) => {
  const [cart, setCart] = useState([])
  const getItemCart = () => {
    console.log("GET ITEM CART ----");

    let url = 'http://localhost:5000/cart';
    axios.get(url, {withCredentials: true})
      .then(res => setCart(res.data))
  }



  useEffect(() => {
    getItemCart();

    console.log(cart["products"]);
  }, [])
  return (
    <>
      <h2>Giỏ hàng</h2>
      <hr />
      <div id={styles.CartItems}>
        <div>
          <div></div>
          <div>Tên sản phẩm</div>
          <div>Giá</div>
          <div>Số lượng</div>
          <div>Xóa</div>
        </div>
        {cart.map((item, idx) => (
          <div key={item._id}>
            <div>{idx}</div>
            <div>
              {item.name}
            </div>
            <div>
              {item.price}
              <span>đ</span>
            </div>
            <div>
              <input
                type='number'
                min={1}
                max={15}
                value={item.quantity}

              />
            </div>
            <div>
              <button>
                X
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};



const Page = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    let url = 'http://localhost:5000/cart';
      axios.get(url, {withCredentials: true})
        .then(res => {
          setCart(res);
          console.log(res)
        })
}, []);




  return (
    <div>
            <CartItemsRenderer cartItems={cart} />
    </div>
  );
};

export { Page as CartPage };
