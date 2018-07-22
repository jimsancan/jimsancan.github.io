import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Nav from '../nav/nav';
import HomePage from '../homePage/homePage';
import About from '../about/about';
import ProjectPage from '../projectPage/projectPage';
import projectInfo from '../../projectInfo';
import EatlyPhoto from '../../images/eatly1.png';
import BrevityPhoto from '../../images/brevity2.png'
import Holder from '../../images/holder.jpeg';

export default class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <div>
          <Nav/> 
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/about" render={() => <About text={projectInfo.aboutText} photo={Holder}/>}/>
          <Route exact path="/eatly" render={() => <ProjectPage text={projectInfo.eatlyText} url={projectInfo.eatlyUrl} tech={projectInfo.eatlyTech} photo={EatlyPhoto} />}/> 
          <Route exact path="/brevity" render={() => <ProjectPage text={projectInfo.brevityText} url={projectInfo.brevityUrl} tech={projectInfo.brevityTech}photo={BrevityPhoto}/>}/> 
        </div>
        </Router>
        <div className="footer">
            &copy; Built by Jimmy Sanders-Cannon
        </div>
      </div>
    );
  }
};