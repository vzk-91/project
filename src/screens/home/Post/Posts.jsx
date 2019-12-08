import React,{useState, useEffect,useContext} from 'react';
import context from '../../../context/context'
import {getPost} from '../../../api/index';
import {Spinner} from 'react-bootstrap';
import './post.css'



const Posts = () => {
    const {state,dispatch} = useContext(context)
    const {posts,loading} = state;

    useEffect(()=>{
        getPost().then(function (data) { 
            dispatch({type : "Fetch_Posts" , payload : data})
            dispatch({type : "Spinner"})
      });
  },[])
  
    return(

       <div className="content">
            {loading  &&  <Spinner animation="grow" variant="danger" className="spiner"/> }
        {
            posts.map((item)=>{
             return   <div className='item' key={item.id}>
                <div className='title'> <p>{item.author}</p>  <p>{item.title}</p>   </div>
                <div className='discription'> {item.description}</div>
                </div>
            })
        }
       </div> 
    )
}


export default React.memo(Posts);