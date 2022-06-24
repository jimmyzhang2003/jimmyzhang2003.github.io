import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Navbar = () => {
	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};

	return (
		<div className="fixed w-full h-20 shadow-xl z-[100]">
			<div className="flex justify-between items-center w-full h-full px-7 2xl:px-16">
				<Image
					src="/../public/assets/logo.png"
					alt="Jimmy Zhang's Logo"
					width="125"
					height="60"
				/>
				<div>
					<ul className="hidden md:flex">
						<Link href="/">
							<li className="ml-10 text-lg uppercase hover:border-b-4">Home</li>
						</Link>
						<Link href="/">
							<li className="ml-10 text-lg uppercase hover:border-b-4">
								About Me
							</li>
						</Link>
						<Link href="/">
							<li className="ml-10 text-lg uppercase hover:border-b-4">
								Projects
							</li>
						</Link>
						<Link href="/">
							<li className="ml-10 text-lg uppercase hover:border-b-4">
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
							? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#eaf9fc] p-10 ease-in duration-500"
							: "fixed left-[-200%] top-0 p-10 ease-in duration-500"
					}
				>
					<div>
						<div className="flex w-full items-center justify-between">
							<Image
								src="/../public/assets/logo.png"
								width="100"
								height="50"
								alt=""
							/>
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

						<div className="py-4 flex-col">
							<ul className="uppercase">
								<Link href="/">
									<li className="py-4 text-md">Home</li>
								</Link>
								<Link href="/">
									<li className="py-4 text-md">About Me</li>
								</Link>
								<Link href="/">
									<li className="py-4 text-md">Projects</li>
								</Link>
								<Link href="/">
									<li className="py-4 text-md">Contact</li>
								</Link>
							</ul>

							<div className="pt-24">
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

									<div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
										<AiOutlineMail />
									</div>
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
