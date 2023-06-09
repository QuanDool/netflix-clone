import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Request";

function Home() {
	return (
		<div>
			<Main />
			<Row title="Upcoming" fetchURL={requests.requestUpcoming} />
			<Row title="Top Rated" fetchURL={requests.requestTopRated} />
		</div>
	);
}

export default Home;
