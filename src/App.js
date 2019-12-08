import React, {useContext, useReducer} from 'react';
import Home from './screens/home/Home';
import Login from './screens/Login/Login';
import Navigate from './screens/nav/nav';
import Registration from './screens/Registration/Registration';
import WorkSpace from './screens/WorkSpace/WorkSpace';
import Footer from './screens/Footer/Footer';
import {BrowserRouter, Route } from 'react-router-dom';
import context from './context/context';
import reducer from './reducer/reducer'
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const initialState = useContext(context);
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
  <BrowserRouter>
    <context.Provider value={{state,dispatch}}>
    <div className="App">
      <Navigate />
      <Route  path='/home'  render={()=> <Home/>}/>;
      <Route  path='/login'  render={(routeprops)=> <Login {...routeprops}/>}/>
      <Route  path='/registration'  render={(routeprops)=> <Registration {...routeprops}/>}/>
      <Route  path='/workspace'  render={()=> <WorkSpace/>}/>
      <Route  path='/home'  render={()=> <Footer/>}/>;
    </div>
    </context.Provider>
  </BrowserRouter>
  );
}

export default App;
