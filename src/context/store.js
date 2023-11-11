import React, {
	createContext,
	useContext,
	useReducer,
} from "react";

export const Store = createContext();

const ContextProvider = ({
	reducer,
	initialstate,
	children,
}) => {
	return (
		<Store.Provider value={useReducer(reducer, initialstate)}>
			{children}
		</Store.Provider>
	);
};

export const useStore = () => useContext(Store);

export default ContextProvider;
