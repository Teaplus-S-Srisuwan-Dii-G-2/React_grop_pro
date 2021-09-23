import React from 'react'
import './AnimeSearch.css'
import { Link } from "react-router-dom";

function SearchContentSearch(props) {
    return (
        <main>


            <div className="main-head">


                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />



                <div className="wrapper">
                    <form className="search_box" onSubmit={props.HandleSearch}>
                        <div className="search_btn"><i class="fa fa-search" aria-hidden="true"></i></div>
                        <input type="text" className="input_search" maxlength="4" placeholder="What are you looking for?" required
                            value={props.search}
                            onChange={e => props.SetSearch(e.target.value)} />
                    </form>
                </div>
            </div>
            <div className="animes-area">
                {props.animeList.map(anime => (
                    <article className="animes-item">
                        <div className="areass-text">

                            <h6>{anime.titles.en}</h6>


                        </div>

                        <Link to={`/animeselect/${anime.mal_id}`}>
                            <div className="areas-img">
                                <img className="animes-img" src={anime.cover_image} a />
                            </div>
                        </Link>









                    </article>
                ))}
            </div>


        </main>
    )
}

export default SearchContentSearch