import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/app/App';
import registerServiceWorker from './registerServiceWorker';
import '../src/styles/main.scss'
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(<Router basename={process.env.PUBLIC_URL}><App/></Router>, document.getElementById('root'));
registerServiceWorker();
