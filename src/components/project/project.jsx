import React, {Component} from 'react';
import {Row, Col} from 'reactstrap'
import {Link} from 'react-router-dom';
import './project.scss';
import eatly from '../../images/eatly2.png';
import brevity from '../../images/brevity.png';

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
        <Row className="row">
          <Col xl="6" md="12" sm="12" xs="12"><div className="image"><Link to="/eatly"><img src={eatly}  alt="" className=" img-fluid projectImg" /></Link></div></Col>
          <Col xl="6" md="12" sm="12" xs="12"><div className="image"><Link to="/brevity"><img  src={brevity} alt="" className=" img-fluid projectImg"/></Link></div></Col>
          {/* need to add hover effects*/}
        </Row>
     )
  }
};