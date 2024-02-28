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
						Machine Learning Models Identify Predictive Features of Patient
						Mortality across Dementia Types
					</h2>
					<h3>Research (ML)</h3>
				</div>
			</div>

			<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-10 gap-8 pt-28">
				<div className="col-span-10 md:col-span-7">
					<h2>Abstract</h2>
					<p className="mt-4 mb-2 font-black">Background</p>
					<p>
						Dementia care is challenging due to the divergent trajectories in
						disease progression and outcomes. Predictive models are needed to
						flag patients at risk of near-term mortality and identify factors
						contributing to mortality risk across different dementia types.
					</p>
					<p className="mt-4 mb-2 font-black">Methods</p>
					<p>
						Here, we developed machine-learning models predicting dementia
						patient mortality at four different survival thresholds using a
						dataset of 45,275 unique participants and 163,782 visit records from
						the U.S. National Alzheimer’s Coordinating Center (NACC). We built
						multi-factorial XGBoost models using a small set of mortality
						predictors and conducted stratified analyses with
						dementiatype-specific models.
					</p>
					<p className="mt-4 mb-2 font-black">Results</p>
					<p>
						Our models achieved an area under the receiver operating
						characteristic curve (AUC-ROC) of over 0.82 utilizing nine
						parsimonious features for all 1-, 3-, 5-, and 10-year thresholds.
						The trained models mainly consisted of dementia-related predictors
						such as specific neuropsychological tests and were minimally
						affected by other age-related causes of death, e.g., stroke and
						cardiovascular conditions. Notably, stratified analyses revealed
						shared and distinct predictors of mortality across eight dementia
						types. Unsupervised clustering of mortality predictors grouped
						vascular dementia with depression and Lewy body dementia with
						frontotemporal lobar dementia.
					</p>
					<p className="mt-4 mb-2 font-black">Conclusions</p>
					<p>
						This study demonstrates the feasibility of flagging dementia
						patients at risk of mortality for personalized clinical management.
						Parsimonious machine-learning models can be used to predict dementia
						patient mortality with a limited set of clinical features, and
						dementiatype-specific models can be applied to heterogeneous
						dementia patient populations.
					</p>

					<a
						href="https://github.com/Huang-lab/dementia-survival-prediction"
						target="_blank"
						rel="noreferrer"
					>
						<button className="px-6 py-2 mt-4 mr-8 text-xl hover:scale-105 ease-in duration-300">
							Code
						</button>
					</a>
					<a
						href="https://www.nature.com/articles/s43856-024-00437-7"
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
