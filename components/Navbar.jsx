import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
	return (
		<div className="fixed w-full h-20 shadow-xl z-[100]">
			<div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
				<Image
					src="/../public/assets/logo.png"
					alt="Jimmy Zhang's Logo"
					width="125"
					height="60"
				/>
				<div>
					<ul className="hidden md:flex">
						<Link href="/">
							<li className="ml-10 text-sm uppercase hover:border-b">Home</li>
						</Link>
						<Link href="/">
							<li className="ml-10 text-sm uppercase hover:border-b">
								About Me
							</li>
						</Link>
						<Link href="/">
							<li className="ml-10 text-sm uppercase hover:border-b">
								Projects
							</li>
						</Link>
						<Link href="/">
							<li className="ml-10 text-sm uppercase hover:border-b">
								Contact
							</li>
						</Link>
					</ul>

					<div className="md:hidden">
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>

			<div className="fixed left-0 top-0 w-full h-screen bg-black/70">
				<div className="fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[35%] h-screen bg-white p-10 ease-in duration-500">
					<div>
						<div className="flex w-full items-center justify-between">
							<Image
								src="/../public/assets/logo.png"
								width="85"
								height="35"
								alt=""
							/>
							<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
								<AiOutlineClose />
							</div>
						</div>

						<div className="border-b border-gray-300 my-4 ">
							<p className="w-[85%] md:w-[90%] py-4">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
								impedit quis dicta harum. Delectus, magnam nam pariatur sed
								officiis quibusdam maxime exercitationem cumque rerum ad
								voluptatum quam impedit libero? Nisi!
							</p>
						</div>

						<div className="py-4 flex-col">
							<ul className="uppercase">
								<Link href="/">
									<li className="py-4 text-sm">Home</li>
								</Link>
								<Link href="/">
									<li className="py-4 text-sm">About Me</li>
								</Link>
								<Link href="/">
									<li className="py-4 text-sm">Projects</li>
								</Link>
								<Link href="/">
									<li className="py-4 text-sm">Contact</li>
								</Link>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
