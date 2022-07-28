import React from "react";
import Movie from "./Movie";
import ListGroup from "react-bootstrap/ListGroup";
import Carousel from 'react-bootstrap/Carousel';

class Movies extends React.Component {
  render() {
    let movieData = this.props.movieData;
    let movieListInfo = movieData.map((movieInfo, idx) => (
      <Carousel.Item className="h-100"> 
        <Movie key={idx} movieInfo={movieInfo} />
      </Carousel.Item>
    ));
    return (
      <>
      {this.props.renderMovie ? <h2>Movies from this City:</h2> : <p></p>}
        {this.props.renderMovie && (
          <Carousel className="mt-4 mb-5 m-auto" style={{ height: '500px' }}>
            {movieListInfo}
          </Carousel>
        )}
        <h3>{this.props.movieErrorAlert}</h3>
      </>
    );
  }
}

export default Movies;
