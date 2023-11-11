import {
	collection,
	doc,
	getDocs,
	orderBy,
	query,
	setDoc,
} from "firebase/firestore";
import { firestoreDB } from "../fier_base/fierBase.config";

export const saveFunction = async (data) => {
	await setDoc(
		doc(firestoreDB, "foodItems", `${Date.now()}`),
		data,
		{ merge: true }
	);
};

export const getData = async () => {
	const foodItems = await getDocs(
		query(
			collection(firestoreDB, "foodItems"),
			orderBy("id", "desc")
		)
	);
	return foodItems.docs.map((doc) => doc.data());
};
