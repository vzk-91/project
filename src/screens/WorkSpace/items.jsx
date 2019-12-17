import React, { useEffect, useContext } from 'react';
import context from '../../context/context'
import { getPostById, getPost,remove } from '../../api/index';
import { Spinner,Button } from 'react-bootstrap';



const Items = () => {
    const { state, dispatch } = useContext(context)
    const { posts, loading, id } = state;



    useEffect(() => {
        if (id) {
            getPostById(id).then(function (data) {
                dispatch({ type: "Fetch_Posts", payload: data })
                dispatch({ type: "Spinner" })
            });
        } else {
            getPost().then(function (data) {
                dispatch({ type: "Fetch_Posts", payload: data })
                dispatch({ type: "Spinner" })
            });
        }
    }, [posts,id])

    const removePost = (itemId)=>{
        remove(itemId)
        }
    
    return (
        <div className="content">
            {loading && <Spinner animation="grow" variant="danger" className="spiner" />}
            {
                posts.map((item) => {
                    return <div className='item' key={item.id}>
                        <div className='title'> <p>{item.author}</p>  <p>{item.title}</p>{id && <Button  onClick={()=> removePost(item.id)}  className='remove'> &times;</Button>}  </div>
                        <div className='discription'> {item.description}</div>
                    </div>
                })
            }
        </div>
    )
}

export default Items;