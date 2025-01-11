import React from "react";
import Image from "next/image";
import Link from "next/link";
import phoneBookImg from "../../public/assets/phone_book_project.png";
import { GiShirtButton } from "react-icons/gi";

const phone_book = () => {
	return (
		<div className="w-full">
			<div className="w-screen top-[80px] h-[40vh] relative">
				<div className="absolute top-0 left-0 w-full h-[40vh] bg-black/80 z-10" />
				<Image
					className="absolute z-1"
					layout="fill"
					objectFit="cover"
					src={phoneBookImg}
					alt="Note Keeper home page"
				/>

				<div className="absolute top-[55%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2 text-white">
					<h2 className="py-2">Phone Book</h2>
					<h3>Software</h3>
				</div>
			</div>

			<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-10 gap-8 pt-28">
				<div className="col-span-10 md:col-span-7">
					<h2>Project Overview</h2>
					<p className="mt-4">
						Phone Book is an iOS application with 5 screens that allows users to
						create, edit, and delete contacts, as well as simulate chatting with
						and retrieving mocked grocery lists for individual contacts. I built
						the client/frontend application in SwiftUI and ran it on an iPhone
						simulator in Xcode. I built the server/backend application in Java
						using gRPC as the communication protocol. I used unary RPCs for the
						CRUD operations performed on contacts and streaming RPCs for the
						mocked chats and grocery lists.
					</p>

					{/* Links */}
					<div className="my-7">
						<a
							href="https://github.com/jimmyzhang2003/grpc-phone-book-app"
							target="_blank"
							rel="noreferrer"
						>
							<button className="px-6 py-2 mt-4 mr-8 text-xl hover:scale-105 ease-in duration-300">
								Code
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
								Swift
							</p>
							<p className="py-2 flex items-center">
								<GiShirtButton className="pr-2 w-8" />
								Java
							</p>
							<p className="py-2 flex items-center">
								<GiShirtButton className="pr-2 w-8" />
								SwiftUI
							</p>
							<p className="py-2 flex items-center">
								<GiShirtButton className="pr-2 w-8" />
								Gradle
							</p>
							<p className="py-2 flex items-center">
								<GiShirtButton className="pr-2 w-8" />
								gRPC
							</p>

							<p className="py-2 flex items-center">
								<GiShirtButton className="pr-2 w-8" />
								Xcode
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

export default phone_book;
