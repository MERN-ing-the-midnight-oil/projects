import React, { useState, useEffect, useRef } from "react";
import Header from "./Header";
import Portfolio from "./Portfolio";

const ParallaxContainer = () => {
	const backgroundImageUrls = Array.from(
		{ length: 9 },
		(_, i) => `${process.env.PUBLIC_URL}/CosmicBG/e${i + 1}.webp`
	);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const animationIntervalRef = useRef(null);

	useEffect(() => {
		// Preload images
		backgroundImageUrls.forEach((imageUrl) => {
			const img = new Image();
			img.src = imageUrl;
		});
	}, [backgroundImageUrls]);

	const startAnimation = () => {
		// Ensures we're not starting another interval if one is already running
		if (!animationIntervalRef.current) {
			animationIntervalRef.current = setInterval(() => {
				setCurrentImageIndex(
					(prevIndex) => (prevIndex + 1) % backgroundImageUrls.length
				);
			}, 150); // Change image every 150ms
		}
	};

	const stopAnimation = () => {
		if (animationIntervalRef.current) {
			clearInterval(animationIntervalRef.current);
			animationIntervalRef.current = null;
		}
	};

	const handleMouseOver = () => {
		startAnimation();
	};

	const handleMouseOut = () => {
		stopAnimation();
	};

	return (
		<div>
			<Header />
			<div
				onMouseOver={handleMouseOver}
				onMouseOut={handleMouseOut}
				style={{
					position: "relative",
					height: "650px",
					backgroundImage: `url(${backgroundImageUrls[currentImageIndex]})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundAttachment: "fixed",
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
