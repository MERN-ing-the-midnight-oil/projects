import React from "react";
import CustomCard from "./CustomCard";
import shelfElfImage from "./images/ShelfElf.png"; // Adjust the path as necessary for your project structure
import fullStackImage from "./images/fullstack.jpeg";
import cruxImage from "./images/crux.png"; // Adjust the path as necessary for

const projects = [
	// Full MERN Stack projects
	{
		title: "Crux",
		subtitle:
			"A unique crossword puzzle game with visual clues and elements of `Dixit` and `Mysterium`.",
		repo: "https://github.com/MERN-ing-the-midnight-oil/crux-2.0",
		deployedURL: "https://mern-ing-the-midnight-oil.github.io/CRUX-2.0/",
		image: cruxImage, // Ensure you have an import or a path for 'cruxImage' that corresponds to an actual image file
		category: "Games for Mobile",
	},

	{
		title: "Shelf Elf",
		subtitle:
			"A full-stack MERN platform facilitating peer-to-peer book lending.",
		description:
			"A full stack MERN application showcasing a front-end built with React Hooks and Context API. The back-end uses JWT for authentication, structured with Typescript.",
		repo: "https://github.com/MERN-ing-the-midnight-oil/shelf-elf",
		deployedURL:
			"https://shelf-elf-4b02ddd52e38.herokuapp.com/manage-communities",
		image: shelfElfImage,
		category: "Full MERN Stack projects",
	},
	{
		title: "NOAA Fisheries BSAI/GOA Bycatch Rates Widget",
		subtitle:
			"Full Stack MERN Web Application with RESTful and GraphQL Data Handling",
		description:
			"A comprehensive full stack MERN application demonstrating dynamic data fetching and visualization for NOAA fisheries bycatch rates.",
		repo: "https://github.com/MERN-ing-the-midnight-oil/bycatch-rates-by-week-and-vessel",
		deployedURL: "https://bycatch-widget-1506213f206c.herokuapp.com/",
		image:
			"https://cdn.midjourney.com/ec411195-821e-4f8d-8e9e-0ff324d3b9fb/0_0.webp",
		category: "Full MERN Stack projects",
	},
	// Front-end demos
	{
		title: "Genre Genie",
		subtitle: "A movie suggestion platform based on user-selected genres.",
		description:
			"Demonstrates the integration of third-party API calls and the effective use of local storage for user preferences and data retrieval.",
		repo: "https://github.com/MERN-ing-the-midnight-oil/Genre-Genie",
		deployedURL: "https://mern-ing-the-midnight-oil.github.io/Genre-Genie/",
		image:
			"https://cdn.midjourney.com/a0dcda47-f18b-4887-9d50-578a4f6a1aed/grid_0.png",
		category: "Front-end demos",
	},
	{
		title: "Bananarama Grams",
		subtitle: "A front-end crossword puzzle game element simulation.",
		description:
			"A React app showcasing use of useState, useEffect, and useRef and custom CSS for visual effects. The game partially simulates a popular crossword-style tabletop game.",
		repo: "https://github.com/MERN-ing-the-midnight-oil/tiles-game",
		deployedURL: "https://mern-ing-the-midnight-oil.github.io/tiles-game/",
		image:
			"https://cdn.midjourney.com/ba0c7b4f-c62e-4f58-93b1-ee32edd9a446/0_2.webp",
		category: "Front-end demos",
	},
	{
		title: "Fade and Flow Animations using React-Spring",
		subtitle:
			"An automated image animation gallery with generative AI tutorial.",
		description:
			"This repository allows you to animate sequences of images in a smooth fading transition using React and React-Spring. It's optimized for animating the art made from generative art AI models.",
		repo: "https://github.com/MERN-ing-the-midnight-oil/fade-and-flow",
		deployedURL: "https://mern-ing-the-midnight-oil.github.io/fade-and-flow/",
		image:
			"https://cdn.midjourney.com/ba7a37d1-d4d9-4e15-92c0-de6b52783426/0_2.png",
		category: "Front-end demos",
	},
	{
		title: "Here Kitty Kitty Score Calculator",
		subtitle:
			"A score calculator for the 'Here Kitty Kitty' board game by Fireside Games.",
		description:
			"An app that enables players to easily calculate their scores after playing 'Here Kitty Kitty'. It includes interactive elements for score tallying and utilizes state management for dynamic updates.",
		repo: "https://github.com/MERN-ing-the-midnight-oil/here-kitty-kitty-score-calculator",
		deployedURL:
			"https://mern-ing-the-midnight-oil.github.io/here-kitty-kitty-score-calculator/",
		image:
			"https://cdn.midjourney.com/7e5e1040-e3a8-4bf1-8f2d-227d2751aeef/0_0.webp",
		category: "Front-end demos",
	},

	// Collaborations

	{
		title: "Mail-Me-Seeds",
		subtitle: "A platform for gardeners and farmers to share vegetable seeds.",
		description:
			"Demonstrates my ability to work on a team using agile methods and shows mastery of Model-View-Controller (MVC) architecture. A group project that uses handlebars templating and nodeMailer.",
		repo: "https://github.com/TheBluWiz/mail-me-seeds",
		deployedURL: "https://mail-me-seeds.herokuapp.com/",
		image:
			"https://cdn.midjourney.com/dfc5bb94-1992-4f82-9c0e-ee38621a0bef/grid_0.png",
		category: "Collaborations",
	},
	{
		title: "Ro-Sham-Bots",
		subtitle: "A game where users compete against AI in rock-paper-scissors.",
		description:
			"A full stack MERN application integrating AI bots and offering real-time user communication using socket.io. This was a group project where my primary contributions were in Backend typeDefs & resolvers, Concept & Mockup, and User authentication.",
		repo: "https://github.com/katbakr/beat-the-bots",
		deployedURL: "https://beat-the-bots.herokuapp.com/",
		image:
			"https://cdn.midjourney.com/a7dd1cb8-0fe2-4f21-be44-6967b38b15b7/grid_0.png",
		category: "Collaborations",
	},
];

