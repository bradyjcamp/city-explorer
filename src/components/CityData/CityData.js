import React from "react";
import Container from "react-bootstrap/Container";

class CityData extends React.Component {
  render() {
    console.log(this.props.cityData.display_name)
    return (
      <Container className="mt-4 mb-5 w-50" style={{ margin: "auto" }}>
        {this.props.error ? (
          <p>{this.props.errorAlert}</p>
        ) : this.props.cityData.display_name ? (
          <p>
            Location Name and Coordinates: {this.props.cityData.display_name}, (
            {this.props.cityData.lat},{this.props.cityData.lon})
          </p>
        ) : (
          <p></p>
        )}
      </Container>
    );
  }
}

export default CityData;
