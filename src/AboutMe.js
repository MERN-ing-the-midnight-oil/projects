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
				I am a creative and tenacious problem solver. I'm also able to switch
				frequently between being detail oriented and being a systems thinker.
			</p>
		</div>
	);
}
