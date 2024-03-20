import React, { useState, useEffect } from "react";
import { useTransition, animated } from "react-spring";
import Header from "./Header";
import Portfolio from "./Portfolio";

const ParallaxContainer = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [lastImageSet, setLastImageSet] = useState(false);
	const images = ["bg1.png", "bg2.png", "bg3.png", "bg4.png", "bg5.png"];

	useEffect(() => {
		const handleScroll = () => {
			if (lastImageSet) return;

			const documentHeight = document.documentElement.scrollHeight;
			const scrollTop =
				window.pageYOffset || document.documentElement.scrollTop;
			const windowHeight = window.innerHeight;
			const scrollableHeight = documentHeight - windowHeight;
			const scrolledPercentage = scrollTop / scrollableHeight;

			let newIndex = 0;
			if (scrolledPercentage < 0.02) newIndex = 0;
			else if (scrolledPercentage < 0.05) newIndex = 1;
			else if (scrolledPercentage < 0.08) newIndex = 2;
			else if (scrolledPercentage < 0.11) newIndex = 3;
			else {
				newIndex = images.length - 1; // Use the last index
				setLastImageSet(true);
			}

			setCurrentIndex(newIndex);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [lastImageSet, images.length]);

	const transitions = useTransition(currentIndex, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		config: { duration: 500 }, // Adjust duration for smoother or faster transitions
	});

	return (
		<div>
			<Header />
			<div
				style={{
					height: "650px",
					backgroundAttachment: "fixed",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					position: "relative",
				}}>
				{transitions((style, item) => (
					<animated.div
						style={{
							...style,
							position: "absolute",
							width: "100%",
							height: "100%",
							backgroundImage: `url(${process.env.PUBLIC_URL}/${images[item]})`,
						}}
					/>
				))}
			</div>
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
