import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { filterName } from '../actions';

class Filters extends Component {
  render() {
    const { getFilterByName } = this.props;

    return (
      <div>
        <h3>Filter results</h3>
        <input
          data-testid="name-filter" type="text" placeholder="Type a planet name"
          onChange={(event) => getFilterByName(event.target.value)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.filters.filterByName.name,
});

const mapDispatchToProps = (dispatch) => ({
  getFilterByName: (name) => dispatch(filterName(name)),
});

Filters.propTypes = {
  getFilterByName: PropTypes.func,
};

Filters.defaultProps = {
  getFilterByName: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);