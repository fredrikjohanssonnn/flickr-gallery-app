import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Search extends Component {
  state = {
    value: '',
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.fetch(this.state.value);
    const value = this.state.value;
    this.props.history.push(`/search/${value}`);
    e.currentTarget.reset();
  };

  render() {
    return (
      <form className='search-form' onSubmit={this.handleSubmit}>
        <input
          type='search'
          name='search'
          placeholder='Search'
          onChange={this.handleChange}
          required
        />
        <button type='submit' className='search-button'>
          Search
        </button>
      </form>
    );
  }
}

export default withRouter(Search);
