import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function Search() {
	return (
		<div className=" relative w-full md:w-[70%] mx-auto border-solid border-2 border-sky-500 rounded-full ">
			<input
				className="w-full px-4 py-2 rounded-full outline-none"
				type="text"
				placeholder="search for your products here..."
			/>
			<AiOutlineSearch className="absolute text-3xl font-medium right-1 top-1" />
		</div>
	);
}
