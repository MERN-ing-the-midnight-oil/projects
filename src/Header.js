import React, { useState, useEffect } from "react";
import AboutMe from "./AboutMe";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdMail } from "react-icons/md";

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const show = window.scrollY > window.innerHeight * 0.55;
			setIsScrolled(show);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const email = "merning.the.midnight.oil@gmail.com";
	const subject = "Reaching Out";
	const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

	return (
		<div className="header-container">
			<div className="persistent-header">
				<span style={{ fontWeight: "bold", fontSize: "24px" }}>
					MERN-ing THE MIDNIGHT OIL
				</span>
				<a href={mailtoLink}>
					<MdMail style={{ marginRight: "5px" }} />
					merning.the.midnight.oil@gmail.com
				</a>
				<a
					href="https://www.linkedin.com/in/rhys-smoker/"
					target="_blank"
					rel="noopener noreferrer">
					<BsLinkedin style={{ marginRight: "5px" }} />
					Rhys Smoker
				</a>
				<a
					href="https://github.com/MERN-ing-the-midnight-oil"
					target="_blank"
					rel="noopener noreferrer">
					<BsGithub style={{ marginRight: "5px" }} />
					MERN-ing-the-midnight-oil
				</a>
			</div>
			<div className="about-me-container">{!isScrolled && <AboutMe />}</div>
		</div>
	);
}
