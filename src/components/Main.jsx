import axios from 'axios';
import React, { useEffect, useState } from 'react';
import requests from '../Request';

function Main() {
	const [movies, setMovies] = useState([]);
	const featuredMovie = movies[Math.floor(Math.random() * movies.length)];

	useEffect(() => {
		axios.get(requests.requestPopular).then((response) => {
			setMovies(response.data.results);
		});
	}, []);

    const truncateString = (string, maxLength) => {
        if (string?.length > maxLength) {
            return string.slice(0, maxLength) + '...'
        } else {
            return string
        }
    }

	return (
		<div className="w-full h-[550px] text-white">
			<div className="w-full h-full">
				<div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
				<img
					className="w-full h-full object-cover"
					src={`https://image.tmdb.org/t/p/original/${featuredMovie?.backdrop_path}`}
					alt={featuredMovie?.title}
				/>
				<div className="absolute w-full top-[20%] p-4 md:p-8 flex flex-col gap-2">
					<h1 className="text-3xl md:text-5xl font-bold">
						{featuredMovie?.title}
					</h1>
					<div>
						<button className="border bg-gray-300 text-black border-x-gray-300 py-2 px-5">
							Play
						</button>
						<button className="border text-white border-x-gray-300 py-2 px-5 ml-4">
							Watch Later
						</button>
					</div>
					<p className="text-gray-400 text-sm">
						Released: {featuredMovie?.release_date}
					</p>
					<p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
						{truncateString(featuredMovie?.overview, 150)}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Main;
