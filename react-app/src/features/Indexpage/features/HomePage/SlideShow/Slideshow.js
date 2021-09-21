import React, { useState, useEffect } from "react";
import Axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import '../nowplaying/nowplay.css'
function ControlledCarousel() {
  const [Anime, setAnime] = useState([]);
  useEffect(() => {
    getMovies();
  }, []);
  const getMovies = async () =>{
    const movie = await Axios.get('https://api.aniapi.com/v1/anime');

    setAnime(movie.data.data.documents);
  }
  return (
    <div className="area-slide">
      <Carousel fade >
        {Anime.map(function(anime){
          return(
            <Carousel.Item>
          <img className="img-slide d-block slidepigban" src={anime.banner_image}  />
          <Carousel.Caption>
            <h3>{anime.titles.en}</h3>
          </Carousel.Caption>
        </Carousel.Item>
          )
        })}
        
      </Carousel>
    </div>
  );
}
export default styled(ControlledCarousel)`
.slidepigban{
  height: 400px;
      width: 100%!important;
}
`;
