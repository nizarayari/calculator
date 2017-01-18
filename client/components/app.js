import React from "react";
import ReactDOM from "react-dom";

import '../style.css'

import App from './main.js'

import { AppContainer } from 'react-hot-loader'

ReactDOM.render(
  <AppContainer>
    <App/>
  </AppContainer>,
  document.getElementById('App')
);


//don't refresh the entire app, apply the changement and preserve state
if(module.hot){
  module.hot.accept('./main.js',() => {
    const NextApp = require('./main.js').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp/>
      </AppContainer>,
      document.getElementById('App')
    );
  })
}