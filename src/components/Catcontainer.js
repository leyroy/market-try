import React, { useState, useEffect } from "react";

import {
	IoArrowBackOutline,
	IoRefreshOutline,
} from "react-icons/io5";

import emptyCart from "../Assets/img/emptyCart.svg";
import { useStore } from "../context/store";
import { actionTypes } from "../context/reducers";
import { motion } from "framer-motion";
import CartIterm from "./CartIterm";

export default function Catcontainer() {
	const [{ catItems, catContainer }, dispatch] = useStore();

	const toggleCatContaine = () => {
		dispatch({
			type: actionTypes.SET_CATCONTAINER,
			catContainer: !catContainer,
		});
	};

	return (
		catContainer && (
			<motion.div
				initial={{ opacity: 0, x: 200 }}
				animate={{ opacity: 1, x: 0 }}
				exit={{ opacity: 0, x: 200 }}
				className="md:w-96 w-full h-screen fixed right-0 top-0 z-[102] bg-white"
			>
				<div className="w-full flex items-center justify-between px-3 font-semibold text-base">
					<div
						onClick={toggleCatContaine}
						className="cursor-pointer font-semibold text-2xl "
					>
						<IoArrowBackOutline />
					</div>
					<p>Cat</p>
					<p className=" cursor-pointer w-auto flex items-center justify-center gap-1 text-lg font-semibold">
						Clear
						<IoRefreshOutline className="font-bold text-xl " />
					</p>
				</div>
				{catItems && catItems?.length > 0 ? (
					<div className="w-full h-full flex flex-col py-2 items-center justify-between">
						<div className="h-[92%] flex text-white flex-col items-center justify-between rounded-t-3xl w-full bg-black">
							<div className="w-full flex flex-col gap-3  py-3 px-3 max-h-60 overflow-scroll scrollbar-none">
								{catItems.map((catItem) => (
									<CartIterm catItem={catItem} />
								))}
							</div>
							<div className="h-3/5 w-full rounded-t-3xl flex flex-col items-center justify-between bg-gray-400 bg-opacity-20 ">
								<div className="flex w-full flex-col items-center py-4 px-5 ">
									<div className="w-full flex items-center justify-between mb-7">
										<p>Sub-total</p>
										<div>$ 45</div>
									</div>

									<div className="w-full flex items-center justify-between ">
										<p>Delivery</p>
										<div>$ 45</div>
									</div>
								</div>
								<div className="w-full border-b-gray-700 bor border-2"></div>
								<div className="flex w-full flex-col py-4 px-5  justify-between mb-5">
									<div className="w-full flex items-center justify-between mb-7">
										<p>Total</p>
										<div>$ 45</div>
									</div>
									<button className="mt-3 rounded-2xl bg-gradient-to-tr from-orange-300 to-orange-500 p-2 cursor-pointer ">
										Place Oder Now{" "}
									</button>
								</div>
							</div>
						</div>
					</div>
				) : (
					<div
						className="w-[90%] h-full m-auto   flex flex-col
					items-center justify-center"
					>
						<img
							src={emptyCart}
							alt=""
							className="mb-5"
						/>
						<div className="text-md font-semibold mt-4">
							Cat is empty
						</div>
					</div>
				)}
			</motion.div>
		)
	);
}
