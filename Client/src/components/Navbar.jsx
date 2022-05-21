import React from "react";
import {BiAlignLeft} from "react-icons/bi";
import { Link } from "react-router-dom";
import Classes from '../Styles/Nav.module.css';
const Navbar =()=>{
    return(
        <>
            <nav className={Classes.navbar}>
                <input type="checkbox" id={Classes.check} />
                <label for="check" className={Classes.checkbtn}>
                <BiAlignLeft  className={Classes.fas
                }/>
                </label>
                <label className={Classes.logo} onClick={()=>{
                    window.location = "/";
                }}>TutorFinder</label>
                <ul>
                    <li><Link to="/" className={Classes.active}>Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/tutorsignup">For Tutors</Link></li>
                    <li><Link to="/contact">contact Us</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar