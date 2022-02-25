import React from "react";
import Movie from "./Movie";
import ListGroup from "react-bootstrap/ListGroup";

class Movies extends React.Component {
  render() {
    let movieData = this.props.movieData;
    let movieListInfo = movieData.map((movieInfo, idx) => (
      <Movie key={idx} movieInfo={movieInfo} />
    ));
    return (
      <>
        {this.props.renderMovie && (
          <ListGroup className="mt-4 mb-5 w-50" style={{ margin: "auto" }}>
            {movieListInfo}
          </ListGroup>
        )}
        <h3>{this.props.movieErrorAlert}</h3>
      </>
    );
  }
}

export default Movies;
