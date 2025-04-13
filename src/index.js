import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Font Awesome (you'll need to install the package)
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUniversity, faSchool, faCertificate } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(faUniversity, faSchool, faCertificate, faLinkedin);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();