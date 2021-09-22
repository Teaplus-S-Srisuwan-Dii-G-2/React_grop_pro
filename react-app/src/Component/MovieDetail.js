import React from "react";
import { useState, useEffect } from "react";
import "./MovieDetail.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import {fetchProducts} from './anime/actions'

function AnimeDetail() {
//   const [topAnime, SetTopAnime] = useState([]);
const animes = useSelector((state) => state.animes);
const dispatch = useDispatch();

  const GetTopAnime = async () => {
    const temp = await fetch(`https://api.aniapi.com/v1/anime`).then((res) =>
      res.json()
    );

    dispatch(fetchProducts(temp.data.documents));
  };

  useEffect(() => {
    GetTopAnime();
  }, []);

  return (
    <main>
      <center className="animed-topic">
        <p className="animed-topic-title">Anime Detail</p>
      </center>

      <div className="anime-row">
        {animes.map((anime) => (
          <div className="animed">
            <div className="animed-content">
              <div className="animed-title">
                <ul>
                  <li>
                    {" "}
                    <p>{anime.titles.en} </p>
                  </li>
                  <li>
                    {" "}
                    <p className="animed-title-jp">({anime.titles.jp})</p>
                  </li>
                </ul>

                <br />
              </div>
              <div className="animed-image">
                <img src={anime.cover_image} />
              </div>

              <div className="animed-text">
                <p>{anime.descriptions.en}</p>
                <ul>
                  <li></li>
                </ul>
              </div>
            </div>

            <Link to={`/animeselect/${anime.mal_id}`}>
              <button class="button">
                <a href={anime.trailer_url}>
                  <span>Find out more</span>
                </a>
              </button>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

export default AnimeDetail;
