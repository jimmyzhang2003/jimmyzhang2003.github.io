import React from "react";
import Image from "next/image";
import Link from "next/link";
import cliImg from "../../public/assets/cli_project.png";
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
					src={cliImg}
					alt="The MSK CLI"
				/>

				<div className="absolute top-[55%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2 text-white">
					<h2 className="py-2">MSK CLI</h2>
					<h3>Software</h3>
				</div>
			</div>

			<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-10 gap-8 pt-28">
				<div className="col-span-10 md:col-span-7">
					<h2>Project Overview</h2>
					<p className="mt-4">
						I built a command-line interface using the Open CLI Framework
						(oclif), with a streamlined plugin system and a scalable hygen code
						generator, for use by developers across the entire Digital,
						Informatics & Technology Solutions (DigITs) division at Memorial
						Sloan Kettering Cancer Center.
					</p>
					<p className="mt-4">
						The ultimate goal of this CLI tool was to minimize overhead time
						spent by MSK developers in the browser and while writing redundant
						boilerplate code. The MSK CLI would help to provide easy access to
						MSK resources and code generation directly within the terminal, and
						the scalable plugin system would enable individual teams from all
						across DigITs to build their own plugins to enhance the MSK CLI and
						subsequently share their tooling with other teams.
					</p>
				</div>

				<div className="col-span-10 md:col-span-3 shadow-xl shadow-gray-400 rounded-xl p-4">
					<div className="p-2">
						<p className="text-center text-xl font-bold">Tech Stack</p>

						<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 auto-rows-min">
							<p className="py-2 flex items-center">
								<GiShirtButton className="pr-2 w-8" />
								Typescript
							</p>
							<p className="py-2 flex items-center">
								<GiShirtButton className="pr-2 w-8" />
								Node.js
							</p>
							<p className="py-2 flex items-center">
								<GiShirtButton className="pr-2 w-8" />
								oclif
							</p>
							<p className="py-2 flex items-center">
								<GiShirtButton className="pr-2 w-8" />
								hygen
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
