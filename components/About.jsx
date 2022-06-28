import React from "react";

const About = (props, ref) => {
	return (
		<div
			ref={ref}
			id="about"
			className="w-full md:h-screen p-2 flex items-center py-8"
		>
			<div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
				<div className="col-span-2">
					<h2>About Me</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
						similique ad recusandae incidunt repellat quidem excepturi sapiente
						autem ullam nesciunt quam, voluptatibus odit temporibus. Harum, id.
						Quibusdam fuga reprehenderit iure.
					</p>
				</div>
			</div>
		</div>
	);
};

export default React.forwardRef(About);
