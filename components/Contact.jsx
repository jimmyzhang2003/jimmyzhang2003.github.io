import React from "react";
import Image from "next/image";

const Contact = (props, ref) => {
	return (
		<div ref={ref} id="contact" className="w-full lg:h-screen p-3 xl:px-28">
			<div className="max-w-[1240px] m-auto py-16 w-full">
				<h2 className="uppercase text-4xl mb-4 tracking-widest text-indigo-600">
					Contact
				</h2>
				<div className="grid lg:grid-cols-5 gap-8">
					<div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
						<div className="lg:p-4 h-full">
							<div className="my-5 hover:scale-[1.03] ease-in duration-300">
								<Image
									src="/assets/paper_airplane.jpg"
									alt="Photo of paper airplane by Daria Nepriakhina on Unsplash"
									width="450"
									height="300"
									className="rounded-xl z-[-1]"
								></Image>
							</div>
							<div>
								<h2>Jimmy Zhang</h2>
								<br />
								<p>
									If you have any questions or just want to get in touch with
									me, feel free to contact me via this form or connect with me
									on LinkedIn.
								</p>
							</div>
						</div>
					</div>

					<div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
						<div className="p-4">
							<form action="https://formspree.io/f/meqnwdyr" method="POST">
								<div className="grid md:grid-cols-2 gap-4 w-full py-2">
									<div className="flex flex-col">
										<label className="uppercase text-lg py-2">Name</label>
										<input
											name="name"
											className="border-2 rounded-lg p-3 flex border-gray-300"
											type="text"
											required
										/>
									</div>

									<div className="flex flex-col">
										<label className="uppercase text-lg py-2">
											Phone Number
										</label>
										<input
											name="phone"
											className="border-2 rounded-lg p-3 flex border-gray-300"
											type="text"
										/>
									</div>
								</div>

								<div className="flex flex-col py-2">
									<label className="uppercase text-lg py-2">Email</label>
									<input
										name="email"
										className="border-2 rounded-lg p-3 flex border-gray-300"
										type="email"
										required
									/>
								</div>

								<div className="flex flex-col py-2">
									<label className="uppercase text-lg py-2">Message</label>
									<textarea
										name="message"
										className="border-2 rounded-lg p-3 border-gray-300"
										rows="10"
										required
									></textarea>
								</div>

								<button className="w-full p-4 text-2xl mt-5 hover:scale-105 ease-in duration-300">
									Send It!
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default React.forwardRef(Contact);
