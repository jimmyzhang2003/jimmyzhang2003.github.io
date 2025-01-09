import React from "react";
import Image from "next/image";
import Link from "next/link";
import despamImg from "../../public/assets/email_despamifier.png";
import { GiShirtButton } from "react-icons/gi";

const email_despamifier = () => {
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
						For the average high school student, getting one or two college
						emails a week can be a rather insightful experience (perhaps even
						something to look forward to). How about one or two a day? Still not
						too bad, right? But for the overwhelming majority of high school
						students in the United States, most of whom have unknowingly signed
						away their email inbox freedom on their last PSAT, SAT, or AP exam
						by enrolling in College Board&apos;s Student Search Service, things
						start getting out of hand. What used to be one or two college emails
						a day or week has become one or two college emails an hour, most of
						which are advertisements that read no better than typical spam mail.
					</p>
					<p className="mt-4">
						And that&apos;s how the college email de-spamifier was born. As
						members of the inaugural cohort of AI Camp&apos;s Talent Incubator
						internship program, we set out to build a Gmail Add-On that
						automatically filters college emails based on a user&apos;s
						specified preferences (e.g., tuition, location, acceptance rate,
						etc.). That way, high school students (including ourselves at the
						time) would be able to readily extract emails from the colleges we
						actually cared about, rather than having to filter through hundreds
						of random college spam emails. Over the course of thirteen weeks, we
						built a working MVP of the college email de-spamifier using a
						Beautiful Soup web scraper, a Django backend, a Google Apps Script
						frontend, and a SQLite database. For more details about the process
						of building the college email de-spamifier and the AI Camp
						internship experience as a whole, please check out the Medium
						article I wrote at the conclusion of the internship.
					</p>

					{/* Links */}
					<div className="my-7">
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

export default email_despamifier;
