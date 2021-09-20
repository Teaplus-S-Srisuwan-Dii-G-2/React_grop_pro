import React from 'react'



import { useState, useEffect } from 'react';
import './MovieDetail.css'



function AnimeDetail() {
	const [topAnime, SetTopAnime] = useState([]);


	const GetTopAnime = async () => {

		const temp = await fetch(`https://api.aniapi.com/v1/anime`)
		



			.then(res => res.json());

		SetTopAnime(temp.data.documents);
	}



	useEffect(() => {
		GetTopAnime();
	}, []);

	return (


		<main>
		
				<h3>Top Anime</h3>

				<div className="anime-row">
					{topAnime.map(anime => (
						<div className="card">

							<div className="card-content">
								<div className="card-title">
									<p >{anime.titles.en}</p>
								</div>
								<div className="card-image">
									<img src={anime.cover_image} />

								</div>
								
								<div className="card-text">
								<html>{anime.descriptions.en}</html>

								</div>
							



							</div>


							<button class="button" >
								<a href={anime.trailer_url}><span>Find out more</span></a>
							</button>



						</div>


					))}
				</div>
			
		</main>
	)
}





export default AnimeDetail;