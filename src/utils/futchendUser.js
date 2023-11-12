export const fetchLocalStorage = () => {
	const userInfo =
		localStorage.getItem("user") !== "undefined"
			? JSON.parse(localStorage.getItem("user"))
			: localStorage.clear();

	return userInfo;
};
export const catItem8 = () => {
	const catItemss =
		localStorage.getItem("catItems") !== "undefined"
			? JSON.parse(localStorage.getItem("catItems"))
			: localStorage.clear();

	return catItemss;
};
