import React, { useState } from "react";
import {
	IoCaretBackOutline,
	IoCaretForwardSharp,
} from "react-icons/io5";
import RowContainer from "./RowContainer";
import { useStore } from "../context/store";

export default function MainContents() {
	const [{ foodItems }] = useStore();
	const [scrollValue, setScrllValue] = useState(0);
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
		</div>
	);
}
