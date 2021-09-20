import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Navbar from './features/Navbar';
import Credit from './features/Credit';
import Homepage from './features/Indexpage/features/HomePage/Homepage';
import Slidepage from './features/Indexpage/features/HomePage/SlideShow/Slideshow';




function App() {
  return (
    <>
      <Navbar />
      <Switch>
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
