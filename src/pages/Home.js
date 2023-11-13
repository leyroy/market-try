import React from "react";
import Search from "../components/Search";

import delivery from "../Assets/img/delivery.png";
import { staticData } from "../utils/staticHomeData";
import MainContents from "../components/MainContents";
import Catcontainer from "../components/Catcontainer";
import Header from "../components/Header";

export default function Home() {
	// const uploadImage = (e) => {
	// 	const image = e.target.files[0];
	// 	console.log(image);
	// 	const imageRef = ref(
	// 		storage,
	// 		`Images/${Date.now()}-${image.name}`
	// 	);
	// 	const uplaodImages = () => {
	// 		uploadBytesResumable(imageRef, image);
	// 	};

	// 	uplaodImages();
	// };
	return (
		<div className=" px-7 md:px-12 pt-16 ">
			<Header />
			<Search />
			<Catcontainer />
			<div className="my-2 ">
				<h1 className="text-2xl font-extrabold relative before:h-1 before:w-20 before:bg-gradient-to-tr from-yellow-300 to-yellow-700 before:rounded-full -bottom-3 before:-bottom-1 left-0 before:absolute">
					New Arival{" "}
					<span className="text-sm font-normal ">
						from top brandas
					</span>
				</h1>
				<div className="flex mt-4 flex-col items-center justify-between gap-3 md:flex-row ">
					<div className=" items-center justify-center md:max-w-[600px] w-full ms:w-[400px] ">
						<p className="text-4xl md:text-5xl text-gray-900 capitalize font-bold tracking-[0.2rem]">
							the fastest food{" "}
							<span className="">in the city</span>
						</p>
						<div className=" bg-gradient-to-tr to-orange-50 my-3 from-orange-200 flex justify-between rounded-md p-1 items-center">
							<p className="text-base cursor-pointer font-medium">
								Order Now
							</p>
							<img
								className="w-10 h-10 rounded-full shadow-lg"
								src={delivery}
								alt="image"
							/>
						</div>
						<p className="tracking-wide font-medium">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Quia culpa tempore veritatis tempora fugit
							debitis repellat, cum excepturi perferendis possimus.
							Incidunt magnam ea cum totam aut laboriosam quibusdam
							aliquam error?
						</p>
						<button className=" text-center mt-3 bg-gradient-to-tr text-base font-semibold to-orange-100 my-3 from-orange-300 rounded-2xl p-2 px-8  w-full ">
							Join Premium now!
						</button>
					</div>
					<div className="m-0 md:-mt-10 w-full flex items-center justify-center">
						<div className="flex items-center justify-between sm:px-0 px-4 py-3 flex-wrap gap-8 ">
							{staticData.map((data) => (
								<div
									key={data.id}
									className="h-44 m-auto w-[13rem]  sm:w-[9rem] lg:w-44 rounded-md bg-slate-200 bg-opacity-70 p-1 items-center flex flex-col justify-center "
								>
									<div className="-mt-8 w-full h-20 object-cover">
										<img
											className=" h-24 w-full"
											src={data.image}
											alt=""
										/>
									</div>
									<div className="mt-8 justify-center items-center flex text-center w-full ">
										{data.dec}
									</div>
									<div className="font-bold text-2xl mt-auto mb-2">
										<span className="text-red-600 font-normal text-lg ">
											$
										</span>{" "}
										{data.pri}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<MainContents />
			</div>
		</div>
	);
}
