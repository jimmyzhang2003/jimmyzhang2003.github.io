import React from "react";
import Image from "next/image";
import Link from "next/link";

const Projects = (props, ref) => {
	return (
		<div ref={ref} id="projects" className="w-full p-3 xl:px-28">
			<div className="max-w-[1240px] mx-auto py-16">
				<h2 className="uppercase text-4xl mb-4 tracking-widest text-indigo-600">
					Projects
				</h2>

				<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 z-[-1]">
					<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dfe]">
						<Image
							src="/assets/covid_project.webp"
							alt="Visualization of single-tree XGBoost model"
							width="510px"
							height="420px"
							className="rounded-xl group-hover:opacity-10"
						></Image>

						<div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
							<h3 className="text-2xl text-white tracking-wider text-center">
								COVID-19 Diagnosis Prediction
							</h3>
							<p className="pb-4 pt-2 text-sm text-white text-center">
								(Research)
							</p>
							<Link href="/">
								<p className="pt-2 text-xl text-white text-center">More Info</p>
							</Link>
						</div>
					</div>

					<p>In progress</p>
					<p>In progress</p>
					<p>In progress</p>
					<p>In progress</p>
					<p>In progress</p>
				</div>
			</div>
		</div>
	);
};

export default React.forwardRef(Projects);
