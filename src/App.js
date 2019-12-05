import React from 'react';
import Home from './screens/home/Home';
import Login from './screens/Login/Login';
import Navigate from './screens/nav/nav';
import Registration from './screens/Registration/Registration';
import WorkSpace from './screens/WorkSpace/WorkSpace';
import Footer from './screens/Footer/Footer';
import {BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <Navigate />
      <Route  path='/home'  render={()=> <Home/>}/>;
      <Route  path='/login'  render={(routeprops)=> <Login {...routeprops}/>}/>
      <Route  path='/registration'  render={(routeprops)=> <Registration {...routeprops}/>}/>
      <Route  path='/workspace'  render={()=> <WorkSpace/>}/>
      <Route  path='/home'  render={()=> <Footer/>}/>;
    </div>
  </BrowserRouter>
  );
}

export default App;
