import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap'
import {Link} from 'react-router-dom';
import './nav.scss'
import logo from '../../images/jsc_logo_color.svg'
import github from '../../images/github.svg';
import linkedin from '../../images/linkedin.svg';
import email from '../../images/email.svg';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div>
        <Navbar className="navbar">
          <NavbarBrand href="/"><img src={logo} alt="" className="logo"/></NavbarBrand>
          <div className="links">
            <Link to="/about"><span className="about link">About</span></Link> 
            <img src={github} onClick={() => window.open('https://github.com/jimsancan', '_blank')} alt="" className="link"/>
            <img src={linkedin} onClick={() => window.open('https://www.linkedin.com/in/jsanderscannon/', '_blank')} alt="" className="link"/>
            <img src={email} onClick={() => window.location.href = "mailto:jimmy.sanderscannon@gmail.com?subject=Let's Chat"} alt="" className="link"/>
          </div>
        </Navbar>
      </div>
      )
  }
};