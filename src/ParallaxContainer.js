import React, { useState, useEffect } from "react";
import Header from "./Header";
import Portfolio from "./Portfolio";

const ParallaxContainer = () => {
	const [backgroundImage, setBackgroundImage] = useState("bg1.png");

	useEffect(() => {
		const handleScroll = () => {
			console.log("Scroll event detected");
			// Get the total height of the document
			const documentHeight = document.documentElement.scrollHeight;
			// Get the height from the top of the document to the top of the viewport
			const scrollTop =
				window.pageYOffset || document.documentElement.scrollTop;
			// Get the total height of the viewport
			const windowHeight = window.innerHeight;
			// Calculate the total scrollable length
			const scrollableHeight = documentHeight - windowHeight;
			// Calculate the current scroll progress as a percentage
			const scrolledPercentage = scrollTop / scrollableHeight;
			console.log("The scrolled percentage is: " + scrolledPercentage); // Log the scrolled percentage

			if (scrolledPercentage < 0.02) {
				setBackgroundImage("bg1.png");
			} else if (scrolledPercentage < 0.05) {
				setBackgroundImage("bg2.png");
			} else if (scrolledPercentage < 0.08) {
				setBackgroundImage("bg3.png");
			} else if (scrolledPercentage < 0.11) {
				setBackgroundImage("bg4.png");
			} else {
				setBackgroundImage("bg5.png"); // Ensures the last image is set towards the end
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div>
			<Header />
			<div
				style={{
					backgroundImage: `url(${process.env.PUBLIC_URL}/${backgroundImage})`,
					height: "650px",
					backgroundAttachment: "fixed",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
				}}></div>
			<div
				style={{
					padding: "2rem",
					backgroundColor: "#fff",
					margin: "0 auto",
					maxWidth: "90%",
				}}>
				<Portfolio />
			</div>
		</div>
	);
};

export default ParallaxContainer;