const Portfolio = () => {
	const openImageInNewTab = () => {
		const newTab = window.open();
		newTab.document.body.innerHTML = `<img src="${fullStackImage}" style="width: 100%; height: auto;">`;
	};
	return (
		<div
			className="portfolio-container"
			style={{ paddingTop: "40px", alignContent: "center" }}>
			<h1 style={{ textAlign: "center" }}>My Projects</h1>

			{/* Games for Mobile section */}
			<h2 style={{ textAlign: "center" }}>Games for Mobile</h2>
			<div className="card-container">
				{projects
					.filter((project) => project.category === "Games for Mobile")
					.map((project) => (
						<CustomCard
							key={project.id}
							{...project}
						/>
					))}
			</div>

			{/* Full MERN Stack projects */}
			<h2 style={{ textAlign: "center" }}>Full Stack</h2>
			<div className="card-container">
				{projects
					.filter((project) => project.category === "Full MERN Stack projects")
					.map((project) => (
						<CustomCard
							key={project.id}
							{...project}
						/>
					))}
			</div>

			{/* Front-end demos */}
			<h2 style={{ textAlign: "center" }}>Front-end</h2>
			<div className="card-container">
				{projects
					.filter((project) => project.category === "Front-end demos")
					.map((project) => (
						<CustomCard
							key={project.id}
							{...project}
						/>
					))}
			</div>

			{/* Collaborations */}
			<h2 style={{ textAlign: "center" }}>Collaborations</h2>
			<div className="card-container">
				{projects
					.filter((project) => project.category === "Collaborations")
					.map((project) => (
						<CustomCard
							key={project.id}
							{...project}
						/>
					))}
			</div>

			{/* Certification Image */}
			<div style={{ textAlign: "center", marginTop: "20px" }}>
				<h1 style={{ textAlign: "center" }}>
					Full stack web development certification
				</h1>
				<img
					src={fullStackImage}
					alt="Full Stack Certified"
					style={{ width: "40%", height: "auto", cursor: "pointer" }}
					onClick={openImageInNewTab}
					title="Click to view in full size"
				/>
			</div>
		</div>
	);
};

export default Portfolio;
