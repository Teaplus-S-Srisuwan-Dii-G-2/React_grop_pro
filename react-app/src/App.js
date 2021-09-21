import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Navbar from './features/Navbar';
import Credit from './features/Credit';
import Homepage from './features/Indexpage/features/HomePage/Homepage';
import Slidepage from './features/Indexpage/features/HomePage/SlideShow/Slideshow';
import MovieDetail from './Component/MovieDetail';
import Accoud from './features/Account';
import AnimeSelect from './Component/AnimeSelect'


function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/accoud">
          <Accoud />
        </Route>
        <Route path="/animeselect/:id">
          <AnimeSelect />
        </Route>
        <Route path="/topanime">
          <MovieDetail />
        </Route>
        <Route path="/">
          <Slidepage />
          <Homepage />
        </Route>
        
      </Switch>
      <Credit />
    </>
  );
}

export default App;
