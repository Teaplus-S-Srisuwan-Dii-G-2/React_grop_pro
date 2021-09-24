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
  const urlPic = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLudBUAQNGPerdvGD3gHqObUr1mYm7lk383w&usqp=CAU'
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
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{anime.descriptions.en}</p>
                <ul>
                  <li></li>
                </ul>
              </div>
            </div>
            <div className="animed-button">
              <div className="icon">
                <img src={urlPic} class="button-like" onClick={() => { likeAnime(anime.mal_id) }} />

              </div>

              {/* <div className="icon">
                <img src={urlPic} class="button-like" onClick={() => { likeAnime(anime.mal_id) }} />

              </div> */}

<button className="btt">
              <Link to={`/animeselect/${anime.mal_id}`}>
                <div class="button-click">

                  <span className="nextpage">Find out more</span>

                </div>
              </Link>

</button>



            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
async function likeAnime(anime_id) {
  // POST request using fetch with async/await
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ anime_id:anime_id})
  };
  const response = await fetch('http://localhost:1337/favor-animes', requestOptions);
  const data = await response.json();
  // this.setState({ postId: data.id });
  console.log('dd')
}

export default AnimeDetail;
