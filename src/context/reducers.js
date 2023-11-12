export const actionTypes = {
	ADD_USER: "ADD_USER",
	SET_FOOD_ITEMS: "SET_FOOD_ITEMS",
	SET_CATITEMS: "SET_CATITEMS",
	SET_CATCONTAINER: "SET_CATCONTAINER",
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
		case actionTypes.SET_CATITEMS:
			return {
				...state,
				catItems: action.catItems,
			};
		case actionTypes.SET_CATCONTAINER:
			return {
				...state,
				catContainer: action.catContainer,
			};

		default:
			return state;
	}
};
