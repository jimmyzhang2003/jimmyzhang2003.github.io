import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ title, subtitle, backgroundImg, projectUrl }) => {
	return (
		<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dfe]">
			<Image
				src={backgroundImg}
				alt="Visualization of single-tree XGBoost model"
				className="rounded-xl group-hover:opacity-10"
			></Image>

			<div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
				<h3 className="text-2xl text-white tracking-wider text-center font-bold">
					{title}
				</h3>
				<p className="pb-4 pt-2 text-md text-white text-center">{subtitle}</p>
				<Link href={projectUrl}>
					<p className="text-lg py-2 text-gray-600 text-center bg-white rounded-lg font-bold cursor-pointer hover:scale-105 ease-in duration-300">
						More Info
					</p>
				</Link>
			</div>
		</div>
	);
};

export default ProjectItem;
