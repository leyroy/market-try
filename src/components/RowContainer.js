import React, { useEffect, useRef, useState } from "react";
import { MdShoppingBasket } from "react-icons/md";
import NotFound from "../Assets/img/NotFound.svg";
import { motion } from "framer-motion";
import { actionTypes } from "../context/reducers";
import { useStore } from "../context/store";

export default function RowContainer({
	flage,
	data,
	scrollValue,
}) {
	const [{ catItems }, dispatch] = useStore();
	const [catItem, setCatItme] = useState([]);
	const addToCat = () => {
		dispatch({
			type: actionTypes.SET_CATITEMS,
			catItems: catItem,
		});
		localStorage.setItem("catItems", JSON.stringify(catItem));
	};

	useEffect(() => {
		addToCat();
	}, [catItem]);
	// console.log(data);

	useEffect(() => {
		containerRef.current.scrollLeft += scrollValue;
	}, [scrollValue]);
	const containerRef = useRef();
	return (
		<div className="w-full ">
			<div
				ref={containerRef}
				className={`flex items-center ${
					flage
						? "overflow-scroll scroll-smooth scrollbar-none"
						: "flex-wrap"
				} gap-3 justify-center `}
			>
				{data && data.length > 0 ? (
					data.map((item) => (
						<motion.div
							initial={{ scale: 0, x: 200 }}
							animate={{ scale: 1, x: 0 }}
							exit={{ scale: 0, x: 200 }}
							key={item.id}
							className=" min-w-[300px] h-[200px]  de:min-w-[340px] ms:w-[320px] p-2 rounded-lg bg-slate-300 hover:drop-shadow-lg backdrop-blur-lg flex justify-between flex-col"
						>
							<div className="w-full flex items-center justify-between rounded-md hover:scale-95 transition-all duration-[1s] ease-in-out">
								<img
									src={item.imageUrl}
									alt=""
									className="w-40 -mt-2 -ml-2 h-28 rounded-md drop-shadow-2xl"
								/>
								<div
									onClick={() => setCatItme([...catItems, item])}
									className="w-8 h-8 bg-red-600 text-white flex items-center justify-center rounded-full cursor-pointer"
								>
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
						</motion.div>
					))
				) : (
					<div className="flex flex-col justify-center items-center">
						<img
							src={NotFound}
							alt=""
							className="h-[250px] "
						/>
						<div className="text-xl font-semibold text-slate-950 mt-3">
							Items are currently not available
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
