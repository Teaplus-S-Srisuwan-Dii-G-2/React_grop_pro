
import React from 'react'
// export default AnimeSee;
import './AnimeSelect.css'
import { useState, useEffect } from 'react';
// import axios from 'axios';
const baseURL = `https://api.aniapi.com/v1/anime/?mal_id=42938`;

function AnimeSelect() {
   
    const [topAnime, SetTopAnime] = useState([]);


    const GetTopAnime = async () => {

        const temp = await fetch(baseURL)




            .then(res => res.json());

        SetTopAnime(temp.data.documents);
    }



    useEffect(() => {
        GetTopAnime();
    });

    return (


        <main>


<p>
    https://api.aniapi.com/v1/anime/?mal_id=39486<br/>
    https://api.aniapi.com/v1/anime/?mal_id= จากหน้า AnimeDetail.js<br/>

</p>
      

            {/* <div className="anime-row"> */}
            {topAnime.map(anime => (
                <div className="card">



                    <div className="card-banner">
                        <img src={anime.banner_image} />

                    </div>
                    <div className="card-title">
                        <p >{anime.titles.en}<br />( {anime.titles.jp}) </p>


                    </div>

                    <div className="card-content">
                        < div className="card-image">

                            <img src={anime.cover_image} />
                         
                        </div>
                        < div className="card-text">
                            <ul>
                                <li className="li-score"><p><b>Score: </b>{anime.score} / 100</p></li>
                                <li><p><b>Description : </b>{anime.descriptions.en}</p></li>
                                <li><p><b>Date-Start : </b>{anime.start_date}</p></li>
                                <li><p><b>Date-End : </b>{anime.end_date}</p></li>
                                <li><p><b>Year : </b>{anime.season_year}</p></li>

                                
                                <li><p><b>Genres : </b></p></li>
                                <ul>
                                    {anime.genres.map(function (genre) {return <li><p>-{genre}</p></li>})}

                                </ul>
                             
                            </ul>

                        </div>
                    </div>




                    <div className="anime-video">
                        <h1>{anime.titles.en} | Official Trailer ({anime.season_year})</h1>
                        <iframe src={anime.trailer_url} ></iframe>

                    </div>

                  
                

   <button class="button" >
                        <a href={anime.trailer_url}><span>Find out more</span></a>
                    </button> 


</div>
            ))}
            {/* </div> */}

        </main>
    );
}
export default AnimeSelect;