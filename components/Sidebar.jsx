import React, { useState, useEffect } from "react";
import Link from "next/link";

const Sidebar = ({ hero, about, projects, contact }) => {
	// scroll logic: set selected section to be the one upon which the current center of the screen falls
	const [selected, setSelected] = useState("Home");
	const [scrollPosition, setScrollPosition] = useState(0);

	const handleScroll = () => {
		setScrollPosition(window.scrollY + window.innerHeight / 2);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});

	// determine which section is currently at the center of the screen by checking whether we have reached the bottom of a section
	useEffect(() => {
		const heroBottom =
			hero.current?.offsetTop + hero.current?.getBoundingClientRect().height;
		const aboutBottom =
			about.current?.offsetTop + about.current?.getBoundingClientRect().height;
		const projectsBottom =
			projects.current?.offsetTop +
			projects.current?.getBoundingClientRect().height;
		const contactBottom =
			contact.current?.offsetTop +
			contact.current?.getBoundingClientRect().height;

		if (scrollPosition <= heroBottom) {
			setSelected("Home");
		} else if (scrollPosition <= aboutBottom) {
			setSelected("About Me");
		} else if (scrollPosition <= projectsBottom) {
			setSelected("Projects");
		} else if (scrollPosition <= contactBottom) {
			setSelected("Contact");
		}
	}, [about, contact, hero, projects, scrollPosition]);

	// show section names upon hovering over the appropriate button
	const [homeHover, setHomeHover] = useState(false);
	const [aboutHover, setAboutHover] = useState(false);
	const [projectsHover, setProjectsHover] = useState(false);
	const [contactHover, setContactHover] = useState(false);

	return (
		<div>
			<ul className="hidden fixed xl:flex flex-col left-0 top-48 pl-8 z-[100]">
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
									: "px-2 py-1 rounded-md hidden pointer-events-none"
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
									: "px-2 py-1 rounded-md hidden pointer-events-none"
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
									? "rounded-full border-4 border-indigo-600 cursor-pointer p-3 my-4 mx-2 h-10 w-10 bg-indigo-600"
									: "rounded-full border-4 border-indigo-600 cursor-pointer p-3 my-4 mx-2 h-10 w-10"
							}
						></div>
					</Link>
					<div>
						<span
							className={
								projectsHover
									? "px-2 text-lg py-1 bg-indigo-500 rounded-md"
									: "px-2 py-1 rounded-md hidden pointer-events-none"
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
									: "px-2 py-1 rounded-md hidden pointer-events-none"
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
