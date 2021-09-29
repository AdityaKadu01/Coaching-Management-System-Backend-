/* DG: Coude for routing */
import React, { Component } from 'react';
import Myreact, {useState} from 'react';

import { BrowserRouter as RouterLogin, Switch, Route, Link } from "react-router-dom";

import PropTypes from 'prop-types';


import { useHistory } from 'react-router-dom';
import StudentPage from './StudentPage';


async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

function setToken(token) {

    return (
        <RouterLogin>
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={StudentPage} />
          </Switch>
        </div>
        </RouterLogin>
    );

   }


   
   export default function Login() {
     const [username, setUserName] = useState();
     const [password, setPassword] = useState();
     let history = useHistory();

       const handleSubmit = async e => {
       e.preventDefault();
       const token = await loginUser({
         username,
         password
       });
    
       if(token)
       {
        history.push('/www.cms.com/student');
       }
     }
   
     return(
         /* DG*/
         <>
            
            <div id="card" className="card col-md-6 offset-md-3 offset-md-3">
                
            <div style={{backgroundColor:'seashell'}} className="card-body">
             <div  className="login-wrapper">
                 <h2>Log In</h2>
                 <form onSubmit={handleSubmit}>
                 <div className="form-group">
                     <label>UserName</label>
                     <input type="username" className="form-control" placeholder="Enter Username" />
                 </div>

                 <div className="form-group">
                     <label>Password</label>
                     <input type="password" className="form-control" placeholder="Enter password" />
                 </div>

                 <div className="form-group">
                     <div className="custom-control custom-checkbox">
                         <input type="checkbox" className="custom-control-input" id="customCheck1" />
                         <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                     </div>
                 </div>

                 <button type="submit" className="btn btn-primary btn-block">Submit</button>
                 <p className="forgot-password text-right">
                     Forgot <a href="#">password?</a>
                 </p>
             </form>
             </div>
             </div></div></>
     )
   }
   
   Login.propTypes = {
     setToken: PropTypes.func.isRequired
   };

   /*DG */