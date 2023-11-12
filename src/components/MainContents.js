import React, { useState } from "react";
import {
	IoCaretBackOutline,
	IoCaretForwardSharp,
} from "react-icons/io5";
import { IoColorFilterSharp } from "react-icons/io5";
import RowContainer from "./RowContainer";
import { useStore } from "../context/store";
import { categories } from "../utils/staticHomeData";

export default function MainContents() {
	const [{ foodItems }] = useStore();
	const [scrollValue, setScrllValue] = useState(0);
	const [active, setActive] = useState("chickin");
	const stylse =
		" text-lg font-extrabold tracking-wider relative before:absolute before:bg-yellow-600 before:-bottom-2 before:left-0 before:h-1 before:w-3/4 before:content";

	return (
		<div className="w-full my-5">
			<div className="w-full py-1 mt-4">
				<div className="w-full hidden my-2 md:flex items-center justify-between">
					<div className={stylse}>Our Hot Dishes</div>
					<div className="flex items-center justify-center gap-2">
						<div
							onClick={() => setScrllValue(-200)}
							className="w-8 cursor-pointer h-8 bg-orange-600 hover:bg-orange-700 flex items-center justify-center rounded-lg transition-all ease-in-out duration-100"
						>
							<IoCaretBackOutline className=" text-lg text-white" />
						</div>
						<div
							onClick={() => setScrllValue(200)}
							className="w-8 cursor-pointer h-8 bg-orange-600 hover:bg-orange-700 flex items-center justify-center rounded-lg transition-all ease-in-out duration-100"
						>
							<IoCaretForwardSharp className=" text-lg text-white" />
						</div>
					</div>
				</div>
				<RowContainer
					scrollValue={scrollValue}
					flage={true}
					data={foodItems && foodItems}
				/>
			</div>
			<div className="w-full my-5 flex cursor-pointer items-center scrollbar-none justify-start md:justify-center gap-4 overflow-x-scroll">
				{categories &&
					categories.map((cat) => (
						<div
							onClick={() => setActive(cat.urlParamName)}
							key={cat.id}
							className={`group items-center justify-between hover:bg-red-700 min-w-[99px] ${
								cat.urlParamName === active
									? "bg-red-700"
									: "bg-slate-200"
							} py-3 p-1 h-28 rounded-md flex flex-col drop-shadow-lg hover:shadow-lg`}
						>
							<IoColorFilterSharp className="w-9 h-9 rounded-full p-1 bg-white" />
							<p className=" text-md font-semibold text-slate-950 group-hover:text-white">
								{cat.urlParamName}
							</p>
						</div>
					))}
			</div>
			<div className="w-full ">
				<RowContainer
					flage={false}
					data={
						foodItems &&
						foodItems?.filter(
							(foodItem) => foodItem.category === active
						)
					}
				/>
			</div>
		</div>
	);
}
