import React, {useState,useEffect} from 'react';
import './blogers.css';
import {getPeople} from '../../../api/index'



const Blogers = () =>{
    const [data, setData] = useState([])
    useEffect(()=>{
          getPeople.then(function (data) { 
            return  setData(data)  
        });
    },[])

    return(
     <div className="blogers" >
         <h2>Blogers</h2>
         {data.map((item)=>{
          return <div className='item-bloger' key={item.id}>
           <img src={item.avatar} alt=""  className="phot" /> 
           <p> {item.name}</p>
         </div>
         })}
     </div>
    )
}

export default Blogers;