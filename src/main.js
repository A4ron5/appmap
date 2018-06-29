import React, { Component } from 'react';
import { App } from './features/app'

import { store } from './store'
import { Provider } from 'react-redux' 
import { Route, BrowserRouter } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route exact path='/' component={App}/>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Main;
