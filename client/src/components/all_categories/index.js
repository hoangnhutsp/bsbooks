
import { useEffect, useState } from 'react'
import data from './data.json' 
import _ from 'lodash'
import './styles.css'
import { Link, useLocation } from 'react-router-dom'
import useOuterClick from '../../hooks/useOuterClick'
const AllCategories = () => {
    const [list, setList] = useState([]) 
    const [isOpened, setIsOpened] = useState(false) 
    const [details, setDetails] = useState([])  
    const [pathname, setPathname] = useState()
    const innerRef = useOuterClick(e => {
        setIsOpened(false)      
    });

    const location = useLocation()
    useEffect(() => {
        const combinedData = listToTree(data)  
        setList(combinedData)
    }, [])

    useEffect(() => {
        setPathname(location.pathname) 
    }, [location.pathname])

    useEffect(() => {
        if (!isOpened) {
            setDetails([]) 
        }
    }, [isOpened])

    if (!list.length) return null
    return (
        <div className="categories-view row align-center" >
            <div>
                <div className="menu-button" ref={innerRef} onClick={() => { setIsOpened(!isOpened) }}>
                    <span className="hamberger-toggle" ></span>
                    <span className="white title">{list[0].name}</span>
                </div>
                <div className="row absolute" onMouseLeave={() => setDetails([])}>
                    {
                        isOpened && <div className="item-view">
                            {
                                list[0].children.map(item => {
                                    console.log(item);
                                    return (

                                        <div className="dddddddd">

                                        <Link to={`/product/${item.id}`}>
                                        <div className="item" onMouseMove={() => { item.children && setDetails(item.children) }}>
                                            <div className="icon" />
                                            <span className={item.children ? "arrow" : ""}>{item.name}</span>
                                        </div>
                                        </Link>
                                        </div>

                                    )
                                })
                            }
                        </div>
                    }
                    {
                        isOpened && details.length ?
                            <div className="detail-view">
                                {
                                    details.map(item => {
                                        return (
                                            <span className="bold"><Link className="link" to={`/product/${item.id}`}>{item.name}</Link></span>
                                        )
                                    })
                                }
                            </div> : null
                    }
                </div>

            </div>

            <div className="pull-left row">
                <Link to='/product/1' className={pathname === "/product/1" ? "green link" : "link"}> Tất cả sách</Link>
                <Link to='/faq' className={pathname === "/faq" ? "green link" : "link"}> Câu hỏi</Link>
                <Link to='/about-us' className={pathname === "/about-us" ? "green link" : "link"}> Về chúng tôi</Link>
                <Link to='/Contact' className={pathname === "/contact" ? "green link" : "link"}>Liên hệ</Link>
            </div>

        </div>
    )
}

const listToTree = function (array, parent, tree) {
    tree = typeof tree !== 'undefined' ? tree : [];
    parent = typeof parent !== 'undefined' ? parent : { id: 0 };

    var children = _.filter(array, function (child) { return child.id_parent == parent.id; });

    if (!_.isEmpty(children)) {
        if (parent.id == 0) {
            tree = children;
        } else {
            parent['children'] = children
        }
        _.each(children, function (child) { listToTree(array, child) });
    }

    return tree;
}




export default AllCategories