import React, { useEffect } from "react";
import Axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";
import "./nowplay.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from '../Component/anime/actions';
function ControlledCarousel() {
  const animes = useSelector((state) => state.animes);
  const dispatch = useDispatch();
  useEffect(() => {
    getMovies();
  }, []);
  const getMovies = async () => {
    const movie = await Axios.get("https://api.aniapi.com/v1/anime");

    dispatch(fetchProducts(movie.data.data.documents));
  };
  return (
    <>
    {animes.length > 0 ? (
    <div className="area-slide">
      <Carousel fade>
        {animes.map(function (anime) {
          return (
            <Carousel.Item>
              <img
                className="img-slide d-block slidepigban"
                src={anime.banner_image}
              />
              <Carousel.Caption>
                <h3>{anime.titles.en}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
    ) : (
      <div>Loading....</div>
    )}
    </>
  );
}
export default styled(ControlledCarousel)`
  .slidepigban {
    height: 400px;
    width: 100% !important;
  }
`;
