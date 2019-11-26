import React, {useState, useEffect}from "react";
import {registration} from '../../api/index';
import './registration.css';


const Registration = () => {

    const  example  = {
      lastname : '' ,
      username : '',
      password : "",
      email : ''
    }
    const [data, setData] = useState(example);
    const { lastname, username, password, email } = data;

      const onSubmitForm = () => {
        registration(data);
        setData( example )
       
      }
    
      const hendleFormChange = (event) => {
        const { target: { name, value } } = event;
        setData({
          ...data,
          [name]: value 
        })
      }


    return(
       
        <div className="logForm">
        <div className="form-group">
                    <label htmlFor="lastname">Last Name</label>
                    <input name="lastname" type="name" className="form-control" onChange={hendleFormChange} value={lastname} placeholder="Last Name" />
                  </div>
        <div className="form-group">
                    <label htmlFor="username">User Name</label>
                    <input name="username" type="text" className="form-control" onChange={hendleFormChange} value={username} placeholder="User Name" />
                  </div>
        <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input name="password" type="password" className="form-control" onChange={hendleFormChange} value={password} placeholder="Password" />
                  </div>
        <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input name="email" type="email" className="form-control" onChange={hendleFormChange} value={email} placeholder="Email" />
                  </div>
        {/* <div class="custom-control custom-radio in">
    //           <input type="radio" class="custom-control-input " id="defaultUnchecked" name="defaultExampleRadios" />
    //           <label class="custom-control-label" for="defaultUnchecked">Male</label>
    //         </div>
    //         <div class="custom-control custom-radio in">
    //               <input type="radio" class="custom-control-input" id="defaultChecked" name="defaultExampleRadios" >
    //               <label class="custom-control-label" for="defaultChecked">Female</label>
    //             </div>
    //           <div class="custom-control custom-checkbox in">
    //                   <input type="checkbox" class="custom-control-input in" id="defaultUnchecked">
    //                   <label class="custom-control-label" for="defaultUnchecked">Send Me Email</label>
    //               </div> */}
                  <button type="submit" className="btn btn-primary in" onClick={onSubmitForm}>OK</button>
                  </div>
    )
}

export default Registration;