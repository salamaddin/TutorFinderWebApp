import React from "react";
import classes from "../Styles/About.module.css";

const About =()=>{
    return(
    <>
        <div className={classes.ForNav}></div>

      <div className={classes.aboutSection}>
  <h1>About Us</h1>
  <p>Using TutorFinder, students, parents and professionals can compare multiple Tutors and Trainers and </p>
   <p>choose the ones that best suit their requirements. If you are a Tutor you can get relevant enquiries</p>
  <p> based on your skills and offer online as well as offline. </p>
  <p> </p>
  
  <h4>This is our final year project Under the guidance of
DR. Zeenat Rehena
</h4>
<p>Department of Computer Science and Engineering</p>
<h4>Aliah University</h4>
</div>

<h2 className={classes.team}>Team Members</h2>
<div className={classes.row}>
  <div className={classes.column}>
    <div className={classes.card}>
      {/* <img src="/w3images/team1.jpg" alt="Jane" style="width:100%"> */}
      <div className={classes.container}>
        <h4>Soharab Uddin Mondal</h4>
        <p> Roll No. CSE193006</p>
        <p>Email: soharabuddinmondal@gmail.com</p>
        {/* <p><button className={classes.button}>Contact</button></p> */}
      </div>
    </div>
  </div>

  <div className={classes.column}>
    <div className={classes.card}>
      {/* <img src="/w3images/team1.jpg" alt="Jane" style="width:100%"> */}
      <div className={classes.container}>
        <h4>Mahjabin Bano</h4>
        <p class="title">Roll No. CSE184036</p>
        <p>Email: mahjabinb43@gmail.com</p>
        {/* <p><button className={classes.button}>Contact</button></p> */}
      </div>
    </div>
  </div>

  <div className={classes.column}>
    <div className={classes.card}>
      {/* <img src="/w3images/team1.jpg" alt="Jane" style="width:100%"> */}
      <div className={classes.container}>
        <h4>Salamaddin Sk</h4>
        <p class="title">Roll No. CSE193008</p>
        
        <p>Email: salamaddinsk100@gmail</p>

        {/* <p><button className={classes.button}>Contact</button></p> */}
      </div>
    </div>
  </div>

  <div className={classes.column}>
    <div className={classes.card}>
      {/* <img src="/w3images/team1.jpg" alt="Jane" style="width:100%"> */}
      <div className={classes.container}>
        <h4>Husne Hasida</h4>
        <p class="title">Roll No. CSE19014</p>
        
        <p></p>
        {/* <p><button className={classes.button}>Contact</button></p> */}
      </div>
    </div>
  </div>


</div>
    
    </>
    )
}

export default About;