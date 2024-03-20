import React, { useState, useEffect } from "react";
import AboutMe from "./AboutMe";
import { BsLinkedin, BsGithub } from "react-icons/bs";

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const show = window.scrollY > window.innerHeight * 0.55;
			setIsScrolled(show);
		};

		document.addEventListener("scroll", handleScroll);
		return () => {
			document.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const email = "merning.the.midnight.oil@gmail.com";
	const subject = "Reaching Out";
	const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

	return (
		<div>
			{/* Persistent header for name and links */}
			<div
				style={{
					position: "fixed",
					top: 0,
					width: "100%",
					backgroundColor: "#f0f0f0",
					padding: "10px",
					display: "flex",
					justifyContent: "space-evenly",
					alignItems: "center",
					zIndex: 1000, // Ensure it's above other content
				}}>
				<span>Rhys Smoker</span>
				<a href={mailtoLink}>Email Me</a>
				<a href="https://www.linkedin.com/in/rhys-smoker/">
					<BsLinkedin />
				</a>
				<a href="https://github.com/MERN-ing-the-midnight-oil">
					<BsGithub />
				</a>
			</div>
			{/* About Me section that disappears on scroll */}
			<div style={{ marginTop: "60px" }}>
				{" "}
				{/* Adjust margin to match header height */}
				{!isScrolled && <AboutMe />}
			</div>
		</div>
	);
}
