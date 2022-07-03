import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectItem from "./ProjectItem";
import covidImg from "../public/assets/covid_project.webp";
import cdiffImg from "../public/assets/cdiff_project.svg";
import despamImg from "../public/assets/email_despamifier.png";
import httpServImg from "../public/assets/http_server_project.png";
import portfolioImg from "../public/assets/portfolio_project.png";

const Projects = (props, ref) => {
	return (
		<div ref={ref} id="projects" className="w-full p-3 xl:px-28">
			<div className="max-w-[1240px] mx-auto py-16">
				<h2 className="uppercase text-4xl mb-4 tracking-widest text-indigo-600">
					Projects
				</h2>

				<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
					<ProjectItem
						title="COVID-19 Diagnosis Prediction"
						subtitle="Research (ML)"
						backgroundImg={covidImg}
						projectUrl="/covid-diagnosis-prediction"
					/>

					<ProjectItem
						title="Antibiotic Class-Specific Risk for CDI"
						subtitle="Research (Statistics)"
						backgroundImg={cdiffImg}
						projectUrl="/antibiotic-risk-cdiff"
					/>

					<ProjectItem
						title="Dementia Patient Mortality Prediction"
						subtitle="Research (ML)"
						backgroundImg={cdiffImg}
						projectUrl="/dementia-mortality-prediction"
					/>

					<ProjectItem
						title="MSK CLI"
						subtitle="Software"
						backgroundImg={cdiffImg}
						projectUrl="/msk-cli"
					/>

					<ProjectItem
						title="College Email De-Spamifier"
						subtitle="Software"
						backgroundImg={despamImg}
						projectUrl="/email-despamifier"
					/>

					<ProjectItem
						title="HTTP Web Server from Scratch"
						subtitle="Software"
						backgroundImg={httpServImg}
						projectUrl="/http-server"
					/>

					<ProjectItem
						title="Personal Portfolio"
						subtitle="Website"
						backgroundImg={portfolioImg}
						projectUrl="/portfolio"
					/>
				</div>
			</div>
		</div>
	);
};

export default React.forwardRef(Projects);
