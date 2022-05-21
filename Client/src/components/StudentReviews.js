import React from "react";
 import Classes from "../Styles/HowTutorFinderWork.module.css";

export default function StudentReviews() {
    return(
        <>
            <div className={Classes.forHeading}>
                <h1> Recent Reviews from Students</h1>
            </div>

            <div className={Classes.forBody}>
			<div className={Classes.howWorkBlock}>
				<p className={Classes.hwTitle}>

                  <span>Kumar Chandrasekar</span>
				</p>
                <p className={Classes.hwDesc}>"Mr.Kumar is always conscientious and knowledgeable.
                 He has made a real difference to my son's physics and chemistry skills and confidence.
                  It’s only been a month and I am happy with the classes and the results.
                 I hope this continues to the entire duration of the course. "</p>
			</div>
			<div className={Classes.howWorkBlock}>
				
				<p className={Classes.hwTitle}>
				<span>Umadevi U Kumara</span>
				</p>
				<p className={Classes.hwDesc}>"Anyone who is aspiring to get a strong foundation in computer applications should take classes from this teacher. 
                I strongly recommend this trainer. Excellent subject knowledge. "</p>	   


			</div>
			<div className={Classes.howWorkBlock}>
			
				<p className={Classes.hwTitle}>
                <span>Aman Sharma</span>
				</p>
                <p className={Classes.hwDesc}>"It was a great session really liked his teaching style.
                 Thank you so much for your support. Highly recommended to all. . "</p>
					
			</div>
		</div>

        </>
    );
}