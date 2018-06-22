import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/app/App';
import registerServiceWorker from './registerServiceWorker';
import '../src/styles/main.scss'
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
