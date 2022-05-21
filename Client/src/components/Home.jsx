import React  from "react";
import Classes from "../Styles/Home.module.css"
import { useState, creatContext} from "react";
import OutlinedCard from "./Card";
import { NavLink, useNavigate } from "react-router-dom";
import Category from './Category'
import HowTutorFinderWork from './HowTutorFinderWork'
import StudentReviews from './StudentReviews'
import Footer from './Footer'


// export const UserContext = creatContext();

const Home =()=>{

    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const inputHandler= (e) => {
        const url = '/tutordata/'+search;
        navigate(url);    
               
    }

    return(
        <>
           
            <div id={Classes.mainDivHome}>
                <div id={Classes.searchBoxHome}>
                    <div id={Classes.searchInput}>
                        <h1>Join Interactive
                             Classes with the best Tutors
                        </h1>
                        <form>
                            <input type="text" placeholder="Search here..." value={search}
                            onChange={(e) => setSearch(e.target.value)}/>

                            <input type="submit" style={{cursor:"pointer"}}
                            value="Submit"
                            onClick = {inputHandler } />

                        </form> 
                         
                    </div>
                </div>
                <div id={Classes.exploreCategoryHome}><Category/></div>
                <div id={Classes.howTFWorks}><HowTutorFinderWork/></div>
                <div id={Classes.reviewsHome}><StudentReviews/></div>
                <Footer/>
            </div>
        </>
    )

}
export default Home 

