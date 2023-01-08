import ReactDom from "react-dom/client";
import { Provider } from "react-redux";
import { persistor, store } from "./state/store";
import { PersistGate } from "redux-persist/integration/react";

import "Style/external/bootstrap.min.css";
import "Style/index.scss";
import Router from "./routes/router";

import enums from "./enum.js";
import lang from "./language/defaultLang.js";

window.lang = lang;
window.enums = enums;

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<PersistGate persistor={persistor}>
			<Router />
		</PersistGate>
	</Provider>,
);
