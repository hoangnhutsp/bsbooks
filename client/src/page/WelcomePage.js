// Lib imports
import { useEffect, useState } from 'react';
import { ProductCard } from '../components/books';
// Style and asset import
import styles from './WelcomePage.module.scss';
import axios from 'axios';

// Welcome Page definition
const Page = () => {
  const [products, setProducts] = useState([]); // product list to render

  // Fetch all products
  useEffect(() => {
    axios.get('http://localhost:5000/product',{
      withCredentials: true
    })
        .then(res => {
          setProducts(res.data);
         //console.log(res.data)
        })
  }, []);


  // initialize cart item list

  // const getItemCart = () => {
  //   console.log("GET ITEM CART ----");

  //   let url = 'http://localhost:5000/cart';
  //   axios.get(url, {withCredentials: true})
  //     .then(res => console.log(res.data))
  // }



  return (
    <div id={styles.ProdGrid}>
      {/* <button onClick={getItemCart}></button> */}
      { products.map((prod, index) =>
            index < 12 ? (
              <div key={index}>
                <ProductCard
                  key={index}
                  prod={prod}
                />
              </div>
            ) : null
          )}
    </div>
)}

export { Page as WelcomePage };
