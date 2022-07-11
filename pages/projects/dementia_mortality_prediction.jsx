import React from "react";
import Image from "next/image";
import Link from "next/link";
import naccImg from "../../public/assets/nacc_project.png";
import { GiShirtButton } from "react-icons/gi";

const dementia_mortality_prediction = () => {
	return (
		<div className="w-full">
			<div className="w-screen top-[80px] h-[40vh] relative">
				<div className="absolute top-0 left-0 w-full h-[40vh] bg-black/80 z-10" />
				<Image
					className="absolute z-1"
					layout="fill"
					objectFit="cover"
					src={naccImg}
					alt="Clustermap and SHAP beeswarm plots"
				/>

				<div className="absolute top-[55%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2 text-white">
					<h2 className="py-2">
						Predictive Models and Features of Patient Mortality across Dementia
						Types
					</h2>
					<h3>Research (ML)</h3>
				</div>
			</div>

			<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-10 gap-8 pt-28">
				<div className="col-span-10 md:col-span-7">
					<h2>Project Overview</h2>
					<p className="mt-4">
						Alzheimer&apos;s disease, in addition to other neurodegenerative
						diseases that give rise to dementia, is the seventh leading cause of
						death and currently affects over 50 million people worldwide. The
						healthcare burden of dementia is immense, exacerbated by the lack of
						curative drugs.
					</p>
					<p className="mt-4">
						In this research study, we leveraged the National Alzheimer&apos;s
						Coordinating Center (NACC) database, the largest resource of its
						kind in the United States to (1) build machine learning models to
						predict mortality within dementia patients at various survival
						thresholds and (2) identify key clinical features predictive of
						patient mortality across various dementia types. Our overarching aim
						was to help flag dementia patients with a faster rate of decline and
						likely mortality, delineate the differences between dementia types,
						and, more broadly, provide insights into specific dementia patient
						populations to inform disease screening and clinical practice.
					</p>
					{/*
					<a href="/" target="_blank" rel="noreferrer">
						<button className="px-6 py-2 mt-4 mr-8 text-xl hover:scale-105 ease-in duration-300">
							Code
						</button>
					</a>
					<a href="/" target="_blank" rel="noreferrer">
						<button className="px-6 py-2 mt-4 mr-8 text-xl hover:scale-105 ease-in duration-300">
							Publication
						</button>
                    </a>
                    */}
					<a
						href="https://labs.icahn.mssm.edu/kuanhuanglab/"
						target="_blank"
						rel="noreferrer"
					>
						<button className="px-6 py-2 mt-4 text-xl hover:scale-105 ease-in duration-300">
							Lab Website
						</button>
					</a>
				</div>

				<div className="col-span-10 md:col-span-3 shadow-xl shadow-gray-400 rounded-xl p-4">
					<div className="p-2">
						<p className="text-center text-xl font-bold">Tech Stack</p>

						<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 auto-rows-min">
							<p className="py-2 flex items-center">
								<GiShirtButton className="pr-2 w-8" />R
							</p>
							<p className="py-2 flex items-center">
								<GiShirtButton className="pr-2 w-8" />
								Python
							</p>
							<p className="py-2 flex items-center">
								<GiShirtButton className="pr-2 w-8" />
								tidyverse
							</p>
							<p className="py-2 flex items-center">
								<GiShirtButton className="pr-2 w-8" />
								XGBoost
							</p>
							<p className="py-2 flex items-center">
								<GiShirtButton className="pr-2 w-8" />
								scikit-learn
							</p>

							<p className="py-2 flex items-center">
								<GiShirtButton className="pr-2 w-8" />
								numpy
							</p>
							<p className="py-2 flex items-center">
								<GiShirtButton className="pr-2 w-8" />
								pandas
							</p>
							<p className="py-2 flex items-center">
								<GiShirtButton className="pr-2 w-8" />
								matplotlib
							</p>
							<p className="py-2 flex items-center">
								<GiShirtButton className="pr-2 w-8" />
								seaborn
							</p>
							<p className="py-2 flex items-center">
								<GiShirtButton className="pr-2 w-8" />
								shap
							</p>
							<p className="py-2 flex items-center">
								<GiShirtButton className="pr-2 w-8" />
								Google Colaboratory
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

export default dementia_mortality_prediction;
