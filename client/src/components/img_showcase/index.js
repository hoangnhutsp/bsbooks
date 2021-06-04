
import React, { useState, useEffect } from 'react'
import './styles.css'
const ImgShowcase = (props) => {
    const [curIndex, setCurIndex] = useState(0) // Current index of main image
    const [images, setImages] = useState([]) // Current index of main image

    useEffect(() => {
        const { images } = props
        console.log(images[0].base_url);
        setImages(images)
    }, [])

    return (
        <div>
            <div className='main-img-view'>
                {/* Main Image */}
                    {
                        images && images[curIndex] &&
                        <img alt='product' className="main-img" src={images[curIndex].base_url} />
                    }
            </div>

            <div className="sub-imgs-view">
                {
                    images.map((item, index) => {
                        return <img alt='product' className= {curIndex === index ? "sm-img selected" : "sm-img"}
                          src={item.base_url} onClick={()=>setCurIndex(index)} />
                    })
                }

            </div>
        </div>
    )
}

export default ImgShowcase