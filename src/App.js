import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js';
import BusinessList from './components/BusinessList/BusinessList.js';
import { Yelp } from './util/Yelp.js';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.searchYelp = this.searchYelp.bind(this);
    this.state = {
      businesses: []
    }
  }

  searchYelp (term, location, sortBy) {
    Yelp.search(term, location, sortBy)
    .then(businesses => {
      this.setState({businesses: businesses});
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Find Me Some Food</h1>
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList businesses={this.state.businesses}/>
      </div>
    );
  }
}

export default App;
