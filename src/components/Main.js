import React from "react";
import Weather from "./Weather/Weather";
import Movies from "./Movies/Movies";
import Map from "./CityData/Map";
import FormInput from "./Form/FormInput";
import CityData from "./CityData/CityData";
import axios from "axios";

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
      // console.log("error:", error);
      // console.log("error.response:", error.response);
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
    // console.log(this.state.weatherData);
    // console.log('app state: ', this.state)
    return (
      <>
        <main className="text-center">
          <FormInput
            getCityData={this.getCityData}
            handleCityInput={this.handleCityInput}
          />
          <CityData
            error={this.state.error}
            errorAlert={this.state.errorAlert}
            cityData={this.state.cityData}
          />
          <Weather
            weatherData={this.state.weatherData}
            renderWeather={this.state.renderWeather}
            weatherErrorAlert={this.state.weatherErrorAlert}
          />
          <Map cityData={this.state.cityData} />
          <Movies
            movieData={this.state.movieData}
            renderMovie={this.state.renderMovie}
            movieErrorAlert={this.state.movieErrorAlert}
          />
        </main>
      </>
    );
  }
}

export default Main;
