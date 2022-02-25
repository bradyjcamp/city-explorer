import React from "react";
import WeatherDay from "./WeatherDay";
import ListGroup from "react-bootstrap/ListGroup";

class Weather extends React.Component {
  render() {
    let weatherData = this.props.weatherData;
    let dailyForecasts = weatherData.map((forecast, idx) => (
      <WeatherDay key={idx} forecast={forecast} />
    ));
    return (
      <>
        {this.props.renderWeather && (
          <ListGroup className="mt-4 mb-5 w-50" style={{ margin: "auto" }}>
            {dailyForecasts}
          </ListGroup>
        )}
        <h3>{this.props.weatherErrorAlert}</h3>
      </>
    );
  }
}

export default Weather;
