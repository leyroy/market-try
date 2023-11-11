import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header className="w-screen px-10 py-3 bg-sky-950">
			<div className="flex items-center justify-between">
				<div>
					<div className="text-4xl font-extrabold text-green-600 ">
						Ley Roy
					</div>
				</div>
				<div>
					<ul className="flex items-center justify-center gap-8">
						<Link
							to="/"
							className="px-4 py-1 text-xl text-white cursor-pointer "
						>
							Home
						</Link>
						<Link
							to="/todolist"
							className="px-4 py-2 text-2xl text-white cursor-pointer "
						>
							Go to Todo Page
						</Link>
						<Link
							to="/employee"
							className="px-4 py-2 text-2xl text-white cursor-pointer "
						>
							Visit Employee
						</Link>
					</ul>
				</div>
				<div>
					<div className="w-10 h-10 text-center bg-white rounded-full ">
						<head className=" border-emerald-400 text-yellow-950">
							Ley
						</head>
					</div>
				</div>
			</div>
		</header>
	);
}
