// image
import { useEffect, useState } from 'react'
import ImgStar from '../../assets/star.png'
import './styles.css'

const Rate = (props) => {
    let { number, max } = props
    if (!number) {
        number = 5
    }
    if (!max) {
        max = 5
    }
    const [stars, setStars] = useState([])
    useEffect(() => {
        var rows = [];
        for (var i = 1; i <= max; i++) {
            if (i <= number) {
                rows.push(<img className='star yellow' src={ImgStar} />);
            }
            else {
                rows.push(<img className='star' src={ImgStar} />);
            }
        }
        setStars(rows)
    }, [])

    return (
        <div style={{marginLeft:10}}>
            {stars}
        </div>
    )
}

export default Rate