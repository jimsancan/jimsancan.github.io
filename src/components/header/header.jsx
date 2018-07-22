import React, {Component} from 'react';
import './header.scss'

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="header">
        I'm Jimmy, a New York City based developer
      </div>
     )
  }
};