import React from 'react';
import Blogers from "./Blogers/Blogers";
import Post from './Post/Posts';
import './Home.css'

const Home = () => {
    console.log("home")
    return(
        <div className="mainhome">
     <Blogers />
     <Post />
     </div> 
    )
}

export default React.memo(Home);;