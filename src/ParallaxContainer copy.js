import React, { useState, useEffect } from "react";
import Header from "./Header";
import Portfolio from "./Portfolio";

const ParallaxContainer = () => {
	const backgroundImageUrls = Array.from(
		{ length: 9 },
		(_, i) => `${process.env.PUBLIC_URL}/CosmicBG/e${i + 1}.webp`
	);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		// Initial preload of images
		backgroundImageUrls.forEach((imageUrl) => {
			const img = new Image();
			img.src = imageUrl;
		});

		const interval = setInterval(() => {
			setCurrentImageIndex(
				(prevIndex) => (prevIndex + 1) % backgroundImageUrls.length
			);
		}, 400); // duration

		return () => clearInterval(interval); // Cleanup on component unmount
	}, [backgroundImageUrls]);

	return (
		<div>
			<Header />
			<div
				style={{
					position: "relative",
					height: "650px",
					backgroundImage: `url(${backgroundImageUrls[currentImageIndex]})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundAttachment: "fixed", // Keeping fixed background attachment for parallax effect
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
