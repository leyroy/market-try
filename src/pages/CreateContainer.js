import React, { useState } from "react";
import Loading from "../components/Loading";
import { categories } from "../utils/staticHomeData";
import { MdFoodBank } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { IoMdCloudUpload } from "react-icons/io";
import { storage } from "../fier_base/fierBase.config";
import {
	deleteObject,
	getDownloadURL,
	ref,
	uploadBytesResumable,
} from "firebase/storage";
import {
	getData,
	saveFunction,
} from "../utils/firebaseFuction";
import { useStore } from "../context/store";
import { actionTypes } from "../context/reducers";

export default function CreateContainer() {
	const [fields, setFields] = useState(false);
	const [loadingState, setLoadingState] = useState(false);
	const [title, settitle] = useState("");
	const [dec, setrDec] = useState("");
	const [category, setCategory] = useState("");
	const [errorMassge, setErrorMassege] =
		useState("this is good ");
	const [price, setPrice] = useState();
	const [imageUrl, setImageUrl] = useState();
	const [alertStatus, setAlertStatus] = useState(false);

	const uploadImage = (e) => {
		setLoadingState(true);
		const image = e.target.files[0];
		console.log(image);
		const imageRef = ref(storage, `Images/${image.name}`);
		const uploade = uploadBytesResumable(imageRef, image);
		uploade.on(
			"on state change",
			(snapshot) => {
				const uploadProgress =
					(snapshot.bytesTransferred / snapshot.totalBytes) *
					100;
			},
			(error) => {
				console.log(error);
				setFields(true);
				setErrorMassege("Error while uploading, Try again 😬");
				setAlertStatus(true);
				setTimeout(() => {
					setFields(false);
					setLoadingState(false);
				}, 4000);
			},
			() => {
				getDownloadURL(uploade.snapshot.ref).then((url) => {
					setImageUrl(url);
					setLoadingState(false);
					setFields(true);
					setErrorMassege("Emage uploaded successfully 😇");
					setAlertStatus(true);

					setTimeout(() => {
						setFields(false);
					}, 4000);
				});
			}
		);
	};

	const clear = () => {
		setImageUrl("");
		setPrice("");
		setrDec("");
		setCategory("");
		settitle("");
	};

	const [{ foodItems }, dispatch] = useStore();

	const getFoodItems = async () => {
		await getData().then((data) => {
			dispatch({
				type: actionTypes.SET_FOOD_ITEMS,
				foodItems: data,
			});
		});
	};
	const save = () => {
		try {
			if (!title || !dec || !category || !price || !imageUrl) {
				setFields(true);
				setErrorMassege("All filedes must be filed 😬");
				setAlertStatus(false);
				setTimeout(() => {
					setFields(false);
					setLoadingState(false);
				}, 4000);
			} else {
				const data = {
					id: `${Date.now()}`,
					title,
					category,
					quantity: 1,
					description: dec,
					imageUrl,
					price,
				};
				saveFunction(data);
				setLoadingState(true);
				clear();
				setErrorMassege("Emage uploaded successfully 😇");
				setAlertStatus(true);
				setFields(true);
				setTimeout(() => {
					setLoadingState(false);
					setFields(false);
				}, 4000);
			}
			getFoodItems();
		} catch (error) {
			console.log(error);
			setFields(true);
			setErrorMassege("Error while uploading, Try again 😬");
			setAlertStatus(true);
			setTimeout(() => {
				setFields(false);
				setLoadingState(false);
			}, 4000);
		}
	};

	const deletet = () => {
		setLoadingState(true);
		const storageRef = ref(storage, imageUrl);
		deleteObject(storageRef).then(() => {
			setImageUrl(null);
			setLoadingState(false);
			setErrorMassege("image deleted successfully 👍");
			setFields(true);
			setTimeout(() => {
				setFields(false);
			}, 4000);
		});
	};
	return (
		<div className="w-full min-h-screen flex items-center justify-center bg-gray-200 ">
			<div className="w-[90%] md:w-[75%] border border-gray-300 rounded-lg flex flex-col px-4 gap-2 items-center justify-center py-2 ">
				{fields && (
					<p
						className={`w-full rounded-md text-center font-semibold py-1 ${
							!alertStatus
								? "bg-red-700 text-white "
								: "bg-green-700"
						}`}
					>
						{errorMassge}
					</p>
				)}
				<div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
					<input
						className="w-full h-full bg-transparent font-semibold outline-none border-none text-gray-650"
						placeholder="enter your title here..."
						type="text"
						value={title}
						onChange={(e) => settitle(e.target.value)}
					/>
				</div>
				<div className="w-full ">
					<select
						onChange={(e) => setCategory(e.target.value)}
						value={category}
						className="bg-white rounded-md w-full border-none outline-none p-2"
					>
						<option
							value="othes"
							className="bg-white w-full "
						>
							Select Category
						</option>
						{categories.map((category) => (
							<option
								key={category.id}
								className="text-base outline-none outline bg-white"
								value={category.urlParamName}
							>
								{category.urlParamName}
							</option>
						))}
					</select>
				</div>
				<div className="group w-full flex items-center justify-center  md:h-80 h-64 border-2 border-dotted border-gray-300 cursor-pointer">
					{loadingState ? (
						<Loading />
					) : (
						<>
							{!imageUrl ? (
								<>
									<label className="w-full flex items-center justify-center flex-col">
										<IoMdCloudUpload className="w-10 h-10 text-base text-gray-500 hover:text-gray-700" />
										<p className="text-gray-500 hover:text-gray-700 transition-all duration-100 ease-in-out">
											Uploade image
										</p>
										<input
											type="file"
											name="uploadimage"
											accept="image/*"
											onChange={uploadImage}
											className="w-0 h-0"
										/>
									</label>
								</>
							) : (
								<>
									<div className="w-full relative h-full object-cover flex items-center justify-center">
										<img
											className=" max-h-[200px] max-w-[200]"
											src={imageUrl}
											alt=""
										/>
										<div className="absolute font-extrabold text-white w-8 h-8  bottom-7 cursor-pointer rounded-full bg-red-600 right-12 p-1 flex items-center justify-center">
											<RiDeleteBin6Fill
												className=""
												onClick={deletet}
											/>
										</div>
									</div>
								</>
							)}
						</>
					)}
				</div>
				<div className="w-full flex gap-2 items-center flex-col md:flex-row">
					<div className=" border-b border-gray-300 w-full flex items-center p-1 gap-2 ">
						<MdFoodBank />
						<input
							className="w-full h-full bg-transparent font-semibold outline-none border-none text-gray-650"
							placeholder="Enter your categoriy here..."
							type="text"
							value={dec}
							onChange={(e) => setrDec(e.target.value)}
						/>
					</div>
					<div className="border-b border-gray-300 w-full flex items-center p-1 gap-2 ">
						<MdFoodBank />
						<input
							className="w-full h-full bg-transparent font-semibold outline-none border-none text-gray-650"
							placeholder="Enter your price here..."
							type="text"
							value={price}
							onChange={(e) => setPrice(e.target.value)}
						/>
					</div>
				</div>
				<button
					className="w-full h-full md:w-28 px-4  font-semibold text-base p-2 md:ml-auto bg-green-700 rounded-lg"
					onClick={save}
				>
					Save
				</button>
			</div>
		</div>
	);
}
