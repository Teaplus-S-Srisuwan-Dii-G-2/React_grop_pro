import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Axios from "axios";
import NowPlaying from "../../Component/nowplaying";
import { HomeWrapper } from "./style";

export default function HomePage() {
  const [Action, setAction] = useState([]);
  const [Comedy, setComedy] = useState([]);
  const [Drama, setDrama] = useState([]);
  useEffect(() => {
    getAllMovies();
  }, []);
  const getAllMovies = async () => {
    const allMovies = await Axios.all([
      Axios.get(
        `https://api.aniapi.com/v1/anime?genres=Action`
      ),
      Axios.get(
        `https://api.aniapi.com/v1/anime?genres=Comedy`
      ),
      Axios.get(
        `https://api.aniapi.com/v1/anime?genres=Drama`
      )
    ]);
    setAction(allMovies[0].data.data.documents);
    setComedy(allMovies[1].data.data.documents);
    setDrama(allMovies[2].data.data.documents);
  };

  return (
    <>
    <HomeWrapper >
    {Action.length > 0 ? (
      <>
      <NowPlaying movie={Action} name={"Action"} />
      <NowPlaying movie={Comedy} name={"Comedy"}/>
      <NowPlaying movie={Drama} name={"Drama"}/>
      </>
      ) : (
        <div>Loading Anime....</div>
      )}
    </HomeWrapper>
    </>
  );
}
