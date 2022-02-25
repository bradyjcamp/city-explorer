import React from "react";
import { Container, Image } from "react-bootstrap";

class Map extends React.Component {
  render() {
    let url = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.props.cityData.lat},${this.props.cityData.lon}&zoom=12`;
    return (
      <>
        <Container className="mb-5">
          {this.props.cityData.lat ? (
            <Image src={url} alt="oops"></Image>
          ) : (
            <Image src="" alt=""></Image>
          )}
        </Container>
      </>
    );
  }
}

export default Map;
