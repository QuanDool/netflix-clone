import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function Row({ title, fetchURL }) {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		axios.get(fetchURL).then((response) => {
			setMovies(response.data.results);
		});
	}, [fetchURL]);

	const slideLeft = (event) => {
		const row = event.target.parentElement;
		const slider = row.children[1];
		slider.scrollLeft -= 500;
	};

	const slideRight = (event) => {
		const row = event.target.parentElement;
		const slider = row.children[1];
		slider.scrollLeft += 500;
	};

	return (
		<div>
			<h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
			<div className="relative flex items-center group">
				<MdChevronLeft
					onClick={slideLeft}
					className="bg-white rounded-full absolute left-3 z-10 cursor-pointer opacity-50 hover:opacity-100 hidden group-hover:block"
					size={40}
				/>
				<div
					id={"slider"}
					className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
				>
					{movies.map((movie, index) => (
						<Movie movie={movie} key={index} />
					))}
				</div>
				<MdChevronRight
					onClick={slideRight}
					className="bg-white rounded-full absolute right-3 z-10 cursor-pointer opacity-50 hover:opacity-100 hidden group-hover:block"
					size={40}
				/>
			</div>
		</div>
	);
}

export default Row;
