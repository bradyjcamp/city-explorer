import React from "react";
import axios from "axios";
import { Form, Button, Container, Image } from "react-bootstrap"
// import { queryAllByAltText } from "@testing-library/react";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: {},
      // weatherData: [],
      error: false,
      errorAlert: ''
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
    try {let cityData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);
    // let weatherData = await axios.get(`http://localhost:3001/weather?searchQuery=${this.state.city}`);
    this.setState({
      cityData: cityData.data[0],
      // weatherData: weatherData.data
    })} catch(error){
      console.log('error:', error);
      console.log('error.response:',error.response)
      this.setState({
        error: true,
        errorAlert: `Uh oh! An Error has Occurred: ${error.response.status}, ${error.response.data.error}`
      })
      
    }
    
    // console.log(this.state.cityData.display_name);
    
  }
  
  
  render() {
    // console.log(this.state.weatherData)
    // console.log('app state: ', this.state)
    let url = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=12`;
    return (
      <>
      <main className="text-center">
        <Form style={{width: "max-content", margin: "auto"}}onSubmit={this.getCityData}>
          <Form.Label>
            Search for a City:
          </Form.Label>
            <Form.Control className="text-center mb-2" type="text" placeholder="Seattle, Washington" onInput={this.handleCityInput} />
          <Button variant="info" type="submit">Explore!</Button>
        </Form>
        <Container className="mt-4 mb-5">
          {
            this.state.error ?
            <p>{this.state.errorAlert}</p>:
            this.state.cityData.display_name ?
            <p>Location Name and Coordinates: {this.state.cityData.display_name},
            ({this.state.cityData.lat},
            {this.state.cityData.lon})</p> :
            <p></p>
          }
          </Container>
          {/* <Container>
            {
              this.state.error ?
              <p>{this.state.errorAlert}</p>:
              this.state.cityData.display_name ?
              <p>Forecast: {this.state.weatherData}</p>:
              <p></p>
            }

            
          </Container> */}
          <Container className="mb-5">
          {
            
            this.state.cityData.lat ? <Image src ={url} alt="oops"></Image>: <Image src="" alt=""></Image>
          }
          </Container>

        </main>
      </>
    );
  }
}

export default Main;
