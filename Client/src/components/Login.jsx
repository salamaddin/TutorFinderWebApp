import React  from "react";
import Classes from "../Styles/Login.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
// import { UserContext } from "../App";

const Login =()=>{

    // const {state, dispatch} = useContext(UserContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const loginuser = async (e) => {
      e.preventDefault();
  
      const res = await fetch('/signin',{
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          email,password,
        }),
      });
  
      const data = await res.json();
      if(res.status === 400 || !data){
        window.alert("Invalid Credentials");
      }else{
        
        window.alert("login sucessfull");
        navigate("/");
        // dispatch({type:'USER', payload:true})
      }
  
    };


    return(
        <>
        <div className={Classes.ForNav}></div>
        <div className={Classes.mainDiv}>
            <div className={Classes.container}>
                <h1 className={Classes.shadows}>Login</h1> 
            </div>
            <div className={Classes.loginDiv}>
                <form>
                <input type="text" className={Classes.form__input} 
                id="name"
                placeholder="User Name" required="" 
                value={email}
                onChange = {(e) => setEmail(e.target.value)}
                />

                <label for="name" className={Classes.form__label}>User Name</label>
                <input type="password" className={Classes.form__input} 
                id="name"   
                placeholder="Password" required=""
                value={password} 
                onChange = {(e) => setPassword(e.target.value)}
                />
                <label for="name" className={Classes.form__label}>Password</label>
              
                {/* <button type='submit' name="login"
                 value='Login' onClick={loginuser} >

              <span>Login</span>
              </button> */}

               <span type='submit' name="login"
                 value='Login' onClick={loginuser} ><a href="#"></a></span>

                </form>
                <div className={Classes.btnDiv}>
                    {/* <span><a href="#"></a></span> */}
                </div>
            </div>
        </div>
        
        </>
        
    )
}
export default Login