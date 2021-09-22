import React from "react";
import { useState, useEffect } from "react";
import "./MovieDetail.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from './anime/actions'


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

    <main>  <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
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
            <div className="animed-button">
              <div class="icon">
                <img src="https://pnglux.com/wp-content/uploads/2021/04/1617443306_Like-PNG-High-Quality-Image.png" />

                {/* <img classs="icon" src="https://pnglux.com/wp-content/uploads/2021/04/1617443306_Like-PNG-High-Quality-Image.png"/> */}
              </div>

              <button class="button">
                <Link to={`/animeselect/${anime.mal_id}`}>

                  <a href={anime.trailer_url}>
                    <span>Find out more</span>
                  </a>

                </Link>   </button>

            </div>


          </div>
        ))}
      </div>
    </main>
  );
}

export default AnimeDetail;
