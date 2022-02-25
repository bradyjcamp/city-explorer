import React from "react";
import { Form, Button } from "react-bootstrap";

class FormInput extends React.Component {
  render() {
    return (
      <>
        <Form
          style={{ width: "max-content", margin: "auto" }}
          onSubmit={this.props.getCityData}
        >
          <Form.Label>Search for a City:</Form.Label>
          <Form.Control
            className="text-center mb-2"
            type="text"
            placeholder="Seattle, Washington"
            onInput={this.props.handleCityInput}
          />
          <Button variant="info" type="submit">
            Explore!
          </Button>
        </Form>
      </>
    );
  }
}

export default FormInput;
