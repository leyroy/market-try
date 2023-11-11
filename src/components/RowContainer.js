import React, { useEffect, useRef } from "react";
import { MdShoppingBasket } from "react-icons/md";

export default function RowContainer({
	flege,
	data,
	scrollValue,
}) {
	console.log({ ...data });

	useEffect(() => {
		containerRef.current.scrollLeft += scrollValue;
		console.log(scrollValue);
	}, [scrollValue]);
	const containerRef = useRef();
	return (
		<div className="w-full ">
			<div
				ref={containerRef}
				className="flex items-center overflow-scroll gap-3 scroll-smooth"
			>
				{data &&
					data.map((item) => (
						<div
							key={item.id}
							className=" min-w-[300px] h-[200px]  de:min-w-[340px] ms:w-[320px] p-2 my-6 rounded-lg bg-slate-300 hover:drop-shadow-lg backdrop-blur-lg flex justify-between flex-col"
						>
							<div className="w-full flex items-center justify-between rounded-md hover:scale-95 transition-all duration-[1s] ease-in-out">
								<img
									src={item.imageUrl}
									alt=""
									className="w-40 -mt-2 -ml-2 h-28 rounded-md drop-shadow-2xl"
								/>
								<div className="w-8 h-8 bg-red-600 text-white flex items-center justify-center rounded-full cursor-pointer">
									<MdShoppingBasket />
								</div>
							</div>
							<div className="w-full flex-col flex  items-end justify-center">
								<p className="md:text-lg text-semibold text-gray-600 font-semibold">
									{item.title}
								</p>
								<p className="mt-1 text-sm text-gray-500">
									{" "}
									{item.category}Calories
								</p>

								<div className=" flex itemsc gap-8">
									<p className="text-lg text-gray-700 font-semibold">
										<span className="text-sm text-red-500">$</span>
										{item.price}
									</p>
								</div>
							</div>
						</div>
					))}
			</div>
		</div>
	);
}
