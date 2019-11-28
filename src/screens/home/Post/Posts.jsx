import React,{useState, useEffect} from 'react';
import {getPost} from '../../../api/index';
import {Spinner} from 'react-bootstrap';
import './post.css'



const Posts = (props) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        getPost().then(function (data) { 
            setData(data)
            setLoading(false)
      });
  },[])
  console.log("post")
    return(

       <div className="content">
            {loading  &&  <Spinner animation="grow" variant="danger" className="spiner"/> }
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


export default React.memo(Posts);