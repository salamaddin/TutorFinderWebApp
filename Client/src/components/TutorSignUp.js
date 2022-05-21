import React, { Component,useState } from 'react'
import Classes from "../Styles/TutorSignUp.module.css"
import Select from 'react-select'
const TutorSignUp = ()=>{

  const myComponentStyle = {
    lineHeight: 10,
    height:30,
    borderRadius: '0px 12px',
    width:320,
    marginLeft:20,
    fontSize:'20px',
 }


    // const options = [
    //     { value: 'Mathematics', label: 'Mathematics' },
    //     { value: 'English', label: 'English' },
    //     { value: 'Chemistry', label: 'Chemistry' }]
    //     const options2=[{value:'female', label:'Female'},{value:'male', label:'Male'}]

    //     const [select,setSelect] = useState("");

        const [user,setUser] = useState([{
          name:'', email:'',password:'', cpassword:'',number: '',locality: '',teaching_mood: '', degree: '', massage: '', category: ''
        }]);

        const handleInputs = (e) => {
          setUser({...user, [e.target.name]:e.target.value});
        };


        const postData = async (e) => {
          e.preventDefault();
          const {name, email,password,number,locality,teaching_mood,degree,massage,category} = user;
    
          const res = await fetch('/tutorsignup',{
            method: "POST",
            headers: {
              "Content-Type" : "application/json"
            },
            body: JSON.stringify({
              name, email,password, number,locality,teaching_mood,degree,massage,category
            }),
          });
    
          const data = await res.json();
          if(res.status === 422 || !data){
            window.alert("Invalid Registration");
          }else{
            window.alert("Registration sucessfull");
           // navigate('/login')
          }
    
        };
    

        // const handleChange=(e)=>{
        //   setSelect({value: e.target.value});
        // }
    return(
        <>
            <div className={Classes.forNavbar}></div>
    <div className={Classes.finalDiv}>
      <div className={Classes.forTutorSignup}>
          <h1>Create Profile</h1>
        <form method='POST'>
          
          <input type ="text"
          value={user.name}
          onChange={handleInputs}
          name="name"
          placeholder="Enter your full name" />

          <input type ="mail" 
          value={user.email}
          onChange={handleInputs} 
          name="email"
          placeholder="Enter your E-mail"/>
          
          <input type ="text" 
          value={user.number}
          onChange={handleInputs} 
          name="number"
          placeholder="Enter your mobile no"/>

          <input type ="text" 
          value={user.locality}
          onChange={handleInputs} 
          name="locality"
          placeholder="Locality"/>

         <input type ="text" 
          value={user.teaching_mood}
          onChange={handleInputs}
          name="teaching_mood"
          placeholder="How would you like to conduct your classes?"/>
          
          {/* <select style={myComponentStyle} value={select.value} onChange={handleChange}>
              
             <option value="Math" label="Math"/>
              <option value="Eng">Eng</option>
              <option value="his">His</option>
              <option value="phy">Phy</option>
          </select> */}
         
         <input type ="text" 
          value={user.category}
          onChange={handleInputs}
          name="category"
          placeholder="Which subject would you like to teach?"/>

        <input type ="text"
          value={user.degree}
          onChange={handleInputs}
          name="degree"
          placeholder="Enter your most recent degree"/>

        <input type ="text"
          value={user.massage}
          onChange={handleInputs}
          name="massage"
          placeholder="Describe Yourself in short"/>

          <input type ="password"
          value={user.password}
          onChange={handleInputs}
          name="password"
          placeholder="Enter Password" />

          <input type ="password" 
           value={user.cpassword}
          onChange={handleInputs}
          name="cpassword"
          placeholder="Conform Password"/>

          <input type='submit' name="signup"  
         value='Register' onClick={postData} className={Classes.forsubmitButton}/>

        </form>
        
      </div> 
    </div> 
        </>
    )
}
export default TutorSignUp