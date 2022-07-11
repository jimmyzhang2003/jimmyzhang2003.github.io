import React from "react";
import Image from "next/image";
import Link from "next/link";
import cdiffImg from "../../public/assets/cdiff_project.svg";
import { GiShirtButton } from "react-icons/gi";

const antibiotic_risk_cdiff = () => {
	return (
		<div className="w-full">
			<div className="w-screen top-[80px] h-[40vh] relative">
				<div className="absolute top-0 left-0 w-full h-[40vh] bg-black/80 z-10" />
				<Image
					className="absolute z-1"
					layout="fill"
					objectFit="cover"
					src={cdiffImg}
					alt="Odds ratios plot"
				/>

				<div className="absolute top-[55%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2 text-white">
					<h2 className="py-2 text-2xl md:text-4xl">
						Antibiotic Class-Specific Risk for Community-Acquired{" "}
						<em>Clostridioides difficile</em> Infection in the United States
						from 2008 to 2020
					</h2>
					<h3>Research (Statistics)</h3>
				</div>
			</div>

			<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-10 gap-8 pt-28">
				<div className="col-span-10 md:col-span-7">
					<h2>Abstract</h2>
					<h3 className="text-2xl font-bold mt-4">Background</h3>
					<p className="mt-4">
						Antibiotics are the crucial risk factor for community-acquired
						<em> Clostridioides difficile</em> infection (CA-CDI). However, the
						relative risks associated with specific antibiotics have varied
						across studies, and the absolute risks have not been clearly
						established.
					</p>
					<h3 className="text-2xl font-bold mt-4">Methods</h3>
					<p className="mt-4">
						This was a retrospective cohort study. Adults were included if they
						received an outpatient antibiotic prescription within the IBM®
						MarketScan® Research Databases between 2008 and 2020. The primary
						exposure was an outpatient antibiotic prescription, and receipt of
						doxycycline was used as the reference comparison. The primary
						outcome was CA-CDI, defined as the presence of an ICD diagnosis code
						for CDI within 90 days of receiving an outpatient antibiotic
						prescription, and subsequent treatment for CDI.
					</p>
					<h3 className="text-2xl font-bold mt-4">Results</h3>
					<p className="mt-4">
						A total of 20 million continuously enrolled unique patients
						receiving outpatient antibiotic prescriptions were selected,
						including 9,668 (0.05%) who developed CA-CDI. Relative to
						doxycycline, the antibiotic classes conferring the highest risks for
						CA-CDI were clindamycin (adjusted odds ratio [aOR] 3.70, 95%
						confidence interval [CI]: 3.31-4.14), cefdinir (aOR 2.88, 95% CI:
						2.47-3.34), cefuroxime (aOR 2.31, 95% CI: 1.96-2.72), and
						fluoroquinolones (aOR 2.02, 95% CI: 1.82-2.24). However, among older
						patients with comorbidities and recent hospitalization, the risk
						associated with nitrofurantoin exceeded that of clindamycin, with a
						number needed to harm of 223 for nitrofurantoin relative to
						doxycycline. While clindamycin use declined from 2008 to 2020,
						nitrofurantoin use increased by 40%.
					</p>
					<h3 className="text-2xl font-bold mt-4">Conclusions</h3>
					<p className="mt-4">
						Clindamycin was associated with the greatest relative risk for
						CA-CDI overall, but nitrofurantoin had significant associated harm
						within a high-risk sub-population. These results may guide
						antibiotic selection and future stewardship efforts.
					</p>

					<a
						href="https://github.com/jimmyzhang2003/antibiotics-cdi-risk"
						target="_blank"
						rel="noreferrer"
					>
						<button className="px-6 py-2 mt-4 mr-8 text-xl hover:scale-105 ease-in duration-300">
							Code
						</button>
					</a>
					{/*
					<a
						href="https://www.nature.com/articles/s41598-021-93126-7"
						target="_blank"
						rel="noreferrer"
					>
						<button className="px-6 py-2 mt-4 mr-8 text-xl hover:scale-105 ease-in duration-300">
							Publication
						</button>
                    </a>*/}
				</div>

				<div className="col-span-10 md:col-span-3 shadow-xl shadow-gray-400 rounded-xl p-4">
					<div className="p-2">
						<p className="text-center text-xl font-bold">Tech Stack</p>

						<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 auto-rows-min">
							<p className="py-2 flex items-center">
								<GiShirtButton className="pr-2 w-8" />
								SAS
							</p>
							<p className="py-2 flex items-center">
								<GiShirtButton className="pr-2 w-8" />
								SAS Studio
							</p>
							<p className="py-2 flex items-center">
								<GiShirtButton className="pr-2 w-8" />R
							</p>
							<p className="py-2 flex items-center">
								<GiShirtButton className="pr-2 w-8" />
								ggplot2
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

export default antibiotic_risk_cdiff;
