
import { useEffect, useState } from 'react'
import data from './data.json' /// Data preprocessing
import _ from 'lodash'
import './styles.css'
import { Link, useLocation } from 'react-router-dom'
import useOuterClick from '../../hooks/useOuterClick'
const AllCategories = () => {
    const [list, setList] = useState([]) // List data after clean and combine
    const [isOpened, setIsOpened] = useState(false) // default is close
    const [details, setDetails] = useState([])  // List detail data
    const [pathname, setPathname] = useState()
    const innerRef = useOuterClick(e => {
        setIsOpened(false) // close menu when click outside        
    });

    const location = useLocation()
    useEffect(() => {
        const combinedData = listToTree(data) // convert flat array to tree arry :D. It acttually 
        // difficult for me :D 
        // console.log(combinedData);
        setList(combinedData)
    }, [])

    useEffect(() => {
        setPathname(location.pathname) // Update pathname on change
    }, [location.pathname])

    useEffect(() => {
        if (!isOpened) {
            setDetails([]) // close details at the time close menu
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
                                    return (
                                        <div className="item" onMouseMove={() => { item.children && setDetails(item.children) }}>
                                            <div className="icon" />
                                            <span className={item.children ? "arrow" : ""}>{item.name}</span>
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
                <Link to='/All-books' className={pathname === "/All-books" ? "green link" : "link"}> Tat ca sach</Link>
                <Link to='/New-arrivals' className={pathname === "/New-arrivals" ? "green link" : "link"}> Sach moi</Link>
                <Link to='/FAQ' className={pathname === "/FAQ" ? "green link" : "link"}> FAQ</Link>
                <Link to='/About-us' className={pathname === "/About-us" ? "green link" : "link"}> Ve chung toi</Link>
                <Link to='/Contact' className={pathname === "/Contact" ? "green link" : "link"}> Lien he</Link>
            </div>

            <div className="phone-number pointer">
                <i className="fas fa-phone"></i>
                <a href="tel:0905749999">0905 749 999</a>
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