import React from "react";

export default function AboutMe() {
	return (
		<div
			style={{
				display: "flex", // Use flexbox to layout children side by side
				alignItems: "center", // Vertically center the items
				backgroundColor: "#f9f9f9",
				padding: "20px",
				borderRadius: "5px",
				boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
				gap: "20px", // Adds space between the image and the text
			}}>
			{/* Profile picture */}
			<img
				src={`${process.env.PUBLIC_URL}/profilepic.jpeg`}
				alt="Profile"
				style={{
					width: "150px", // Set the size of the image
					height: "150px",
					objectFit: "cover", // Ensures the aspect ratio is maintained
					border: "3px solid #ccc", // Adds a border around the image
				}}
			/>
			{/* About Me text */}
			<p
				style={{
					fontSize: "1.5rem",
					color: "#333",
					margin: "0", // Removes default paragraph margin
					flex: 1, // Allows the text to fill the remaining space
				}}>
				With a rigorous background in science, education, and art, I'm a
				creative thinker with sharp logic and reasoning. Skilled in both detail
				orientation and big-picture thinking, I excel in team environments.
			</p>
		</div>
	);
}
