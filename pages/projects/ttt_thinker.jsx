import React from "react";
import Image from "next/image";
import Link from "next/link";
import tttThinkerImg from "../../public/assets/ttt_thinker_project.png";
import { GiShirtButton } from "react-icons/gi";

const ttt_thinker = () => {
	return (
		<div className="w-full">
			<div className="w-screen top-[80px] h-[40vh] relative">
				<div className="absolute top-0 left-0 w-full h-[40vh] bg-black/80 z-10" />
				<Image
					className="absolute z-1"
					layout="fill"
					objectFit="cover"
					src={tttThinkerImg}
					alt="Model prediction examples"
				/>

				<div className="absolute top-[55%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2 text-white">
					<h2 className="py-2">5T: fine-Tuned Tic-Tac-Toe Thinker</h2>
					<h3>Machine Learning</h3>
				</div>
			</div>

			<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-10 gap-8 pt-28">
				<div className="col-span-10 md:col-span-7">
					<h2>Project Overview</h2>
					<p className="mt-4">
						Computer vision has often taken a backseat role in games like
						tic-tac-toe, in which it is used primarily for object detection,
						whereas a separate minimax algorithm performs the actual evaluation
						of a given game state. In this study, we implemented three different
						deep learning models, including a convolutional neural network (CNN)
						built from scratch and two state-of-the-art pre-trained models
						(ResNet and EfficientNet) that we transferred to our problem using
						network surgery. We generated all of our data from scratch, first
						generating all 5,478 valid tic-tac-toe states and then converting
						each of those states into a 28x28 image of a tic-tac-toe board,
						augmented with random shifts based on a distribution and heatmap, as
						well as random sampling from a set of pre-drawn X’s, O’s, and lines.
						We also generated all of the labels using a custom-made scoring
						algorithm. Our goal was to solve the following three-class
						classification problem: to predict whether X is winning, O is
						winning, or the position is tied in any given tic-tac-toe state.
						After training each of our models for 100 epochs, using a validation
						set to prevent overfitting, our CNN model from scratch achieved an
						accuracy of 93.87% on the test set; ResNet achieved an accuracy of
						96.94%; and EfficientNet achieved an accuracy of 81.97%. The strong
						predictive performance of our models gives us some assurance that
						deep learning models can, indeed, be used to evaluate tic-tac-toe
						boards, even in the absence of a minimax algorithm. Future research
						should consider experimenting with larger board sizes, introducing
						even more random noise, and inducing a turn mechanic (with which our
						models struggled most). This project was my and my partner&apos;s
						final project for Professor Peter Belhumeur&apos;s Deep Learning for
						Computer Vision (COMS W4995) course at Columbia University.
					</p>

					{/* Links */}
					<div className="my-7">
						<Link href="/assets/ttt_thinker_report.pdf">
							<button className="px-6 py-2 mt-4 mr-8 text-xl hover:scale-105 ease-in duration-300">
								Report
							</button>
						</Link>
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
								PyTorch
							</p>
							<p className="py-2 flex items-center">
								<GiShirtButton className="pr-2 w-8" />
								numpy
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

export default ttt_thinker;
