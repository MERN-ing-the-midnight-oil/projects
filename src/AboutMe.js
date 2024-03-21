import React from "react";

export default function AboutMe() {
	return (
		<div className="about-me-container">
			<img
				src={`${process.env.PUBLIC_URL}/profilepic.jpeg`}
				alt="Profile"
				className="about-me-profile-pic"
			/>
			<p className="about-me-text">
				My background is in the natural sciences and math and science education.
				I am creative and a tenacious problem solver. I'm also readily able to
				frequently switch between being detail oriented and being a systems
				thinker."
			</p>
		</div>
	);
}
