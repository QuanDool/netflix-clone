import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Movie from "./Movie";

function Row({ title, fetchURL }) {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		axios.get(fetchURL).then((response) => {
			setMovies(response.data.results);
		});
	}, [fetchURL]);

	return (
		<div>
			<h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
			<div className="relative flex items-center ">
				<div
					id={"slider"}
					className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
				>
					{movies.map((movie, index) => {
						return <Movie movie={movie} key={index} />;
					})}
				</div>
			</div>
		</div>
	);
}

export default Row;
