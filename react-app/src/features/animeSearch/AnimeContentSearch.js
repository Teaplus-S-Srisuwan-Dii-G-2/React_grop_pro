import React from 'react'
import './AnimeSearch.css'
import { Link } from "react-router-dom";
import { Container, Card, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
const urlPic = 'https://i.pinimg.com/736x/f8/2b/b1/f82bb1b3bb1df050238910c0f8632491.jpg'

function SearchContentSearch(props) {

  function name(params) {
    
  }
  return (
    
    <>
      <main>
      <div className="anime-detail-content">

        <div className="main-head">


          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />



          <div className="wrapper">
            <form className="search_box" onSubmit={props.HandleSearch}>
              <div className="search_btn"><i class="fa fa-search" aria-hidden="true"></i></div>
              <input type="text" className="input_search" maxlength="10" placeholder="What are you looking for?" required
                value={props.search}
                onChange={e => props.SetSearch(e.target.value)} />
            </form>
          </div>
        </div>

        <div className="anime-row">

          {props.animeList == undefined ? (

          <div >
             <h5>No Anime is "{props.search}"</h5>
          </div>
             
            


          ) : 
          
          (

            props.animeList.map(anime => (
              // <>
              // <Link to={`/animeselect/${anime.mal_id}`}>
              // <React.Fragment>
              //     <Col>
              //       <Card >
              //         <Card.Img className="area-1"
              //           variant="top"
              //           src={anime.cover_image}
              //         />
              //         <Card.Body className="area-2">
              //           <span>{anime.titles.en}</span>
              //         </Card.Body>
              //       </Card>
              //     </Col>
              // </React.Fragment>
              // </Link>

              // </>
              
              <div className="animed">
                <div className="animed-content">
                  <div className="animed-title">
                    <ul>
                      <li>

                        <p className="animed-title-us">{anime.titles.en} </p>
                      </li>
                      <li>

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
            )))}
        </div>

        </div>
      </main>
    </>
  )
}
async function likeAnime(anime_id) {
  // POST request using fetch with async/await
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ anime_id: anime_id })
  };
  const response = await fetch('http://localhost:1337/favor-animes', requestOptions);
  const data = await response.json();
  // this.setState({ postId: data.id });
  console.log(data)
}

export default SearchContentSearch