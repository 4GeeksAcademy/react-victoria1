import React from "react";
import Card from "./card";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Footer from "./footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron />
			<div className="d-flex gap-4">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<Footer />
		</div>
	);
};



export default Home;
