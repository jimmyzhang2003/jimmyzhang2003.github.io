import React from "react";
import Image from "next/image";
import Link from "next/link";
import noteKeeperImg from "../../public/assets/note_keeper_project.png";
import { GiShirtButton } from "react-icons/gi";

const note_keeper = () => {
	return (
		<div className="w-full">
			<div className="w-screen top-[80px] h-[40vh] relative">
				<div className="absolute top-0 left-0 w-full h-[40vh] bg-black/80 z-10" />
				<Image
					className="absolute z-1"
					layout="fill"
					objectFit="cover"
					src={noteKeeperImg}
					alt="Note Keeper home page"
				/>

				<div className="absolute top-[55%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2 text-white">
					<h2 className="py-2">Note Keeper</h2>
					<h3>Software</h3>
				</div>
			</div>

			<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-10 gap-8 pt-28">
				<div className="col-span-10 md:col-span-7">
					<h2>Project Overview</h2>
					<p className="mt-4">
						Note Keeper is a web application that allows users to create, save,
						edit, and delete notes in a similar manner to Google Keep. Notes are
						retained between refreshes, but since authentication has not been
						implemented, all users share a single set of notes. This app uses
						the MERN stack (MongoDB, Express, React, Node).
					</p>

					<p className="mt-4">
						Currently, both the client and server are deployed using Vercel. To
						note, Vercel automatically converts the Express routes in the
						backend into serverless functions. This project was my final project
						for Professor Shoaib Ahamed&apos;s Full-Stack Web Development (COMS
						W3102) course at Columbia University.
					</p>

					{/* Links */}
					<div className="my-7">
						<a
							href="https://github.com/jimmyzhang2003/coms-3102-final-project"
							target="_blank"
							rel="noreferrer"
						>
							<button className="px-6 py-2 mt-4 mr-8 text-xl hover:scale-105 ease-in duration-300">
								Code
							</button>
						</a>
						<a
							href="https://coms-3102-final-project-client.vercel.app/"
							target="_blank"
							rel="noreferrer"
						>
							<button className="px-6 py-2 mt-4 mr-8 text-xl hover:scale-105 ease-in duration-300">
								Website
							</button>
						</a>
					</div>
				</div>

				<div className="col-span-10 md:col-span-3 shadow-xl shadow-gray-400 rounded-xl p-4">
					<div className="p-2">
						<p className="text-center text-xl font-bold">Tech Stack</p>

						<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 auto-rows-min">
							<p className="py-2 flex items-center">
								<GiShirtButton className="pr-2 w-8" />
								Javascript
							</p>
							<p className="py-2 flex items-center">
								<GiShirtButton className="pr-2 w-8" />
								Node.js
							</p>
							<p className="py-2 flex items-center">
								<GiShirtButton className="pr-2 w-8" />
								React.js
							</p>
							<p className="py-2 flex items-center">
								<GiShirtButton className="pr-2 w-8" />
								Express.js
							</p>
							<p className="py-2 flex items-center">
								<GiShirtButton className="pr-2 w-8" />
								MongoDB
							</p>

							<p className="py-2 flex items-center">
								<GiShirtButton className="pr-2 w-8" />
								Vercel
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

export default note_keeper;
