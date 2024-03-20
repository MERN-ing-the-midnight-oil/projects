import React from "react";
import Portfolio from "./Portfolio";
import Header from "./Header";
import lanternsImage from "./images/lanterns.png";

const ParallaxContainer = () => {
	return (
		<div>
			<Header />
			<div
				style={{
					backgroundImage: `url(${lanternsImage})`,
					height: "650px",
					backgroundAttachment: "fixed",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
				}}></div>
			<div
				style={{
					padding: "2rem",
					borderRadius: "10px", // Optional: for aesthetic
					margin: "0 auto",
					maxWidth: "90%", // Adjust based on your layout preferences
				}}>
				<Portfolio />
			</div>
		</div>
	);
};

export default ParallaxContainer;
