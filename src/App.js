import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from './Context';
import axios from 'axios';
import apiKey from './config';
import './App.css';

import Header from './components/Header';

class App extends Component {
  state = {
    images: [],
    value: '',
  };

  onSearch = (query) => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=&format=json&nojsoncallback=1`
      )
      .then((res) => {
        console.log(res.data.photos);
      })
      .catch((err) => {
        console.log('There was an error while trying to fetch the data: ', err);
      });
  };

  render() {
    return (
      <Provider
        value={{
          images: this.state.images,
          actions: {
            onSearch: this.onSearch,
          },
        }}
      >
        <BrowserRouter>
          <div className='container'>
            <Header />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
