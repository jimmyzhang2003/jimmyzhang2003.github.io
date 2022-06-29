import React from "react";

const Contact = (props, ref) => {
	return (
		<div ref={ref} id="contact" className="w-full lg:h-screen">
			<div className="max-w-[1240px] m-auto px-2 py-16 w-full">
				<p className="uppercase text-4xl mb-4 tracking-widest text-indigo-600">
					Contact
				</p>
				<div className="grid lg:grid-cols-5 gap-8"></div>
			</div>
		</div>
	);
};

export default React.forwardRef(Contact);

//className="mt-24 md:mt-0">
