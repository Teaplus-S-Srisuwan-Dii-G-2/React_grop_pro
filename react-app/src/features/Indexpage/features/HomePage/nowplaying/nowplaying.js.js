import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function NowPlaying({ movie,name }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1
  };
  return (
    <Container>
      
      <div className="clearfix mt-5 mb-2">
        <h4 className="float-left">{name}</h4>
      </div>
      <Slider {...settings}>
        {movie.map(function(movie) {
          return (
          
            <a href={`/animeselect/${movie.id}`}>
            <React.Fragment>
                <Col>
                  <Card>
                    <Card.Img
                      variant="top"
                      src={movie.cover_image}
                    />
                    <Card.Body>
                      <span>{movie.titles.en}</span>
                    </Card.Body>
                  </Card>
                </Col>
            </React.Fragment>
            </a>
          );
        })}
      </Slider>
    
    </Container>
  );
}
