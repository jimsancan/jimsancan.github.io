import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import './projectPage.scss';

export default class ProjectPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Row className="project-row">
        <Col xl="6" md="12" sm="12" xs="12">
          <div className="img-col">
            <img src={this.props.photo} alt="" className="img-fluid"/>
          </div>
        </Col>
        <Col xl="6" md="12" sm="12" xs="12">
          <div className="text-col">
            <p className="text">{this.props.text}</p>
            <div className="buttonDiv"><button className="demoButton" onClick={() => {window.open(this.props.url, '_blank')}}>Demo</button></div>
          </div>
        </Col>
        <hr width="100%" color="white"/>
        <Col><div><p className="tech">{this.props.tech}</p></div></Col>
      </Row>
     )
  }
};