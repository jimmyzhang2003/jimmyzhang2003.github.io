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
							<div className="my-5 hover:scale-105 ease-in duration-300">
								<Image
									src="/assets/paper_airplane.jpg"
									alt="Photo of paper airplane by Daria Nepriakhina on Unsplash"
									width="450px"
									height="300px"
									className="rounded-xl z-[-1]"
								></Image>
							</div>
							<div>
								<h2>Jimmy Zhang</h2>
								<br />
								<p>
									I am currently a full-time student, but I can <em>almost </em>
									always find time for research and software projects.
								</p>
								<br />
								<p>
									If you have any questions or just want to get in touch with
									me, feel free to shoot me an email or connect with me.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default React.forwardRef(Contact);
