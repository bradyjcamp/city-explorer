import React from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap"

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: {}
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
    let cityData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);
    this.setState({
      cityData: cityData.data
    })

    // console.log(this.state.cityData[0].display_name);
  }

  render() {
    // console.log('app state: ', this.state)
    return (
      <>
      <main className="text-center">
        <Form style={{width: "max-content", margin: "auto"}}onSubmit={this.getCityData}>
          <Form.Label>
            Search a U.S. City:
          </Form.Label>
            <Form.Control className="text-center mb-2" type="text" placeholder="Seattle, Washington" onInput={this.handleCityInput} />
          <Button variant="info" type="submit">Explore!</Button>
        </Form>
          {
            this.state.cityData.length > 0 &&
            <p> Location Name and Coordinates: {this.state.cityData[0].display_name},
            ({this.state.cityData[0].lat},
            {this.state.cityData[0].lon})</p>
          }
          
        </main>
      </>
    );
  }
}

export default Main;
