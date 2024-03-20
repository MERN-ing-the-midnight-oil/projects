import React, { useState, useEffect } from "react";
import Header from "./Header";
import Portfolio from "./Portfolio";

const ParallaxContainer = () => {
	const [backgroundImage, setBackgroundImage] = useState("bg1.png");
	const [lastImageSet, setLastImageSet] = useState(false); // New state to track if the last image is set

	useEffect(() => {
		const handleScroll = () => {
			if (lastImageSet) return; // If the last image is set, do not change it

			// The rest of your scroll handling logic
			const documentHeight = document.documentElement.scrollHeight;
			const scrollTop =
				window.pageYOffset || document.documentElement.scrollTop;
			const windowHeight = window.innerHeight;
			const scrollableHeight = documentHeight - windowHeight;
			const scrolledPercentage = scrollTop / scrollableHeight;

			let newImage = "bg1.png";
			if (scrolledPercentage < 0.02) {
				newImage = "bg1.png";
			} else if (scrolledPercentage < 0.05) {
				newImage = "bg2.png";
			} else if (scrolledPercentage < 0.08) {
				newImage = "bg3.png";
			} else if (scrolledPercentage < 0.11) {
				newImage = "bg4.png";
			} else {
				newImage = "bg5.png";
				setLastImageSet(true); // Set the flag when the last image is set
			}

			setBackgroundImage(newImage);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [lastImageSet]); // Depend on lastImageSet so the effect is correctly cleaned up and reapplied if needed

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
					margin: "0 auto",
					maxWidth: "90%",
				}}>
				<Portfolio />
			</div>
		</div>
	);
};

export default ParallaxContainer;
