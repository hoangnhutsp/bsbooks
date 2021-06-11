
import React, { useState, useEffect } from 'react'
import './styles.css'
const ImgShowcase =     (props) => {
    const [curIndex, setCurIndex] = useState(0) // Current index of main image
    const [images, setImages] = useState([]) // Current index of main image

    useEffect(() => {
        const { images } = props
        setImages(images)
    }, [])

    return (
        <div>
            <div className='main-img-view'>
                {/* Main Image */}
                    {
                        images && images[curIndex] &&
                        <img alt='product' className="main-img" src={images[curIndex]} />
                    }
            </div>

            <div className="sub-imgs-view">
                {
                    images.map((item, index) => {
                        return (index<3)&&<img alt='product' className= {curIndex === index ? "sm-img selected" : "sm-img"}
                          src={item} onClick={()=>setCurIndex(index)} />
                    })
                }

            </div>
        </div>
    )
}

export default ImgShowcase