import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { isAuthenticated } from "./../service/userManagement";

import App from "./../components/App";
import Signup from "./../components/userManagement/Signup";
import Signin from "./../components/userManagement/Signin";
import Dashboard from "./../components/dashboard/Dashboard";
import TaskManagement from "./../components/taskManagement/TaskManagement";

const Router = () => {
	const dispatch = useDispatch();
	const userData = isAuthenticated();
	const userDataInState = useSelector((state) => {
		return state.userData || {};
	});
	if (userData.isUserValidated && !userDataInState.isSignedIn) {
		dispatch({ type: "SET_USER_DATA", payload: { isSignedIn: true, userData: userData } });
	}

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route path="signup" element={<Signup />}></Route>
					<Route path="signin" element={<Signin />}></Route>
					<Route path="dashboard" element={<Dashboard />}></Route>
					<Route path="task_manager" element={<TaskManagement />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
