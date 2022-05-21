import React from 'react';
import Classes from "../Styles/HowTutorFinderWork.module.css";

export default function HowTutorFinderWork() {

return (
    <>
		<hr/><hr/>
		<div className={Classes.forHeading}>
			<h1> How Tutor Finder Works?</h1>
		</div>
       
        <div className={Classes.forBody}>
			<div className={Classes.howWorkBlock}>
				<img src="https://c.urbanpro.com/assets/emailer/CalendarNew-f66c9df8db9feeb32d3fb1bf694755d8.png" className={Classes.lazyImage} width="100" height="100" alt=""/>
				<p className={Classes.hwTitle}>
					
					<span>Book a Demo</span>
				</p>
				<p className={Classes.hwDesc}>Book a Free Demo Class with a Tutor.</p>
			</div>
			<div className={Classes.howWorkBlock}>
				<img src="https://c.urbanpro.com/assets/emailer/liveDemoNew-f6b63711063db96eae6b716ceaa9883f.png" className={Classes.lazyImage} width="100" height="100" alt=""/>
				<p className={Classes.hwTitle}>
					
					<span>Join LIVE Demo Class</span>
				</p>
				<p className={Classes.hwDesc}>Attend the Demo class as scheduled.</p>
			</div>
			<div className={Classes.howWorkBlock}>
				<img src="https://c.urbanpro.com/assets/emailer/securpay3New-4ef2509ab88e9371d418b1413a25c288.png" className={Classes.lazyImage} width="100" height="100" alt=""/>
				<p className={Classes.hwTitle}>
					
					<span>Pay and Start</span>
				</p>
				<p className={Classes.hwDesc}>Pay and start your Classes.</p>
			</div>
		</div>
		<div className={Classes.forButton}>
			<button>Get Start</button>
		</div>    
    </>
);
}
