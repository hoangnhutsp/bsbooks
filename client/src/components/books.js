import { useEffect, useRef, useState } from 'react';
import styles from './ProductCard.module.scss';
import axios from 'axios';


// Trim long product names
export const trimProductName = prodName => {
  if (typeof prodName == 'string') {
    let words = prodName.split(' ');
    if (words.length > 10) {
      return words.slice(0, 10).concat('...').join(' ');
    }
    return prodName;
  }
};

// Format price value

// Component definition - Product Card
// Render a product card and manage state
const MainComponent = props => {
  const [added, setAdded] = useState(props.added);
  const ref = useRef(null);

  useEffect(() => {
    setAdded(props.added);
  }, []);

  let url = 'http://localhost:5000/cart';
  const addToCart = () => {
    console.log(props);
    let _id = props.prod._id;
    let name = props.prod.name;
    let price = props.prod.price;
    let quantity = 1;

    let data = {
      "_id": _id,
      "name": name,
      "price": price,
      "quantity": quantity,
    }


    axios.post(url, data, {withCredentials: true})
      .then(res => console.log(res))
  }


  const getProductImageUrl = thumbnail_url => {
    let nurl = `./assets/${thumbnail_url}`
    return nurl;
  };
  return (
    <div className={styles.card}>
      <div className={styles.prodName}>{trimProductName(props.prod.name)}</div>
      <div className={styles.prodType}>{props.prod.type}</div>
      <div className={styles.prodPrice}>
        {props.prod.price}
        <span>đ</span>
      </div>
      <div className={styles.prodImage}>
        <img src={getProductImageUrl(props.prod.thumbnail_url)} alt='' />
      </div>
      <div className={styles.addToCartButton}>
        <button onClick={addToCart} className={added ? styles.added : ''}>
          {added ? 'Đã thêm vào giỏ hàng' : 'Thêm vào giỏ hàng'}
        </button>
      </div>
      <div ref={ref} className={styles.plusOne}>
        +1
      </div>
    </div>
  );
};

export { MainComponent as ProductCard };