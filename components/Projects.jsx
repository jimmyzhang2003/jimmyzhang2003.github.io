import React from "react";
import ProjectItem from "./ProjectItem";
import biteReviewImg from "../public/assets/bite_review_project.png";
import covidImg from "../public/assets/covid_project.png";
import cdiffImg from "../public/assets/cdiff_project.svg";
import naccImg from "../public/assets/nacc_project.png";
import cliImg from "../public/assets/cli_project.png";
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
						title="BiteReview"
						subtitle="Software"
						backgroundImg={biteReviewImg}
						projectUrl="/projects/bite_review"
					/>

					<ProjectItem
						title="Dementia Patient Mortality Prediction"
						subtitle="Research (ML)"
						backgroundImg={naccImg}
						projectUrl="/projects/dementia_mortality_prediction"
					/>

					<ProjectItem
						title="COVID-19 Diagnosis Prediction"
						subtitle="Research (ML)"
						backgroundImg={covidImg}
						projectUrl="/projects/covid_diagnosis_prediction"
					/>

					<ProjectItem
						title="Antibiotic-Specific Risk for CA-CDI"
						subtitle="Research (Statistics/Epidemiology)"
						backgroundImg={cdiffImg}
						projectUrl="/projects/antibiotic_risk_cdiff"
					/>

					<ProjectItem
						title="MSK CLI"
						subtitle="Software"
						backgroundImg={cliImg}
						projectUrl="/projects/msk_cli"
					/>

					<ProjectItem
						title="College Email De-Spamifier"
						subtitle="Software"
						backgroundImg={despamImg}
						projectUrl="/projects/email_despamifier"
					/>

					<ProjectItem
						title="HTTP Web Server from Scratch"
						subtitle="Software"
						backgroundImg={httpServImg}
						projectUrl="/projects/http_server"
					/>

					<ProjectItem
						title="Personal Portfolio"
						subtitle="Website"
						backgroundImg={portfolioImg}
						projectUrl="/projects/portfolio"
					/>
				</div>
			</div>
		</div>
	);
};

export default React.forwardRef(Projects);
