import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

class WeatherDay extends React.Component {
  render() {
    let forecast = this.props.forecast;
    return (
      <>
        <ListGroup.Item> {forecast.date}: Low of {forecast.low}, and a High of {forecast.high}, with {forecast.description}</ListGroup.Item>
      </>
    );
  }
}

export default WeatherDay;
