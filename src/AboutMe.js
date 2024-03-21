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
				With a background in the natural sciences, I'm a creative thinker who
				enjoys problem solving. I'm able to switch quickly between big picture
				thinking and being detail oriented.
			</p>
		</div>
	);
}
