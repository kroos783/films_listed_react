import { Link, Outlet } from "react-router-dom";
import "./index.css";

const Films = () => {
	return (
		<div className="LayoutMenu">
			<h1>FILMS SECTION</h1>
			<Link to='/' className="buttonNav">Go to home</Link>
			<div className="OutletBox">
			<Outlet />
			</div>
		</div>
	);
};

export default Films;
