import React from "react";
import Image from "next/image";

const About = (props, ref) => {
	return (
		<div
			ref={ref}
			id="about"
			className="w-full md:h-full p-3 flex items-center xl:px-28"
		>
			<div className="max-w-[1240px] mx-auto pt-20 md:grid grid-cols-3 gap-8">
				<div className="col-span-2">
					<h2 className="uppercase text-4xl mb-4 tracking-widest text-indigo-600">
						About Me
					</h2>
					<p>
						Hailing from Flushing, New York, I graduated from Columbia
						University in December 2024 with a Bachelor of Arts in Computer
						Science.
					</p>
					<br />
					<p>
						What started out as a reluctant acknowledgment that taking a
						computer science class in high school might be useful for my future
						turned out to be a defining career choice at the intersection of
						computer science, education, and healthcare. Most of my early
						exposure to CS came through bioinformatics research, culminating in
						three first-author publications. Beginning in my sophomore year of
						high school, I worked as a research assistant in Professor Kuan-lin
						Huang&apos;s Computational Omics Lab at the{" "}
						<b>Icahn School of Medicine at Mount Sinai</b>, spearheading machine
						learning studies on COVID-19 and Alzheimer&apos;s disease. During my
						freshman year of college, I conducted an epidemiological research
						study with Dr. Daniel Freedberg as a DSI Scholar at the{" "}
						<b>Columbia University Data Science Institute</b>, identifying which
						antibiotic classes confer the greatest risk of community-acquired{" "}
						<em>C. difficile</em> infection.
					</p>
					<br />
					<p>
						Soon, I also began taking an interest in software development.
						During the summer of my freshman year, I joined{" "}
						<b>Memorial Sloan Kettering Cancer Center</b> as a software
						engineering intern, working on a CLI tool for MSK developers and a
						clinician-facing Connected Care Dashboard application. During the
						summer of my sophomore year, I worked as a software engineering
						intern at <b>Microsoft + Nuance</b>, building iOS apps that make use
						of the ambient note-taking capabilities of Dragon Ambient eXperience
						(DAX) technology to reduce clinical burden. During the summer of my
						junior year, I worked as a software engineering intern at <b>ICF</b>
						, working on data pipelines for America’s HIV Epidemic Analysis
						Dashboard (AHEAD) and a RAG chatbot. After graduating, I will be
						joining <b>IXL Learning</b> as a full-time software engineer. Moving
						forward, I hope to continue using software to bridge gaps in
						healthcare, education, and beyond.
					</p>
					<br />
					<p>
						In the past, I have also dabbled quite a bit in teaching, working as
						a teacher, tutor, and swimming instructor throughout high school. At
						Columbia, I was a teaching assistant for Professor Ansaf
						Salleb-Aouissi&apos;s Artificial Intelligence class, a member of the
						education committee for Application Development Initiative, and the
						editor-in-chief of the Columbia Junior Science Journal. In my free
						time, I enjoy playing basketball and volleyball, solving chess
						puzzles, trying new food, watching anime and YouTube, and compiling
						sad pop playlists on Spotify. Anyways, that&apos;s just a little bit
						about me. Enjoy exploring the rest of my website!
					</p>
					<br />
				</div>

				<div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
					<a href="https://www.ixl.com/" target="_blank" rel="noreferrer">
						<Image
							src="/assets/ixl_logo.png"
							alt="IXL Learning Logo"
							width="350"
							height="175"
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default React.forwardRef(About);
