import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Portfolio from "../../pages/Portfolio";
import Resume from "../../pages/Resume";
import './index.css';

const Navigation = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return(
    <Router>
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>Greg Knudsen</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                  <Link id="about-link" className="nav-link" to="/About">About</Link>
              </NavItem>
              <NavItem>
                  <Link id="contact-link" className="nav-link" to="/contact">Contact</Link>
              </NavItem>
              <NavItem>
                  <Link id="portfolio-link" className="nav-link" to="/portfolio">Portfolio</Link>
              </NavItem>
              <NavItem>
                  <Link id="resume-link" className="nav-link" to="/resume">Resume</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/">
            {/* <Home /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default Navigation;