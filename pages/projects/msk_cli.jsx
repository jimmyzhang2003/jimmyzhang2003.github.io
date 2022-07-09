import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GiShirtButton } from "react-icons/gi";

const msk_cli = () => {
	return (
		<div className="w-full">
			<div className="w-screen top-[80px] h-[40vh] relative">
				<div className="absolute top-0 left-0 w-full h-[40vh] bg-black/80 z-10" />
				<Image
					className="absolute z-1"
					layout="fill"
					objectFit="cover"
					src={despamImg}
					alt="Email de-spamifier demo"
				/>

				<div className="absolute top-[55%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2 text-white">
					<h2 className="py-2">College Email De-Spamifier</h2>
					<h3>Software</h3>
				</div>
			</div>

			<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-10 gap-8 pt-28">
				<div className="col-span-10 md:col-span-7">
					<h2>Project Overview</h2>
					<p className="mt-4">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo quam,
						deserunt nostrum vitae nesciunt ipsum dolorem blanditiis debitis
						libero rerum voluptas quidem praesentium voluptatibus tempora,
						veniam ea! Maiores, cupiditate repudiandae?
					</p>
					<a
						href="https://github.com/Inigo42/college-email-despamifier-backend"
						target="_blank"
						rel="noreferrer"
					>
						<button className="px-6 py-2 mt-4 mr-8 text-xl hover:scale-105 ease-in duration-300">
							Code
						</button>
					</a>
					<a
						href="https://medium.com/ai-camp/interns-or-entrepreneurs-how-ai-camp-redefined-the-tech-internship-4988c366625e"
						target="_blank"
						rel="noreferrer"
					>
						<button className="px-6 py-2 mt-4 mr-8 text-xl hover:scale-105 ease-in duration-300">
							Medium Article
						</button>
					</a>
					<a href="https://www.ai-camp.org/" target="_blank" rel="noreferrer">
						<button className="px-6 py-2 mt-4 text-xl hover:scale-105 ease-in duration-300">
							AI Camp Website
						</button>
					</a>
				</div>

				<div className="col-span-10 md:col-span-3 shadow-xl shadow-gray-400 rounded-xl p-4">
					<div className="p-2">
						<p className="text-center text-xl font-bold">Tech Stack</p>

						<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 auto-rows-min">
							<p className="py-2 flex items-center">
								<GiShirtButton className="pr-2 w-8" />
								Python
							</p>
							<p className="py-2 flex items-center">
								<GiShirtButton className="pr-2 w-8" />
								Django
							</p>
							<p className="py-2 flex items-center">
								<GiShirtButton className="pr-2 w-8" />
								Beautiful Soup
							</p>

							<p className="py-2 flex items-center">
								<GiShirtButton className="pr-2 w-8" />
								Google Apps Script
							</p>
							<p className="py-2 flex items-center">
								<GiShirtButton className="pr-2 w-8" />
								SQLite
							</p>
						</div>
					</div>
				</div>

				<Link href="/#projects">
					<div className="w-24 my-8 text-xl rounded-xl shadow-lg shadow-gray-500 p-3 text-center cursor-pointer hover:scale-105 ease-in duration-300">
						<p>Back</p>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default msk_cli;
