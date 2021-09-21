import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './MovieDetail.css'
import { Link } from 'react-router-dom';
import anime from './anime'




function AnimeDetail( ) {
	const animes = useSelector((state) => state.animes);
  	const dispatch = useDispatch();

	const GetTopAnime = async () => {
		const anime = await fetch(`https://api.aniapi.com/v1/anime`)
			.then(res => res.json());
		dispatch(fetchProducts(anime.data.data));
	}

	useEffect(() => {
		GetTopAnime();
	}, []);

	return (
		<main>
				<h3>Top Anime</h3>
				<div className="anime-row">
					{anime.map(anime => (
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