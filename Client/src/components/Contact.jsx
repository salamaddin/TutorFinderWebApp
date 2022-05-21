import React from "react";
import classes from "../Styles/Contact.module.css";
const Contact =()=>{
    const handler=() =>{
        window.alert("your response has been submitted successfully")
    }

    return (
        <>
        <div className={classes.ForNav}></div>
        

        <div className={classes.containerc}>
        <h2>Contact with us</h2>
            <form>
            <label for="fname">Enter your Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.." />

        <div>
        <label for="fname">Enter your Email</label>
        <input type="mail" id="fname" name="firstname" placeholder="Your Email.." />
        </div>

        <label for="subject"> Subject  </label>
        <input type="text" id="fname" name="firstname" placeholder="Write something.." />
    {/* <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea> */}

    {/* <input type="submit" value="Submit" /> */}
    <br></br>
    <button className={classes.buttonc} onClick={handler}>Submit</button>

            </form>
        </div>


        </>
    )
}

export default Contact;