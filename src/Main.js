import React from "react";
import axios from "axios";
import { Form, Button, Container, Image, ListGroup } from "react-bootstrap";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      cityData: [],
      // renderCityData: false,
      weatherData: [],
      movieData: [],
      error: false,
      errorAlert: "",
      weatherError: false,
      weatherErrorAlert: "",
      renderWeather: false,
      renderMovie: false,
      movieError: false,
      movieErrorAlert: "",
    };
  }

  handleCityInput = (e) => {
    e.preventDefault();
    this.setState({
      city: e.target.value,
    });
  };

  getCityData = async (e) => {
    e.preventDefault();
    try {
      let cityData = await axios.get(
        `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`
      );
      this.setState({
        cityData: cityData.data[0],
      });
    } catch (error) {
      console.log("error:", error);
      console.log("error.response:", error.response);
      this.setState({
        error: true,
        errorAlert: `Uh oh! An Error has Occurred: ${error.response.status}, ${error.response.data.error}`,
      });
    }
    this.getWeather();
    this.getMovieData();

    // console.log(this.state.cityData.display_name);
  };

  getWeather = async () => {
    try {
      let results = await axios.get(
        `${process.env.REACT_APP_SERVER}/weather?lat=${this.state.cityData.lat}&lon=${this.state.cityData.lon}`
      );
      this.setState({
        weatherData: results.data,
        renderWeather: true,
      });
    } catch (error) {
      this.setState({
        weatherError: true,
        weatherErrorAlert: `A Weather Error Occurred: ${error.response.status}, ${error.response.data.error} `,
      });
    }
  };

  getMovieData = async () => {
    try {
      let movieData = await axios.get(
        `${process.env.REACT_APP_SERVER}/movies?nameOfCity=${this.state.city}`
      );
      this.setState({
        movieData: movieData.data,
        renderMovie: true,
      });
    } catch (error) {
      this.setState({
        movieError: true,
        movieErrorAlert: `A Movie Error Occurred: ${error.response.status}, ${error.response.data.error}`,
      });
    }
  };

  render() {
    console.log(this.state.weatherData);
    // console.log('app state: ', this.state)
    let url = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=12`;

    let dailyForecasts = this.state.weatherData.map((forecast, idx) => (
      <ListGroup.Item key={idx}>
        {forecast.date}: Low of {forecast.low}, and a High of {forecast.high},
        with {forecast.description}
      </ListGroup.Item>
    ));
    let movieListInfo = this.state.movieData.map((movieInfo, idx) => (
      <ListGroup.Item key={idx}>
        {movieInfo.title}: {movieInfo.overview}, release date:{" "}
        {movieInfo.release}, ratings: {movieInfo.rating}, total votes:{" "}
        {movieInfo.votes}.
      </ListGroup.Item>
    ));
    return (
      <>
        <main className="text-center">
          <Form
            style={{ width: "max-content", margin: "auto" }}
            onSubmit={this.getCityData}
          >
            <Form.Label>Search for a City:</Form.Label>
            <Form.Control
              className="text-center mb-2"
              type="text"
              placeholder="Seattle, Washington"
              onInput={this.handleCityInput}
            />
            <Button variant="info" type="submit">
              Explore!
            </Button>
          </Form>
          <Container className="mt-4 mb-5 w-50" style={{ margin: "auto" }}>
            {this.state.error ? (
              <p>{this.state.errorAlert}</p>
            ) : this.state.cityData.display_name ? (
              <p>
                Location Name and Coordinates:{" "}
                {this.state.cityData.display_name}, ({this.state.cityData.lat},
                {this.state.cityData.lon})
              </p>
            ) : (
              <p></p>
            )}
          </Container>
          
          {this.state.renderWeather && <ListGroup>{dailyForecasts}</ListGroup>}
          <h3>{this.state.weatherErrorAlert}</h3>

          <Container className="mb-5">
            {this.state.cityData.lat ? (
              <Image src={url} alt="oops"></Image>
            ) : (
              <Image src="" alt=""></Image>
            )}
          </Container>

          {this.state.renderMovie && <ListGroup>{movieListInfo}</ListGroup>}
          <h3>{this.state.movieErrorAlert}</h3>
        </main>
      </>
    );
  }
}

export default Main;
