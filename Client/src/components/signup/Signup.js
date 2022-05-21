
import React  from "react";
import './style.css';
import signupImage from "./images/signup.svg";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

const Signup =()=>{


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [cpassword, setCpassword] = useState('');
    const navigate = useNavigate();
  
    const postData = async (e) => {
      e.preventDefault();

      const res = await fetch('/signup',{
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          name, email,password, cpassword
        }),
      });

      const data = await res.json();
      if(res.status === 422 || !data){
        window.alert("Invalid Registration");
      }else{
        window.alert("Signup sucessfull");
        navigate('/login')
      }

    };


    return(
        <>
        
        <div class="main">
      <div class="container">
        <h1>Create an account</h1>
        <div class="column">
          <div class="illustration">
            <img src={signupImage} alt="Signup" />
          </div>
          <form class="signup form" action="#" method="POST" >
            <div class="textInput">

              <input type="text" placeholder="Enter name"
              value={name}
              onChange = {(e) => setName(e.target.value)} /> 
{/* 
              <span class="material-icons-outlined"> person </span> */}
            </div>

            <div class="textInput">
              <input type="text" placeholder="Enter email" 
              value={email}
              onChange = {(e) => setEmail(e.target.value)}/>
              {/* <span class="material-icons-outlined"> alternate_email </span> */}
            </div>

            <div class="textInput">
              <input type="password" placeholder="Enter password"
              value={password} 
              onChange = {(e) => setPassword(e.target.value)} />
              {/* <span class="material-icons-outlined"> lock </span> */}
            </div>

            <div class="textInput">
              <input type="password" placeholder="Confirm password" 
              value={cpassword} 
              onChange = {(e) => setCpassword(e.target.value)}/>
              {/* <span class="material-icons-outlined"> lock_clock </span> */}
            </div>


            <div class="button" onClick={postData}>
              <span>Submit now</span>
            </div>

            <div class="info">
              Already have an account? <Link to="/login">Login</Link> instead.
            </div>
          </form>
        </div>
      </div>
    </div>
        
        </>
        
    )
}
export default Signup