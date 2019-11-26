import React from 'react';
import Home from './screens/home/Home';
import Nav from './screens/nav/nav';
import Registration from './screens/Registration/Registration'
import Footer from './screens/Footer/Footer'
import {BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './screens/Login/Login';

function App() {
  return (
   <BrowserRouter>
    <div className="App">
      <Nav />
      <Route  path='/home'  render={()=> <Home/>}/>;
      <Route  path='/login'  render={()=> <Login/>}/>
      <Route  path='/registration'  render={()=> <Registration/>}/>
      <Route  path='/home'  render={()=> <Footer/>}/>;
    </div>
   </BrowserRouter>
  );
}

export default App;
