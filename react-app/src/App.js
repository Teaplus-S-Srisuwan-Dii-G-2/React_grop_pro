import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Navbar from './features/Navbar';
import Credit from './features/Credit';
import Homepage from './features/Indexpage/features/HomePage/Homepage';
import Slidepage from './features/Indexpage/features/HomePage/SlideShow/Slideshow';
import MovieDetail from './Component/MovieDetail';
import Account from './features/user/Account';
import AnimeSelect from './Component/AnimeSelect'
import UserDetail from './features/user/Userdata';



function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/account">
          <Account />
        </Route>
        <Route path="/user">
          <UserDetail />
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
