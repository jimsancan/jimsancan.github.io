import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import './brevity.scss';
import brevityImg from '../../images/brevity2.png';

export default class Brevity extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Row>
        <Col xl="6" md="12" sm="12" xs="12"><img src={brevityImg} alt="" className="img-fluid"/></Col>
        <Col xl="6" md="12" sm="12" xs="12">TEXT HERE</Col>
      </Row>
     )
  }
};