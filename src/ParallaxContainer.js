import React, { useState, useEffect } from "react";
import Header from "./Header";
import Portfolio from "./Portfolio";

const ParallaxContainer = () => {
	const backgroundImageUrls = [
		"bg1.png",
		"bg2.png",
		"bg3.png",
		"bg4.png",
		"bg5.png",
	]; // Array of image URLs
	const [backgroundImage, setBackgroundImage] = useState(
		backgroundImageUrls[0]
	);
	const [lastImageSet, setLastImageSet] = useState(false);

	useEffect(() => {
		// Pre-load images
		backgroundImageUrls.forEach((image) => {
			const img = new Image();
			img.src = `${process.env.PUBLIC_URL}/${image}`;
		});

		const handleScroll = () => {
			if (lastImageSet) return;

			const documentHeight = document.documentElement.scrollHeight;
			const scrollTop =
				window.pageYOffset || document.documentElement.scrollTop;
			const windowHeight = window.innerHeight;
			const scrollableHeight = documentHeight - windowHeight;
			const scrolledPercentage = scrollTop / scrollableHeight;

			let newImageIndex = 0; // Default to first image
			if (scrolledPercentage < 0.02) {
				newImageIndex = 0;
			} else if (scrolledPercentage < 0.05) {
				newImageIndex = 1;
			} else if (scrolledPercentage < 0.08) {
				newImageIndex = 2;
			} else if (scrolledPercentage < 0.11) {
				newImageIndex = 3;
			} else {
				newImageIndex = 4;
				setLastImageSet(true);
			}

			setBackgroundImage(backgroundImageUrls[newImageIndex]);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [lastImageSet, backgroundImageUrls]); // Add backgroundImageUrls as a dependency

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
