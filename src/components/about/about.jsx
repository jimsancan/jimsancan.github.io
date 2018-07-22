import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import './about.scss';

export default class ProjectPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Row className="project-row">
        <Col xl="6" md="12" sm="12" xs="12">
        <div className="text-col">
          <p className="text">{this.props.text}</p>
        </div>
        <div className="buttonDiv"><button className="demoButton" onClick={() => {window.location="/"}}>Main Page</button></div>
        </Col>
        <Col xl="6" md="12" sm="12" xs="12">
          <div className="img-col">
            <img src={this.props.photo} alt="" className="img-fluid"/>
          </div>
        </Col>
      </Row>
     )
  }
};