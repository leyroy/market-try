import React, { useEffect, useState } from "react";

import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
} from "firebase/auth";
import { app } from "../fier_base/fierBase.config";

import avatar from "../Assets/img/avatar.png";

import { motion } from "framer-motion";
import { HiShoppingCart } from "react-icons/hi";
import { IoMdAdd } from "react-icons/io";
import { useStore } from "../context/store";
import { actionTypes } from "../context/reducers";
import { Link } from "react-router-dom";

function Header() {
	const [{ user, catContainer, catItems }, dispatch] =
		useStore();
	const [isMenu, setImenu] = useState(false);

	const auth = getAuth(app);
	const provider = new GoogleAuthProvider();

	const login = async () => {
		const {
			user: { providerData },
		} = await signInWithPopup(auth, provider);
		dispatch({
			type: actionTypes.ADD_USER,
			user: providerData[0],
		});
		localStorage.setItem(
			"user",
			JSON.stringify(providerData[0])
		);
	};

	const logOut = () => {
		dispatch({
			type: actionTypes.ADD_USER,
			user: null,
		});
		localStorage.clear("user");
		setImenu(false);
	};

	const toggleCatContaine = () => {
		dispatch({
			type: actionTypes.SET_CATCONTAINER,
			catContainer: !catContainer,
		});
	};

	return (
		<header className="fixed top-0 left-0 right-0 z-50 w-full px-7 py-2 md:px-16 drop-shadow-md bg-slate-100 ">
			<div className="items-center justify-between hidden md:flex">
				<div className="text-lg font-bold text-slate-500">
					Ley Roy
				</div>
				<div>
					<ul className="flex items-center justify-center gap-9">
						<Link
							to={"/"}
							className="text-[#4E0B50] font-bold cursor-pointer hover:text-[#130b13] transition-all ease-in-out duration-100 text-base "
						>
							Home
						</Link>
						<li className="text-[#4E0B50] font-bold cursor-pointer hover:text-[#130b13] transition-all ease-in-out duration-100 text-base ">
							Shop
						</li>
						<li className="text-[#4E0B50] font-bold cursor-pointer hover:text-[#130b13] transition-all ease-in-out duration-100 text-base ">
							About
						</li>
						<li className="text-[#4E0B50] font-bold cursor-pointer hover:text-[#130b13] transition-all ease-in-out duration-100 text-base ">
							Contact Us
						</li>
					</ul>
				</div>
				<div className="flex items-center justify-between gap-6 items8enter">
					{!user ? (
						<button
							className="px-4 py-1 font-bold capitalize transition-all duration-300 ease-in-out bg-gray-100 rounded-full drop-shadow-sm hover:bg-gray-200"
							onClick={login}
						>
							sing in
						</button>
					) : (
						<div className="relative">
							<HiShoppingCart
								onClick={toggleCatContaine}
								className="text-2xl font-[140px] cursor-pointer"
							/>
							{catItems && catItems?.length > 0 && (
								<div className=" -top-3 -right-3 absolute p-2 font-normal h-5 w-5 rounded-full bg-red-700  flex items-center justify-center  ">
									<p className="text-white text-sm font-semibold">
										{catItems?.length}
									</p>
								</div>
							)}
						</div>
					)}

					<motion.div
						whileTap={{ scale: 0.75 }}
						onClick={() => setImenu(!isMenu)}
						className=" relative "
					>
						<img
							className="object-contain w-8 h-8 rounded-full drop-shadow-md"
							src={!user ? avatar : user.photoURL}
							alt=""
						/>
						{isMenu && (
							<div className="right-4 hidden md:flex flex-col w-56 bg-slate-100 backdrop-blur-xl px-5 py-3 rounded-sm absolute z-50">
								{user && (
									<Link
										onClick={() => setImenu(!isMenu)}
										to={"/createContainer"}
										className="px-4 group cursor-pointer py-2 bg-slate-100 shadow-orange-300 shadow-lgtext-md font-bold flex w-auto justify-between items-center "
									>
										<p className="text-base font-semibold row-auto">
											Add Products
										</p>
										<IoMdAdd className="ml-auto" />
									</Link>
								)}
								<buttom
									onClick={() => {
										logOut();
										setImenu(!isMenu);
									}}
									className="w-full px-4 py-2 mb-1 text-center mt-5 font-bold capitalize transition-all duration-300 ease-in-out bg-gray-100 rounded-full drop-shadow-sm hover:bg-gray-200"
								>
									Log out
								</buttom>
							</div>
						)}
					</motion.div>
				</div>
			</div>

			{/* mobile devices */}

			<div className="flex items-center justify-between  py-1 md:hidden">
				<div className="text-lg font-bold text-slate-500">
					Ley Roy
				</div>
				{!user ? (
					<button
						className="px-4 py-1 font-bold capitalize transition-all duration-300 ease-in-out bg-gray-100 rounded-full drop-shadow-sm hover:bg-gray-200"
						onClick={login}
					>
						sing in
					</button>
				) : (
					<div className="relative">
						<HiShoppingCart
							onClick={toggleCatContaine}
							className="text-2xl font-[140px] cursor-pointer"
						/>
						{catItems && catItems?.length > 0 && (
							<div className=" -top-3 -right-3 absolute p-2 font-normal h-5 w-5 rounded-full bg-red-700  flex items-center justify-center  ">
								<p className="text-white text-sm font-semibold">
									{catItems?.length}
								</p>
							</div>
						)}
					</div>
				)}
				<div className=" relative z-30 flex items-center justify-between gap-6 items8enter">
					<div
						onClick={() => setImenu(!isMenu)}
						className="relative"
					>
						<motion.img
							whileTap={{ scale: 0.7 }}
							className="object-contain w-8 h-8 rounded-full drop-shadow-md cursor-pointer"
							src={!user ? avatar : user.photoURL}
							alt=""
						/>
					</div>
					{isMenu && (
						<div className="absolute right-3 top-4 w-56 animate-pulse bg-slate-100 drop-shadow-sm bg-opacity-70 rounded-md ">
							<div className=" items-start justify-center flex flex-col max-h-[40vh]  ">
								{user && (
									<Link
										to={"/createContainer"}
										className="px-4 group cursor-pointer text-md font-bold flex w-auto justify-center items-center "
									>
										Add Products
										<IoMdAdd className="ml-4" />
									</Link>
								)}
								<ul className="flex flex-col items-start justify-center gap-5 px-4 py-1 ">
									<Link
										to="/"
										className="text-[#4E0B50] font-bold cursor-pointer hover:text-[#130b13] transition-all ease-in-out duration-100 text-base "
									>
										Home
									</Link>
									<li className="text-[#4E0B50] font-bold cursor-pointer hover:text-[#130b13] transition-all ease-in-out duration-100 text-base ">
										Shop
									</li>
									<li className="text-[#4E0B50] font-bold cursor-pointer hover:text-[#130b13] transition-all ease-in-out duration-100 text-base ">
										About
									</li>
									<li className="text-[#4E0B50] font-bold cursor-pointer hover:text-[#130b13] transition-all ease-in-out duration-100 text-base ">
										Contact Us
									</li>
								</ul>

								<button
									onClick={logOut}
									className="w-full px-4 py-1 mb-1 mt-5 font-bold capitalize transition-all duration-300 ease-in-out bg-gray-100 rounded-full drop-shadow-sm hover:bg-gray-200"
								>
									Log out
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
		</header>
	);
}

export default Header;
