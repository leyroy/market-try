import App from "./App";
import reactDom from "react-dom/client";
import ContexProvider from "./context/store";
import { initialstate } from "./context/inistialState";
import { reducer } from "./context/reducers";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

const root = reactDom.createRoot(
	document.getElementById("root")
);

root.render(
	<BrowserRouter basename={process.env.PUBLIC_URL}>
		<ContexProvider
			initialstate={initialstate}
			reducer={reducer}
		>
			<App />
		</ContexProvider>
	</BrowserRouter>
);
