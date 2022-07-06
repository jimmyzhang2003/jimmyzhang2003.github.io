import React from "react";
import Image from "next/image";
import covidImg from "../../public/assets/covid_project.webp";

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
					alt="COVID-19 Diagnosis Prediction Decision Tree"
				/>
			</div>
			<div className="absolute top-[40%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2 text-white">
				<h2 className="py-2">
					Prediction of Individual COVID-19 Diagnosis using Baseline
					Demographics and Lab Data
				</h2>
				<h3>Research (Machine Learning)</h3>
			</div>
		</div>
	);
};

export default covid_diagnosis_prediction;
