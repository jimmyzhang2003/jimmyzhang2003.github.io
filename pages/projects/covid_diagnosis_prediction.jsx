import React from "react";
import Image from "next/image";
import Link from "next/link";
import covidImg from "../../public/assets/covid_project.webp";
import { GiShirtButton } from "react-icons/gi";

const covid_diagnosis_prediction = () => {
	return (
		<div className="w-full">
			<div className="w-screen top-[80px] h-[40vh] relative">
				<div className="absolute top-0 left-0 w-full h-[40vh] bg-black/80 z-10" />
				<Image
					className="absolute z-1"
					layout="fill"
					objectFit="cover"
					src={covidImg}
					alt="Decision tree"
				/>

				<div className="absolute top-[55%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2 text-white">
					<h2 className="py-2">
						Prediction of Individual COVID-19 Diagnosis using Baseline
						Demographics and Lab Data
					</h2>
					<h3>Research (Machine Learning)</h3>
				</div>
			</div>

			<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-10 gap-8 pt-28">
				<div className="col-span-10 md:col-span-7">
					<h2>Abstract</h2>
					<p className="mt-4">
						The global surge in COVID-19 cases underscores the need for fast,
						scalable, and reliable testing. Current COVID-19 diagnostic tests
						are limited by turnaround time, limited availability, or occasional
						false findings. Here, we developed a machine learning-based
						framework for predicting individual COVID-19 positive diagnosis
						relying only on readily-available baseline data, including patient
						demographics, comorbidities, and common lab values. Leveraging a
						cohort of 31,739 adults within an academic health system, we trained
						and tested multiple types of machine learning models, achieving an
						area under the curve of 0.75. Feature importance analyses
						highlighted serum calcium levels, temperature, age, lymphocyte
						count, smoking, hemoglobin levels, aspartate aminotransferase
						levels, and oxygen saturation as key predictors. Additionally, we
						developed a single decision tree model that provided an operable
						method for stratifying sub-populations. Overall, this study provides
						a proof-of-concept that COVID-19 diagnosis prediction models can be
						developed using only baseline data. The resulting prediction can
						complement existing tests to enhance screening and pandemic
						containment workflows.
					</p>
					<a
						href="https://github.com/Huang-lab/covid19-diagnosis-prediction"
						target="_blank"
						rel="noreferrer"
					>
						<button className="px-6 py-2 mt-4 mr-8 text-xl hover:scale-105 ease-in duration-300">
							Code
						</button>
					</a>
					<a
						href="https://www.nature.com/articles/s41598-021-93126-7"
						target="_blank"
						rel="noreferrer"
					>
						<button className="px-6 py-2 mt-4 mr-8 text-xl hover:scale-105 ease-in duration-300">
							Publication
						</button>
					</a>
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
								<GiShirtButton className="pr-2 w-8" />
								Python
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

export default covid_diagnosis_prediction;
