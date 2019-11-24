import React,{useState, useEffect} from 'react';
import {getPost} from '../../../api/index'
import './post.css'



const Posts = (props) => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        getPost.then(function (data) { 
          return  setData(data)  
      });
  },[])
    return(
       <div className="content">
        {
            data.map((item)=>{
             return   <div className='item' key={item.id}>
                <div className='title'> <p>{item.author}</p>  <p>{item.title}</p>   </div>
                <div className='discription'> {item.description}</div>
                </div>
            })
        }
       </div> 
    )
}


export default Posts;