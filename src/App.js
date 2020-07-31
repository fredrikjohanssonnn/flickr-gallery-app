import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from './Context';
import './App.css';

import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className='container'>
          <Header />
        </div>
      </Provider>
    );
  }
}

export default App;
