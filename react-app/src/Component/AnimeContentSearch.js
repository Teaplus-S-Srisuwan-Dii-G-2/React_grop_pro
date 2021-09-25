import React from 'react'
// import './AnimeSearch.css'
import { Link } from "react-router-dom";
import { Container, Card, Row, Col } from "react-bootstrap";

function SearchContentSearch(props) {
    return (
        <>
        <main>


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
            <div className="animes-area">
                
            {props.animeList == undefined ? (
                <>
                <h1> undefined</h1>
                </>
              ) : (
                props.animeList.map(anime => (
                    <>
                    <Link to={`/animeselect/${anime.mal_id}`}>
                    <React.Fragment>
                        <Col>
                          <Card >
                            <Card.Img className="area-1"
                              variant="top"
                              src={anime.cover_image}
                            />
                            <Card.Body className="area-2">
                              <span>{anime.titles.en}</span>
                            </Card.Body>
                          </Card>
                        </Col>
                    </React.Fragment>
                    </Link>
                    </>
                
                    // <article className="animes-item">
                    //     <div className="areass-text">

                    //         <h6>{anime.titles.en}</h6>


                    //     </div>

                    //     <Link to={`/animeselect/${anime.mal_id}`}>
                    //         <div className="areas-img">
                    //             <img className="animes-img" src={anime.cover_image} a />
                    //         </div>
                    //     </Link>









                    // </article>
                
                    )))}
            </div>


        </main>
        </>
    )
}

export default SearchContentSearch