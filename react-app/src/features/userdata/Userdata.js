import React, { useState, useEffect,useContext } from "react";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import "../account/account.css";
import { Button } from "react-bootstrap";
import Row from 'react-bootstrap/Row'
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Axios from "axios";
import { AuthContext } from '../../Component/Auth'



import './userdata.css'


export default function Userdata() {
  const  { currentUser }  = useContext(AuthContext);

  async function gatalldataanime() {
    await Axios.get(
      `https://api.aniapi.com/v1/anime`
    )

  }

  useEffect(() => {
    gatalldataanime();

  }, []);

  return (
    <>
      <div className="account">
        <h1>User</h1>
        <hr />
        <Container >
          <div className="flex-container">
            <div className="user-item">

              <div className="user-profile">

                <img className="profile" src="https://artsofcarvercounty.org/wp-content/uploads/2015/01/SteveProfile-171x180.png" />
              </div>


              <h1>{currentUser.email}</h1>
            </div>
          </div>

        </Container>
        <h1>Favorite Anime</h1>
        <Container>

        </Container>
        <hr />
      </div>
    </>
  );
};
