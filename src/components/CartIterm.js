import React, { useEffect, useState } from "react";
import {
	AiOutlineMinus,
	AiOutlinePlus,
} from "react-icons/ai";
import { useStore } from "../context/store";
import { actionTypes } from "../context/reducers";

function CartIterm({ catItem }) {
	const [qyt, setQyt] = useState(1);
	const [items, setItem] = useState([]);

	const [{ catItems }, dispatch] = useStore();
	const disPatchUpdate = () => {
		dispatch({
			type: actionTypes.SET_CATITEMS,
			catItems: items,
		});
		localStorage.setItem("catItems", JSON.stringify(items));
	};

	useEffect(() => {
		setItem(catItems);
	}, [items]);
	const updatQut = (action, id) => {
		if (action === "add") {
			setQyt(qyt + 1);
			catItems.map((item) => {
				if (item.id === id) {
					item.quantity += 1;
				}
			});
			disPatchUpdate();
		} else {
			// if (qyt == 1) {
			// 	setItem(catItems.filter((item) => item.id !== id));
			// 	disPatchUpdate();
			// } else {

			catItems.map((item) => {
				if (item.quantity === 1) {
					setItem(catItems.filter((item) => item.id !== id));
					disPatchUpdate();
				} else {
					setQyt(qyt - 1);
					item.quantity -= 1;
				}
			});
		}
	};
	return (
		<div
			key={catItem?.id}
			className="flex items-center p-1 bg-opacity-30 rounded-md bg-gray-700 justify-between hover:drop-shadow-lg "
		>
			<div className=" flex gap-5">
				<img
					className="w-20 h-16 rounded-xl"
					src={catItem.imageUrl}
					alt=""
				/>
				<div className="flex flex-col items-start justify-center ">
					<p>{catItem?.title}</p>
					<div>$ {catItem.price}</div>
				</div>
			</div>
			<div className="flex items-center justify-center text-white gap-2">
				<div
					className="font-bold text-white text-xl cursor-pointer"
					onClick={() => updatQut("remove", catItem.id)}
				>
					<AiOutlineMinus />
				</div>
				{catItem.quantity}
				<div
					className="font-bold text-white text-xl cursor-pointer"
					onClick={() => updatQut("add", catItem.id)}
				>
					<AiOutlinePlus />
				</div>
			</div>
		</div>
	);
}

export default CartIterm;
