import { useLocation, Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./common/Navbar";
import jumbotronImage from "./../assets/jumbotron.png";

const App = () => {
	const location = useLocation();
	const userDataInState = useSelector((state) => {
		return state.userData || {};
	});
	const isSignedIn = userDataInState.isSignedIn || false;

	const jumbotron = () => {
		if (location.pathname == "/") {
			return (
				<div className="row jumbotron justify-content-center m-0 p-2 pt-4">
					<div className="col-md-4 d-flex align-items-center">
						<div className="">
							<h1 className="display-4 font-weight-bold mb-4">The #1 software development tool used by agile teams</h1>
							<p className="lead font-weight-normal">The best software teams ship early and often.</p>
							<hr className="my-4" />
							<p className="lead font-weight-normal mb-4">This software is built for every member of your software team to plan, track, and release great software.</p>
							{!isSignedIn ? (
								<Link to="/signup" className="btn btn-primary btn-lg px-5">
									Sign Up Now!
								</Link>
							) : (
								""
							)}
						</div>
					</div>
					<div className="col-md-6 d-flex align-items-center">
						<img src={jumbotronImage} alt="kanban board illustration" />
					</div>
				</div>
			);
		}
		return null;
	};
	return (
		<div>
			<Navbar></Navbar>
			{jumbotron()}
			<Outlet />
		</div>
	);
};

export default App;
