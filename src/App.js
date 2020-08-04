import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import apiKey from './config';
import './App.css';

import Header from './components/Header';
import PhotoList from './components/PhotoList';
import NotFound from './components/NotFound';
import Loading from './components/Loading';

class App extends Component {
  state = {
    images: [],
    cats: [],
    dogs: [],
    sunsets: [],
    loading: true,
  };

  componentDidMount() {
    const cats = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&format=json&nojsoncallback=1`;
    const dogs = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=dogs&per_page=24&format=json&nojsoncallback=1`;
    const sunsets = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=sunsets&per_page=24&format=json&nojsoncallback=1`;

    axios
      .all([axios.get(cats), axios.get(dogs), axios.get(sunsets)])
      .then(
        axios.spread((cats, dogs, sunsets) => {
          this.setState({
            cats: cats.data.photos.photo,
            dogs: dogs.data.photos.photo,
            sunsets: sunsets.data.photos.photo,
            loading: false,
          });
        })
      )
      .catch((err) => {
        console.log('There was an error while trying to fetch the data: ', err);
      });
  }

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
      <div className='container'>
        <Header fetch={this.onSearch} />
        <Switch>
          <Route exact path='/' render={() => <Redirect to='/tags/cats' />} />
          {this.state.loading ? (
            <Loading />
          ) : (
            <Route
              path='/search/:query'
              render={() => <PhotoList images={this.state.images} />}
            />
          )}
          {this.state.loading ? (
            <Loading />
          ) : (
            <Route
              path='/tags/cats'
              render={() => <PhotoList images={this.state.cats} />}
            />
          )}
          {this.state.loading ? (
            <Loading />
          ) : (
            <Route
              path='/tags/dogs'
              render={() => <PhotoList images={this.state.dogs} />}
            />
          )}
          {this.state.loading ? (
            <Loading />
          ) : (
            <Route
              path='/tags/sunsets'
              render={() => <PhotoList images={this.state.sunsets} />}
            />
          )}

          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
