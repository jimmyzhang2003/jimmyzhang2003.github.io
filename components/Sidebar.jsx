import React, { useState, useEffect } from "react";
import Link from "next/link";

const Sidebar = ({ hero, about }) => {
	const [selected, setSelected] = useState("Home");
	const [heroPosition, setHeroPosition] = useState(hero.current?.offSetTop);
	const [aboutPosition, setAboutPosition] = useState(about.current?.offSetTop);
	const [scrollPosition, setScrollPosition] = useState(0);

	const handleScroll = () => {
		const scrollPos = window.scrollY;
		const heroPos = hero.current?.offsetTop - scrollPosition;
		const aboutPos = about.current?.offsetTop - scrollPosition;

		setScrollPosition(scrollPos);
		setHeroPosition(heroPos);
		setAboutPosition(aboutPos);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});

	useEffect(() => {
		const posList = [heroPosition, aboutPosition].map((pos) => Math.abs(pos));

		if (Math.min(...posList) === Math.abs(heroPosition)) {
			setSelected("Home");
		} else if (Math.min(...posList) === Math.abs(aboutPosition)) {
			setSelected("About Me");
		}
	}, [aboutPosition, heroPosition]);

	return (
		<div>
			{/*
			<p className="fixed top-20 left-0">{scrollPosition}</p>
			<p className="fixed top-20 left-20"> {Math.abs(hero.current?.offsetTop - scrollPosition)} </p>
			<p className="fixed top-20 left-36"> {Math.abs(about.current?.offsetTop - scrollPosition)} </p> 
            */}
			<ul className="hidden fixed xl:flex flex-col left-0 top-48 px-8">
				<li>
					<p>{selected}</p>
				</li>
				<li>
					<Link href="/">
						<div
							onClick={() => setTimeout(() => setSelected("Home"), 1000)}
							className={
								selected === "Home"
									? "rounded-full border-4 border-gray-500 cursor-pointer p-3 m-3 h-3 w-3 bg-purple-800"
									: "rounded-full border-4 border-gray-500 cursor-pointer p-3 m-3 h-3 w-3"
							}
						></div>
					</Link>
					<div>
						<span className="px-2 py-1 rounded-md ml-10 opacity-100">Home</span>
					</div>
				</li>
				<li>
					<Link href="/#about">
						<div
							onClick={() => setTimeout(() => setSelected("About Me"), 1000)}
							className={
								selected === "About Me"
									? "rounded-full border-4 border-gray-500 cursor-pointer p-3 m-3 h-3 w-3 bg-purple-800"
									: "rounded-full border-4 border-gray-500 cursor-pointer p-3 m-3 h-3 w-3"
							}
						></div>
					</Link>
					<div>
						<span className="px-2 py-1 rounded-md ml-10 opacity-100">
							About Me
						</span>
					</div>
				</li>
				<li>
					<Link href="/#projects">
						<div
							onClick={() => setTimeout(() => setSelected("Projects"), 1000)}
							className={
								selected === "Projects"
									? "rounded-full border-4 border-gray-500 first-letter:cursor-pointer p-3 m-3 h-3 w-3 bg-purple-800"
									: "rounded-full border-4 border-gray-500 cursor-pointer p-3 m-3 h-3 w-3"
							}
						></div>
					</Link>
					<div>
						<span className="px-2 py-1 rounded-md ml-10 opacity-100">
							Projects
						</span>
					</div>
				</li>
				<li>
					<Link href="/#contact">
						<div
							onClick={() => setTimeout(() => setSelected("Contact"), 1000)}
							className={
								selected === "Contact"
									? "rounded-full border-4 border-gray-500 cursor-pointer p-3 m-3 h-3 w-3 bg-purple-800"
									: "rounded-full border-4 border-gray-500 cursor-pointer p-3 m-3 h-3 w-3"
							}
						></div>
					</Link>
					<div>
						<span className="px-2 py-1 rounded-md ml-10 opacity-100">
							Contact
						</span>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
