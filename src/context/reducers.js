export const actionTypes = {
	ADD_USER: "ADD_USER",
	SET_FOOD_ITEMS: "SET_FOOD_ITEMS",
};

export const reducer = (state, action) => {
	switch (action.type) {
		case actionTypes.ADD_USER:
			return {
				...state,
				user: action.user,
			};
		case actionTypes.SET_FOOD_ITEMS:
			return {
				...state,
				foodItems: action.foodItems,
			};

		default:
			return state;
	}
};
