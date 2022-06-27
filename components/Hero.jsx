import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";

const Hero = () => {
	const [selected, setSelected] = useState("Home");

	return (
		<div className="w-full h-screen text-center">
			<div className="max-w-[1240px] w-full h-full mx-auto p-2 flex flex-wrap md:flex-nowrap justify-center items-center">
				<ul className="hidden fixed xl:flex flex-col left-0 top-56 ml-3">
					<li>
						<p>{selected}</p>
					</li>
					<li className="bg-red-50">
						<Link href="/">
							<div
								onClick={() => setSelected("Home")}
								className={
									selected === "Home"
										? "rounded-full border-4 border-green-500 cursor-pointer p-3 m-3 h-3 w-3 bg-purple-800"
										: "rounded-full border-4 border-green-500 cursor-pointer p-3 m-3 h-3 w-3"
								}
							></div>
						</Link>
						<div>
							<span className="px-2 py-1 rounded-md ml-10 opacity-100">
								Home
							</span>
						</div>
					</li>
					<li className="bg-red-50">
						<Link href="/">
							<div
								onClick={() => setSelected("About Me")}
								className={
									selected === "About Me"
										? "rounded-full border-4 border-green-500 cursor-pointer p-3 m-3 h-3 w-3 bg-purple-800"
										: "rounded-full border-4 border-green-500 cursor-pointer p-3 m-3 h-3 w-3"
								}
							></div>
						</Link>
						<div>
							<span className="px-2 py-1 rounded-md ml-10 opacity-100">
								About Me
							</span>
						</div>
					</li>
					<li className="bg-red-50">
						<Link href="/">
							<div
								onClick={() => setSelected("Projects")}
								className={
									selected === "Projects"
										? "rounded-full border-4 border-green-500 first-letter:cursor-pointer p-3 m-3 h-3 w-3 bg-purple-800"
										: "rounded-full border-4 border-green-500 cursor-pointer p-3 m-3 h-3 w-3"
								}
							></div>
						</Link>
						<div>
							<span className="px-2 py-1 rounded-md ml-10 opacity-100">
								Projects
							</span>
						</div>
					</li>
					<li className="bg-red-50">
						<Link href="/">
							<div
								onClick={() => setSelected("Contact")}
								className={
									selected === "Contact"
										? "rounded-full border-4 border-green-500 cursor-pointer p-3 m-3 h-3 w-3 bg-purple-800"
										: "rounded-full border-4 border-green-500 cursor-pointer p-3 m-3 h-3 w-3"
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

				<div>
					<p className="uppercase text-md tracking-widest text-gray-400">
						Researcher
					</p>
					<p className="uppercase text-md tracking-widest text-gray-400">
						Software Developer
					</p>
					<p className="uppercase text-md tracking-widest text-gray-400">
						Computer Science Student
					</p>
					<p className="uppercase text-md tracking-widest text-gray-400">
						Lifelong Learner
					</p>
					<h1 className="py-2 px-3">
						Hey there, I&apos;m <span className="text-[#b903de]">Jimmy</span>
					</h1>
					<div className="flex items-center justify-between max-w-[350px] m-auto py-4">
						<a
							href="https://www.linkedin.com/in/jimmy-zhang-5291781b4/"
							target="_blank"
							rel="noreferrer"
						>
							<div className="rounded-full shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
								<FaLinkedinIn />
							</div>
						</a>

						<a
							href="https://github.com/jimmyzhang2003"
							target="_blank"
							rel="noreferrer"
						>
							<div className="rounded-full shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
								<FaGithub />
							</div>
						</a>

						<div className="rounded-full shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
							<AiOutlineMail />
						</div>

						<Link href="/assets/resume.pdf">
							<div className="rounded-full shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
								<IoIosPaper />
							</div>
						</Link>
					</div>
				</div>
				<div className="mx-10 -z-10">
					{/* make sure that sidebar overlaps photo */}
					<Image
						src="/assets/jimmy_photo.jpeg"
						alt="Picture of Jimmy"
						width="450px"
						height="450px"
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
