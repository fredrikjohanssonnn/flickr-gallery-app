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

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.onSearch(this.state.value);
    e.currentTarget.reset();
  };

  onSearch = (query) => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=&format=json&nojsoncallback=1`
      )
      .then((res) => {
        this.setState({
          images: res.photos.photo,
        });
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
            handleChange: this.handleChange,
            handleSubmit: this.handleSubmit,
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
