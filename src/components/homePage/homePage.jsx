import React, {Component} from 'react';
import Header from '../header/header';
import Project from '../project/project';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <Header />
        <Project />
        <hr color="#457a9d" width="75%" />
      </div>
     )
  }
};