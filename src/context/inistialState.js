import { fetchLocalStorage } from "../utils/futchendUser";
export const initialstate = {
	user: fetchLocalStorage(),
	foodItems: null,
};
