import React from "react";
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"

class Header extends React.Component {
  render() {
    return (
      <>
        <header className="mb-4 mt-3" style={{borderRadius: "300px" }}>
          <Navbar bg="dark" variant="dark" >
            <Container style={{borderRadius: "10px" }} >
              <Navbar.Brand style={{color: "black", fontFamily: "monospace" }}>
                City Explorer
              </Navbar.Brand>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default Header;
