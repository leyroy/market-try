import React, { useEffect, useState } from "react";

import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
} from "firebase/auth";
import { app } from "../fier_base/fierBase.config";

import avatar from "../Assets/img/avatar.png";

import { HiShoppingCart } from "react-icons/hi";
import { IoMdAdd } from "react-icons/io";
import { useStore } from "../context/store";
import { actionTypes } from "../context/reducers";
import { Link, useLocation } from "react-router-dom";

function Header() {
	const [{ user }, dispatch] = useStore();

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

	return (
		<header className="fixed top-0 left-0 right-0 z-50 w-full px-7 py-2 md:px-16 drop-shadow-md bg-slate-100 ">
			<div className="items-center justify-between hidden md:flex">
				<div className="text-lg font-bold text-slate-500">
					Ley Roy
				</div>
				<div>
					<ul className="flex items-center justify-center gap-9">
						<li className="text-[#4E0B50] font-bold cursor-pointer hover:text-[#130b13] transition-all ease-in-out duration-100 text-base ">
							Home
						</li>
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
						<HiShoppingCart className="text-2xl font-[140px]" />
					)}

					<div>
						<img
							className="object-contain w-8 h-8 rounded-full drop-shadow-md"
							src={!user ? avatar : user.photoURL}
							alt=""
						/>
					</div>
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
					<HiShoppingCart className="text-2xl font-[140px]" />
				)}
				<div className=" relative z-30 flex items-center justify-between gap-6 items8enter">
					<div onClick={() => setImenu(!isMenu)}>
						<img
							className="object-contain w-8 h-8 rounded-full drop-shadow-md"
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
										<IoMdAdd />
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
