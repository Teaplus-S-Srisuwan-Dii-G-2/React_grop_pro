import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';


import Navbar from './Component/Navbar';
import Credit from './Component/Credit';
import Homepage from './features/homepage/Homepage';
import Slidepage from './Component/Slideshow';
import MovieDetail from './features/moviedetail/MovieDetail';
import Account from './features/account/Account';
import AnimeSelect from './features/animeselect/AnimeSelect'
import UserDetail from './features/userdata/Userdata';
import AnimeSearch from './features/animeSearch/AnimeSearch';
import ScrollTop from './ScrollTop'


import Login from './features/login-signup/Login';
import SignUp from './features/login-signup/SignUp';
import {AuthProvider} from './Component/Auth'



function App() {
  return (
    <>
    <ScrollTop/>
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
        <Route path="/search">
          <AnimeSearch />
        </Route>
        <Route path="/login">
          <AuthProvider><Login/></AuthProvider>
          
        </Route>
        <Route path="/signup">
        <AuthProvider><SignUp/></AuthProvider>
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
