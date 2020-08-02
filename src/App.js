import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import apiKey from './config';
import './App.css';

import Header from './components/Header';
import PhotoList from './components/PhotoList';
import NotFound from './components/NotFound';

class App extends Component {
  state = {
    images: [],
  };

  componentDidMount() {}

  onSearch = (query) => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((res) => {
        this.setState({
          images: res.data.photos.photo,
        });
      })
      .catch((err) => {
        console.log('There was an error while trying to fetch the data: ', err);
      });
  };

  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <Header fetch={this.onSearch} />
          <PhotoList images={this.state.images} />
          <Switch>
            <Route path='/tags/cats' />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
