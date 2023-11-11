import React, { useEffect } from "react";
import { useStore } from "./context/store";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import CreateContainer from "./pages/CreateContainer";
import { getData } from "./utils/firebaseFuction";
import { actionTypes } from "./context/reducers";

export default function App() {
	const [{ user }] = useStore();
	const [{ foodItems }, dispatch] = useStore();

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

	console.log(user, "how are you doing");
	return (
		<>
			<Header />
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
