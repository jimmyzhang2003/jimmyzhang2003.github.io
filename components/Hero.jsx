import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";

const Hero = (props, ref) => {
	return (
		<div ref={ref} id="hero" className="w-full h-screen text-center">
			<div className="max-w-[1240px] w-full h-full mx-auto p-2 flex flex-wrap md:flex-nowrap justify-center items-center">
				<div className="mt-24 md:mt-0">
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

export default React.forwardRef(Hero);
