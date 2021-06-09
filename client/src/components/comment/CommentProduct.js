import React, {useState, useEffect} from 'react';
import './CommentProduct.css';

import FormComment from './FormComment';
import iconPreview from './../assets/preview.jpg'
import ShowComment from './ShowComment';

import { 
    useDispatch,
    useSelector, 
} from 'react-redux';

function CommentProduct({data, idProduct}) {

    const userStore = useSelector(state => state.user);
    const [isLogged, setIsLogged] = useState(0);
    const [idUser, setIdUser] = useState()

    useEffect(() => {
        setIsLogged(userStore.isLogged)
        setIdUser(userStore.infoUser._id);
    }, [userStore])


    const [openForm, setOpenForm] = useState(0)
    const CommentIsEmpty = () => {
        return (
            <div className='comment-is-empty'>
               <img src={iconPreview}/>
               <br />
               <span>Chua co danh gia !!!</span>
            </div>
        )
    }
    return (
        <div className='CommentProductContainer'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
            <div className="titile-comment">
                <h2>ĐÁNH GIÁ</h2>
            </div>
            <div className="underline-comment"></div>

            <div className="tab-content-current">
                <div className="comment-product">
                    <div className="details-comment-product">
                        <div>
                            {data.map((comment) => <ShowComment comment={comment}/>)}
                            {(data.length===0)&&<CommentIsEmpty />}
                            <div className="join-button">
                                <span className="join-button-comment-product">
                                    <input 
                                        className="input-join-button-comment-product" 
                                        type="button" 
                                        value="Viết đánh giá"  
                                        onClick={() => setOpenForm(1)}
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {(openForm===1)&&<FormComment setOpenForm={setOpenForm} idUser={idUser} idProduct={idProduct}/>}
            
        </div>
    );
}

export default CommentProduct;



