import React, {useContext, useReducer,useEffect} from 'react';
import Home from './screens/home/Home';
import Login from './screens/Login/Login';
import Navigate from './screens/nav/nav';
import Registration from './screens/Registration/Registration';
import WorkSpace from './screens/WorkSpace/WorkSpace';
import Footer from './screens/Footer/Footer';
import {BrowserRouter, Route, HashRouter } from 'react-router-dom';
import context from './context/context';
import reducer from './reducer/reducer';
import Storage from './services/storage'
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import LogOut from './screens/Login/logout';



function App() {
  const initialState = useContext(context);
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
            const user = Storage.get('user');
            if(user){
              dispatch({ type: 'ID', payload: user.id  })
            }
        }
  , [])
  return (
  <HashRouter>
    <context.Provider value={{state,dispatch}}>
    <div className="App">
      <Navigate id={state.id} />
      <Route  path='/home'  render={()=> <Home/>}/>;
      <Route  path='/login'  render={(routeprops)=> <Login  {...routeprops}/>}/>
      <Route  path='/logout'  render={(routeprops)=> <LogOut  {...routeprops}/>}/>
      <Route  path='/registration'  render={(routeprops)=> <Registration {...routeprops}/>}/>
      <Route  path='/workspace'  render={()=> <WorkSpace/>}/>
      <Route  path='/home'  render={()=> <Footer/>}/>
    </div>
    </context.Provider>
  </HashRouter>
  );
}

export default App;

