import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
// export default AnimeSee;
import "./AnimeSelect.css";
import Axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "./anime/actions";

function AnimeSelect() {
  const { id } = useParams();
  const animes = useSelector((state) => state.animes);
  const dispatch = useDispatch();
  const GetTopAnime = async () => {
    const temp = await Axios.get(
      `https://api.aniapi.com/v1/anime/?mal_id=${id}`
    );

    dispatch(fetchProducts(temp.data.data.documents));
  };

  useEffect(() => {
    GetTopAnime();
  }, []);

  return (
    <main>
      {/* 
<p>
    https://api.aniapi.com/v1/anime/?mal_id={id}<br/>
    https://api.aniapi.com/v1/anime/?mal_id= จากหน้า AnimeDetail.js<br/>

</p> */}

      {/* <div className="anime-row"> */}
      {animes.map((anime) => (
        <div className="anime">
          <div className="anime-banner">
            <img className="anime-image" src={anime.banner_image} />
          </div>
          <div className="anime-title">
            <p>
              {anime.titles.en}
              <br />( {anime.titles.jp}){" "}
            </p>
          </div>

          <div className="anime-content">
            <div className="anime-image">
              <img src={anime.cover_image} />
            </div>
            <div className="anime-text">
              <ul>
                <li className="li-score">
                  <p>
                    <b>Score: </b>
                    {anime.score} / 100
                  </p>
                </li>
                <li>
                  <p>
                    <b>Description : </b>
                    {anime.descriptions.en}
                  </p>
                </li>
                <li>
                  <p>
                    <b>Date-Start : </b>
                    {anime.start_date}
                  </p>
                </li>
                <li>
                  <p>
                    <b>Date-End : </b>
                    {anime.end_date}
                  </p>
                </li>
                <li>
                  <p>
                    <b>Year : </b>
                    {anime.season_year}
                  </p>
                </li>

                <li>
                  <p>
                    <b>Genres : </b>
                  </p>
                </li>
                <ul>
                  {anime.genres.map(function (genre) {
                    return (
                      <li>
                        <p>-{genre}</p>
                      </li>
                    );
                  })}
                </ul>
              </ul>
            </div>
          </div>

          <div className="anime-video">
            <h1>
              {anime.titles.en} | Official Trailer ({anime.season_year})
            </h1>
            <iframe src={anime.trailer_url}></iframe>
          </div>

          {/* <button class="button" >
                        <a href={anime.trailer_url}><span>Find out more</span></a>
                    </button>  */}
        </div>
      ))}
      {/* </div> */}
    </main>
  );
}
export default AnimeSelect;
