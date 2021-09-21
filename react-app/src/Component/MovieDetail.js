import React from 'react'
import { useState, useEffect } from 'react';
import './MovieDetail.css'
import { Link } from 'react-router-dom';



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
						<Link to={`/animeselect/${anime.mal_id}`}>
						<div className="card">

							<div className="card-content">
								<div className="card-title">
									<p >{anime.titles.en}</p>
									<p >{anime.titles.jp}</p>

								</div>
								<div className="card-image">
									<img src={anime.cover_image} />

								</div>
								
								<div className="card-text">

								<p>{anime.descriptions.en}</p>
								<ul>
<li></li>
								</ul>

								</div>
							



							</div>


							<button class="button" >
								<a href={anime.trailer_url}><span>Find out more</span></a>
							</button>



						</div>
						</Link>

					))}
				</div>
			
		</main>
	)
}





export default AnimeDetail;