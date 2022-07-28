import React from "react";
// import ListGroup from "react-bootstrap/ListGroup";
// import Image from "react-bootstrap/Image";
import Carousel from 'react-bootstrap/Carousel';

class Movie extends React.Component {
  render() {
    let movieInfo = this.props.movieInfo;
    return (
      <>
      <img className="d-block h-100 w-10 m-auto"
      src={movieInfo.img_url}
      alt={movieInfo.title}/>
      <Carousel.Caption>
        <p>{movieInfo.title}: {movieInfo.overview}, release date: {movieInfo.release}, ratings: {movieInfo.rating}, total votes: {movieInfo.votes}. </p>
      </Carousel.Caption>
      </>
    );
  }
}

export default Movie;
