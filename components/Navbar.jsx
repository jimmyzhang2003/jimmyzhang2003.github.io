import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillSunFill, BSFillMoonFill, BsFillMoonFill } from "react-icons/bs";
import { IoIosPaper } from "react-icons/io";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [shadow, setShadow] = useState(false);
	const { theme, setTheme } = useTheme();

	const handleNav = () => {
		setNav(!nav);
	};

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY >= 90) {
				setShadow(true);
			} else {
				setShadow(false);
			}
		});
	}, []);

	return (
		<div
			className={
				shadow
					? theme === "dark"
						? "fixed w-full h-20 shadow-xl bg-[#171717] z-[100]"
						: "fixed w-full h-20 shadow-xl bg-white z-[100]"
					: theme === "dark"
					? "fixed w-full h-20 bg-[#171717] z-[100]"
					: "fixed w-full h-20 bg-white z-[100]"
			}
		>
			<div className="flex justify-between items-center w-full h-full px-7 2xl:px-16">
				<Link href="/">
					<Image
						src="/assets/logo-modified.png"
						alt="Jimmy Zhang's Logo"
						width="65"
						height="65"
						className="cursor-pointer"
					/>
				</Link>
				<div className="flex">
					<div
						aria-label="Toggle Dark Mode"
						className="mr-8 hover:border-b-4 cursor-pointer hover:scale-110 ease-in duration-300"
						onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
					>
						{theme === "dark" ? (
							<BsFillSunFill size={27} color="#f5bd1f" />
						) : (
							<BsFillMoonFill size={27} color="#f5bd1f" />
						)}
					</div>
					<ul className="hidden md:flex">
						<Link href="/">
							<li className="text-md uppercase hover:border-b-4">Home</li>
						</Link>
						<Link href="/#about">
							<li className="ml-8 text-md uppercase hover:border-b-4">
								About Me
							</li>
						</Link>
						<Link href="/#projects">
							<li className="ml-8 text-md uppercase hover:border-b-4">
								Projects
							</li>
						</Link>
						<Link href="/assets/resume.pdf">
							<li className="ml-8 text-md uppercase hover:border-b-4">
								Resume
							</li>
						</Link>
						<Link href="/#contact">
							<li className="ml-8 text-md uppercase hover:border-b-4">
								Contact
							</li>
						</Link>
					</ul>

					<div onClick={handleNav} className="md:hidden">
						<AiOutlineMenu size={30} />
					</div>
				</div>
			</div>

			<div
				className={
					nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
				}
			>
				<div
					className={
						nav
							? theme === "dark"
								? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] bg-[#282828] h-screen z-[100] p-10 ease-in duration-500"
								: "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] bg-[#f5f5f5] h-screen z-[100] p-10 ease-in duration-500"
							: "fixed left-[-200%] top-0 p-10 ease-in duration-500"
					}
				>
					<div>
						<div className="flex w-full items-center justify-between">
							<Link href="/">
								<Image
									src="/assets/logo-modified.png"
									width="65"
									height="65"
									alt="Jimmy Zhang's Logo"
									className="cursor-pointer"
								/>
							</Link>
							<div
								onClick={handleNav}
								className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-110 ease-in duration-300"
							>
								<AiOutlineClose />
							</div>
						</div>

						<div className="border-b border-gray-300 my-4 ">
							<p className="w-[85%] md:w-[90%] py-4">
								A snapshot of my work, goals, and personal life.
							</p>
						</div>

						<div className="py-3 flex-col">
							<ul className="uppercase">
								<Link href="/">
									<li
										onClick={() => setNav(false)}
										className="py-3 text-md hover:border-b-4"
									>
										Home
									</li>
								</Link>
								<Link href="/#about">
									<li
										onClick={() => setNav(false)}
										className="py-3 text-md hover:border-b-4"
									>
										About Me
									</li>
								</Link>
								<Link href="/#projects">
									<li
										onClick={() => setNav(false)}
										className="py-3 text-md hover:border-b-4"
									>
										Projects
									</li>
								</Link>
								<Link href="/assets/resume.pdf">
									<li
										onClick={() => setNav(false)}
										className="py-3 text-md hover:border-b-4"
									>
										Resume
									</li>
								</Link>
								<Link href="/#contact">
									<li
										onClick={() => setNav(false)}
										className="py-3 text-md hover:border-b-4"
									>
										Contact
									</li>
								</Link>
							</ul>

							<div className="pt-16">
								<p className="uppercase tracking-widest text-[#ff00ff]">
									Connect with me
								</p>
								<div className="flex items-center justify-between my-4 w-full sm:w-[75%]">
									<a
										href="https://www.linkedin.com/in/jimmy-zhang-5291781b4/"
										target="_blank"
										rel="noreferrer"
									>
										<div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
											<FaLinkedinIn />
										</div>
									</a>

									<a
										href="https://github.com/jimmyzhang2003"
										target="_blank"
										rel="noreferrer"
									>
										<div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
											<FaGithub />
										</div>
									</a>

									<Link href="#contact">
										<div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
											<AiOutlineMail />
										</div>
									</Link>

									<Link href="/assets/resume.pdf">
										<div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
											<IoIosPaper />
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
