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
						Hailing from Flushing, New York, I am a junior at Columbia
						University in the City of New York studying computer science. For
						the last four years, I have been working as a research assistant in
						Professor Kuan-lin Huang&apos;s Computational Omics Lab at the Icahn
						School of Medicine at Mount Sinai, spearheading machine learning
						studies on COVID-19 and Alzheimer&apos;s disease. During my freshman
						year, I had the opportunity to conduct an epidemiological research
						study with Dr. Daniel Freedberg as a DSI Scholar, identifying which
						antibiotic classes confer the greatest risk of community-acquired{" "}
						<em>C. difficile</em> infection. In the past, I have also dabbled
						quite a bit in teaching, working as a teacher, tutor, and swimming
						instructor throughout high school. In many ways, I would say that
						teaching is one of my hidden passions, and honestly, I would rather
						have some meaningful human-to-human interaction than alone time with
						my MacBook any day of the week.
					</p>
					<br />
					<p>
						What started out as a reluctant acknowledgment that taking a
						computer science class might be useful for my future turned out to
						be a defining career choice at the intersection of computer science,
						data science, and healthcare. Since my early days of playing around
						with R and Python on independent research projects, I have since
						come to love computer technology and its vast applications in
						medicine and healthcare. During the summer of my freshman year, I
						joined Memorial Sloan Kettering Cancer Center as a software
						engineering intern, working on a number of exciting software
						projects, including a CLI tool for MSK developers and a
						clinican-facing Connected Care Dashboard application, for which I
						worked primarily on the frontend, unit tests, and automation tests.
						This summer, I am working as a software engineering intern at
						Microsoft + Nuance, building iOS apps that make use of the ambient
						note-taking capabilities of Dragon Ambient eXperience (DAX)
						technology, with the intent of reducing clincal burden. Moving
						forward, I hope to continue using software to bridge gaps in
						healthcare and bring people together.
					</p>
					<br />
					<p>
						In my free time, I enjoy playing basketball and volleyball, solving
						chess puzzles, and compiling the greatest sad pop playlists you will
						ever find on Spotify. Anyways, that&apos;s just a little bit about
						me. I hope you enjoy exploring the rest of my website!
					</p>
					<br />
				</div>

				<div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
					<Image
						src="/assets/microsoft+nuance_logo.jpeg"
						alt="Microsoft+Nuance Logo"
						width="400px"
						height="200px"
					/>
				</div>
			</div>
		</div>
	);
};

export default React.forwardRef(About);
