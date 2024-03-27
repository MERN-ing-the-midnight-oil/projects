import React, { useState, useEffect, useRef } from "react";
import Header from "./Header";
import Portfolio from "./Portfolio";

const ParallaxContainer = () => {
	const backgroundImageUrls = Array.from(
		{ length: 8 },
		(_, i) => `${process.env.PUBLIC_URL}/CosmicBG/e${i + 1}.webp`
	);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [imagesPreloaded, setImagesPreloaded] = useState(false);
	const animationIntervalRef = useRef(null);

	useEffect(() => {
		// Preload images and set state when complete
		let imagesLoaded = 0;
		backgroundImageUrls.forEach((imageUrl) => {
			const img = new Image();
			img.src = imageUrl;
			img.onload = () => {
				imagesLoaded++;
				if (imagesLoaded === backgroundImageUrls.length) {
					setImagesPreloaded(true);
				}
			};
		});
	}, [backgroundImageUrls]);

	const startAnimation = () => {
		if (!animationIntervalRef.current && imagesPreloaded) {
			animationIntervalRef.current = setInterval(() => {
				setCurrentImageIndex(
					(prevIndex) => (prevIndex + 1) % backgroundImageUrls.length
				);
			}, 150); // Adjust time as needed
		}
	};

	const stopAnimation = () => {
		if (animationIntervalRef.current) {
			clearInterval(animationIntervalRef.current);
			animationIntervalRef.current = null;
		}
	};

	const isMobile = () => window.innerWidth <= 768;

	// Ensure the proper styles are applied based on device
	const desktopStyle = {
		position: "relative",
		height: "650px",
		backgroundImage: `url(${backgroundImageUrls[currentImageIndex]})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundAttachment: "fixed",
	};

	const mobileStyle = {
		position: "relative",
		height: "650px",
		backgroundImage: `url(${process.env.PUBLIC_URL}/cellPhoneBG.png)`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundAttachment: "fixed",
	};

	return (
		<div>
			<Header />
			<div
				style={isMobile() ? mobileStyle : desktopStyle}
				onMouseOver={!isMobile() ? startAnimation : undefined}
				onMouseOut={!isMobile() ? stopAnimation : undefined}></div>
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
