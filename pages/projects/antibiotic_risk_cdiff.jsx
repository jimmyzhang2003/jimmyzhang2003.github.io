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
						Antibiotic-Specific Risk for Community-Acquired{" "}
						<em>Clostridioides difficile</em> Infection in the United States
						from 2008 to 2020
					</h2>
					<h3>Research (Statistics/Epidemiology)</h3>
				</div>
			</div>

			<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-10 gap-8 pt-28">
				<div className="col-span-10 md:col-span-7">
					<h2>Abstract</h2>
					<p className="mt-4">
						Antibiotic exposure is a crucial risk factor for community-acquired
						<em> Clostridioides difficile</em> infection (CA-CDI). However, the
						relative risks associated with specific antibiotics have varied
						across studies, and the absolute risks have not been clearly
						established. This was a retrospective cohort study. Adults were
						included if they received an outpatient antibiotic prescription
						within the IBM® MarketScan® Databases between 2008 and 2020. The
						primary exposure was an outpatient antibiotic prescription, and
						receipt of doxycycline was used as the reference comparison. The
						primary outcome was CA-CDI, defined as the presence of an ICD
						diagnosis code for CDI within 90 days of receiving an outpatient
						antibiotic prescription, and subsequent treatment for CDI. There
						were 36,626,794 unique patients who received outpatient antibiotics
						including 11,607 (0.03%) who developed CA-CDI. Relative to
						doxycycline, the antibiotics conferring the highest risks for CA-CDI
						were clindamycin (adjusted odds ratio [aOR] 8.81, 95% confidence
						interval [CI]: 7.76-10.00), cefdinir (aOR 5.86, 95% CI: 5.03-6.83),
						cefuroxime (aOR 4.57, 95% CI: 3.87-5.39), and fluoroquinolones (aOR
						4.05, 95% CI: 3.58-4.59). Among older patients with CA-CDI risk
						factors, nitrofurantoin was also associated with CA-CDI (aOR 3.05,
						95% CI: 1.92-4.84), with fewer number needed to harm compared to
						fluoroquinolones. While clindamycin, cefuroxime, and fluoroquinolone
						use declined from 2008 to 2020, nitrofurantoin use increased by 40%.
						Clindamycin was associated with the greatest CA-CDI risk overall.
						Among older patients with elevated baseline risk for CA-CDI,
						multiple antibiotics, including nitrofurantoin, had strong
						associations with CA-CDI. These results may guide antibiotic
						selection and future stewardship efforts.
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
