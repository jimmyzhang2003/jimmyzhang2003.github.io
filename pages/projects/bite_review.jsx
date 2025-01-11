import React from "react";
import Image from "next/image";
import Link from "next/link";
import biteReviewImg from "../../public/assets/bite_review_project.png";
import { GiShirtButton } from "react-icons/gi";

const bite_review = () => {
	return (
		<div className="w-full">
			<div className="w-screen top-[80px] h-[40vh] relative">
				<div className="absolute top-0 left-0 w-full h-[40vh] bg-black/80 z-10" />
				<Image
					className="absolute z-1"
					layout="fill"
					objectFit="cover"
					src={biteReviewImg}
					alt="Review page for JJ's chicken wings"
				/>

				<div className="absolute top-[55%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2 text-white">
					<h2 className="py-2">BiteReview</h2>
					<h3>Software</h3>
				</div>
			</div>

			<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-10 gap-8 pt-28">
				<div className="col-span-10 md:col-span-7">
					<h2>Project Overview</h2>
					<p className="mt-4">
						BiteReview is a microservice-based, cloud-deployed web application
						that allows Columbia University students to review the dishes served
						at Columbia&apos;s dining halls. Users are able to search for
						existing dishes, which contain a description of the dish, an average
						rating, and individual reviews and images left by other users. Users
						are also able to create reviews for an existing dish and/or create a
						new dish, with the option of leaving a rating, writing comments, and
						attaching an image of the dish.
					</p>
					<p className="mt-4">
						Our three atomic microservices ((1) dish management service, (2)
						review and rating service, and (3) image management service) and one
						composite service are all RESTful APIs built in Flask (Python),
						connected to their own MySQL database inside of an Amazon RDS
						instance, and deployed to Amazon EC2, AWS Elastic Beanstalk, or
						Google Compute Engine. We built our frontend application in React.js
						and Next.js, with Mantine as our component library, and we deployed
						the frontend to an Amazon S3 bucket. We used Google OAuth 2.0 for
						authentication, Amazon API Gateway for request routing, GitHub
						Actions for CI/CD, and Docker for containerization. This project was
						my group&apos;s final project for Professor Donald Ferguson&apos;s
						Cloud Computing (COMS W4153) course at Columbia University.
					</p>

					{/* Links */}
					<div className="my-7">
						<a
							href="https://github.com/bh2779/4153-ui"
							target="_blank"
							rel="noreferrer"
						>
							<button className="px-6 py-2 mt-4 mr-8 text-xl hover:scale-105 ease-in duration-300">
								Code (Frontend)
							</button>
						</a>
						<a
							href="https://github.com/jimmyzhang2003/4153-dish-management-service"
							target="_blank"
							rel="noreferrer"
						>
							<button className="px-6 py-2 mt-4 mr-8 text-xl hover:scale-105 ease-in duration-300">
								Code (Dish Management Service)
							</button>
						</a>
						<a
							href="https://github.com/bh2779/4153-review-rating-service"
							target="_blank"
							rel="noreferrer"
						>
							<button className="px-6 py-2 mt-4 mr-8 text-xl hover:scale-105 ease-in duration-300">
								Code (Review and Rating Service)
							</button>
						</a>

						<a
							href="https://github.com/AaryaA31/4153-Image-Management-Service"
							target="_blank"
							rel="noreferrer"
						>
							<button className="px-6 py-2 mt-4 text-xl hover:scale-105 ease-in duration-300">
								Code (Image Management Service)
							</button>
						</a>
					</div>
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
								Javascript
							</p>
							<p className="py-2 flex items-center">
								<GiShirtButton className="pr-2 w-8" />
								Flask
							</p>
							<p className="py-2 flex items-center">
								<GiShirtButton className="pr-2 w-8" />
								React.js
							</p>
							<p className="py-2 flex items-center">
								<GiShirtButton className="pr-2 w-8" />
								Next.js
							</p>

							<p className="py-2 flex items-center">
								<GiShirtButton className="pr-2 w-8" />
								Mantine
							</p>
							<p className="py-2 flex items-center">
								<GiShirtButton className="pr-2 w-8" />
								MySQL
							</p>
							<p className="py-2 flex items-center">
								<GiShirtButton className="pr-2 w-8" />
								Docker
							</p>
							<p className="py-2 flex items-center">
								<GiShirtButton className="pr-2 w-8" />
								Amazon Web Services (AWS)
							</p>
							<p className="py-2 flex items-center">
								<GiShirtButton className="pr-2 w-8" />
								GitHub Actions
							</p>
							<p className="py-2 flex items-center">
								<GiShirtButton className="pr-2 w-8" />
								Google OAuth 2.0
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

export default bite_review;
