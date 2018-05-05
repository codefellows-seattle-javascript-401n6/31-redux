'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import App from './components/budget-app.jsx';
import './style/main.scss'

let root = document.createElement('div');
document.body.appendChild(root);

ReactDom.render(<App />, root);