import {
	catItem8,
	fetchLocalStorage,
} from "../utils/futchendUser";
const catItems = catItem8();
export const initialstate = {
	user: fetchLocalStorage(),
	catItems: catItems,
	foodItems: null,
	catContainer: false,
};
