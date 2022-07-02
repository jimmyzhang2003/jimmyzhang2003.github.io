import React, { useState, useEffect } from "react";
import Link from "next/link";

const Sidebar = ({ hero, about, projects, contact }) => {
	// color in the appropriate button based on the current page position
	const [selected, setSelected] = useState("Home");
	const [heroPosition, setHeroPosition] = useState(hero.current?.offSetTop);
	const [aboutPosition, setAboutPosition] = useState(about.current?.offSetTop);
	const [projectsPosition, setProjectsPosition] = useState(
		projects.current?.offSetTop
	);
	const [contactPosition, setContactPosition] = useState(
		contact.current?.offSetTop
	);
	const [scrollPosition, setScrollPosition] = useState(0);

	const handleScroll = () => {
		const scrollPos = window.scrollY;
		const heroPos = hero.current?.offsetTop - scrollPosition;
		const aboutPos = about.current?.offsetTop - scrollPosition;
		const projectsPos = projects.current?.offsetTop - scrollPosition;
		const contactPos = contact.current?.offsetTop - scrollPosition;

		setScrollPosition(scrollPos);
		setHeroPosition(heroPos);
		setAboutPosition(aboutPos);
		setProjectsPosition(projectsPos);
		setContactPosition(contactPos);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});

	useEffect(() => {
		const posList = [
			heroPosition,
			aboutPosition,
			projectsPosition,
			contactPosition,
		].map((pos) => Math.abs(pos));

		if (Math.min(...posList) === Math.abs(heroPosition)) {
			setSelected("Home");
		} else if (Math.min(...posList) === Math.abs(aboutPosition)) {
			setSelected("About Me");
		} else if (Math.min(...posList) === Math.abs(projectsPosition)) {
			setSelected("Projects");
		} else if (Math.min(...posList) === Math.abs(contactPosition)) {
			setSelected("Contact");
		}
	}, [aboutPosition, heroPosition, projectsPosition, contactPosition]);

	// show section names upon hovering over the appropriate button
	const [homeHover, setHomeHover] = useState(false);
	const [aboutHover, setAboutHover] = useState(false);
	const [projectsHover, setProjectsHover] = useState(false);
	const [contactHover, setContactHover] = useState(false);

	return (
		<div>
			{/*
			<p className="fixed top-20 left-0">{scrollPosition}</p>
			<p className="fixed top-20 left-20"> {Math.abs(hero.current?.offsetTop - scrollPosition)} </p>
			<p className="fixed top-20 left-36"> {Math.abs(about.current?.offsetTop - scrollPosition)} </p> 
            */}
			<ul className="hidden fixed xl:flex flex-col left-0 top-48 px-8 z-[100]">
				{/*<li>
					<p>{selected}</p>
                </li>*/}
				<li className="flex items-center cursor-default">
					<Link href="/">
						<div
							onClick={() => setTimeout(() => setSelected("Home"), 1000)}
							onMouseEnter={() => setHomeHover(true)}
							onMouseLeave={() => setHomeHover(false)}
							className={
								selected === "Home"
									? "rounded-full border-4 border-indigo-600 cursor-pointer p-3 my-4 mx-2 h-10 w-10 bg-indigo-600"
									: "rounded-full border-4 border-indigo-600 cursor-pointer p-3 my-4 mx-2 h-10 w-10"
							}
						></div>
					</Link>
					<div>
						<span
							className={
								homeHover
									? "px-2 py-1 text-lg bg-indigo-500 rounded-md"
									: "px-2 py-1 rounded-md opacity-0"
							}
						>
							Home
						</span>
					</div>
				</li>
				<li className="flex items-center cursor-default">
					<Link href="/#about">
						<div
							onClick={() => setTimeout(() => setSelected("About Me"), 1000)}
							onMouseEnter={() => setAboutHover(true)}
							onMouseLeave={() => setAboutHover(false)}
							className={
								selected === "About Me"
									? "rounded-full border-4 border-indigo-600 cursor-pointer p-3 my-4 mx-2 h-10 w-10 bg-indigo-600"
									: "rounded-full border-4 border-indigo-600 cursor-pointer p-3 my-4 mx-2 h-10 w-10"
							}
						></div>
					</Link>
					<div>
						<span
							className={
								aboutHover
									? "px-2 py-1 text-lg bg-indigo-500 rounded-md"
									: "px-2 py-1 rounded-md opacity-0"
							}
						>
							About Me
						</span>
					</div>
				</li>
				<li className="flex items-center cursor-default">
					<Link href="/#projects">
						<div
							onClick={() => setTimeout(() => setSelected("Projects"), 1000)}
							onMouseEnter={() => setProjectsHover(true)}
							onMouseLeave={() => setProjectsHover(false)}
							className={
								selected === "Projects"
									? "rounded-full border-4 border-indigo-600 first-letter:cursor-pointer p-3 my-4 mx-2 h-10 w-10 bg-indigo-600"
									: "rounded-full border-4 border-indigo-600 cursor-pointer p-3 my-4 mx-2 h-10 w-10"
							}
						></div>
					</Link>
					<div>
						<span
							className={
								projectsHover
									? "px-2 text-lg py-1 bg-indigo-500 rounded-md"
									: "px-2 py-1 rounded-md opacity-0"
							}
						>
							Projects
						</span>
					</div>
				</li>
				<li className="flex items-center cursor-default">
					<Link href="/#contact">
						<div
							onClick={() => setTimeout(() => setSelected("Contact"), 1000)}
							onMouseEnter={() => setContactHover(true)}
							onMouseLeave={() => setContactHover(false)}
							className={
								selected === "Contact"
									? "rounded-full border-4 border-indigo-600 cursor-pointer p-3 my-4 mx-2 h-10 w-10 bg-indigo-600"
									: "rounded-full border-4 border-indigo-600 cursor-pointer p-3 my-4 mx-2 h-10 w-10"
							}
						></div>
					</Link>
					<div>
						<span
							className={
								contactHover
									? "px-2 py-1 text-lg bg-indigo-500 rounded-md"
									: "px-2 py-1 rounded-md opacity-0"
							}
						>
							Contact
						</span>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
