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
    foxes: [],
    dogs: [],
    sunsets: [],
    loading: true,
  };

  componentDidMount() {
    const foxes = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=foxes&per_page=24&format=json&nojsoncallback=1`;
    const dogs = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=dogs&per_page=24&format=json&nojsoncallback=1`;
    const sunsets = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=sunsets&per_page=24&format=json&nojsoncallback=1`;

    axios
      .all([axios.get(foxes), axios.get(dogs), axios.get(sunsets)])
      .then(
        axios.spread((foxes, dogs, sunsets) => {
          this.setState({
            foxes: foxes.data.photos.photo,
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
    this.setState({ loading: true });
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((res) => {
        this.setState({
          images: res.data.photos.photo,
          loading: false,
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
          <Route exact path='/' render={() => <Redirect to='/tags/foxes' />} />
          {this.state.loading ? (
            <Loading />
          ) : (
            <Route
              path='/search/:query'
              render={() => (
                <PhotoList
                  loading={this.state.loading}
                  images={this.state.images}
                />
              )}
            />
          )}
          {this.state.loading ? (
            <Loading />
          ) : (
            <Route
              path='/tags/foxes'
              render={() => <PhotoList images={this.state.foxes} />}
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
