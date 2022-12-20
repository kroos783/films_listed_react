import { Link } from "react-router-dom";
import "./index.css";

const Home = () => {
	return (
		<div>
			<h1>Home</h1>
			<Link className="buttonNav" to='/films'>list films</Link>
		</div>
	);
};

export default Home;
