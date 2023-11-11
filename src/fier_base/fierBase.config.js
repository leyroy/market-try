// Import the functions you need from the SDKs you need
import {
	getApp,
	getApps,
	initializeApp,
} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyDQtyZl-Nd-c2uyw_OfzoICOz2Xo4mF_Fc",
	authDomain: "ley-roy-20831.firebaseapp.com",
	databaseURL:
		"https://ley-roy-20831-default-rtdb.firebaseio.com",
	projectId: "ley-roy-20831",
	storageBucket: "ley-roy-20831.appspot.com",
	messagingSenderId: "115773916227",
	appId: "1:115773916227:web:eac0b81d1145a6d726c0f6",
};

const app =
	getApps.length > 0
		? getApp()
		: initializeApp(firebaseConfig);

const firestoreDB = getFirestore(app);
const storage = getStorage(app);
export { app, firestoreDB, storage };
