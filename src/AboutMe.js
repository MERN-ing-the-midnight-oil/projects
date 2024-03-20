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
				With a rigorous background in the natural sciences, I'm a creative
				thinker with sharp logic and solid reasoning skills. I switch quickly
				between detail orientation and big-picture thinking, and I excel in team
				environments.
			</p>
		</div>
	);
}
