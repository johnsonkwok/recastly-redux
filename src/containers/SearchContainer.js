import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleVideoSearch from '../actions/search.js';

// Write our mapStateToProps function which should take in state at a min and ownProps
  // Should return a plain object with the data the component needs
// Write a mapDispatchToProps func which takes in the dispatch function
  // Should return a plain object where each field becomes a prop for the component
  // whose values should be the function to dispatch
  
const mapStateToProps = state => {
    return {value: state.value};
};

const mapDispatchToProps = dispatch => {
    return {handleSearchInputChange: (q) => dispatch(handleVideoSearch(q))};
};

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.
var SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);


export default SearchContainer;
