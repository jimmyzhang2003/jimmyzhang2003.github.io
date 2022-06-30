import React from "react";

const Projects = (props, ref) => {
	return (
		<div ref={ref} id="projects" className="w-full p-3 xl:px-28">
			<div className="max-w-[1240px] mx-auto py-16">
				<h2 className="uppercase text-4xl mb-4 tracking-widest text-indigo-600">
					Projects
				</h2>

				<div>
					<p>In progress</p>
				</div>
			</div>
		</div>
	);
};

export default React.forwardRef(Projects);
