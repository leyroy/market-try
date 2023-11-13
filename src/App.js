import React, { useEffect } from "react";
import { useStore } from "./context/store";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CreateContainer from "./pages/CreateContainer";
import { getData } from "./utils/firebaseFuction";
import { actionTypes } from "./context/reducers";

export default function App() {
	const [{}, dispatch] = useStore();

	const getFoodItems = async () => {
		await getData().then((data) => {
			dispatch({
				type: actionTypes.SET_FOOD_ITEMS,
				foodItems: data,
			});
		});
	};
	useEffect(() => {
		getFoodItems();
	}, []);

	return (
		<>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/createContainer"
					element={<CreateContainer />}
				/>
			</Routes>
		</>
	);
}
