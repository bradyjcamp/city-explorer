import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";

class Movie extends React.Component {
  render() {
    let movieInfo = this.props.movieInfo;
    return (
      <>
      <Image className="m-auto h-50 mt-5"
      src={movieInfo.img_url}
      alt={movieInfo.title}/>
      <ListGroup.Item>
        {movieInfo.title}: {movieInfo.overview}, release date: {movieInfo.release}, ratings: {movieInfo.rating}, total votes: {movieInfo.votes}.
      </ListGroup.Item>
      </>
    );
  }
}

export default Movie;
