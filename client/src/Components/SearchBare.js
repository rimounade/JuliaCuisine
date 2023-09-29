import React from 'react';
import { connect } from 'react-redux';
import { setSearchQuery } from "../Redux/Actions/SearchActions"


const SearchBare = ({ query, setSearchQuery }) => {
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className='search'>
    <input
    style={{margin:"10px"}}
      type="text"
      placeholder="Rechercher..."
      value={query}
      onChange={handleChange}
    />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    query: state.SearchReducer.query,
  };
};

export default connect(mapStateToProps, { setSearchQuery })(SearchBare);