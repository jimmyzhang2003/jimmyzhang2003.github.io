import React from "react";

const Contact = (props, ref) => {
	return (
		<div ref={ref} id="contact" className="w-full lg:h-screen p-3 xl:px-28">
			<div className="max-w-[1240px] m-auto py-16 w-full">
				<h2 className="uppercase text-4xl mb-4 tracking-widest text-indigo-600">
					Contact
				</h2>
				<div className="grid lg:grid-cols-5 gap-8"></div>
			</div>
		</div>
	);
};

export default React.forwardRef(Contact);
